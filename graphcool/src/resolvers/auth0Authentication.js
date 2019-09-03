const jwt = require('jsonwebtoken');
const jwkRsa = require('jwks-rsa');
const fromEvent = require('graphcool-lib').fromEvent;



export default async event => {
  const { accessToken, idToken } = event.data;
  const authToken = accessToken || idToken;
  const audience = accessToken !== undefined ? process.env.AUTH0_API_IDENTIFIER : process.env.AUTH0_CLIENT_ID;

  if (!process.env.AUTH0_DOMAIN) {
    return { error: 'Missing AUTH0_DOMAIN environment variable' };
  }

  if (accessToken && !process.env.AUTH0_API_IDENTIFIER) {
    return { error: 'Missing AUTH0_API_IDENTIFIER environment variable' };
  }

  if (idToken && !process.env.AUTH0_CLIENT_ID) {
    return { error: 'Missing AUTH0_CLIENT_ID environment variable' };
  }

  try {
    const graphcool = fromEvent(event);
    const api = graphcool.api('simple/v1');

    const decodedToken = await verifyToken(authToken, audience);
    let graphCoolUser = await getGraphcoolUser(decodedToken.sub, api);

    //If the user doesn't exist, a new record is created.
    if (graphCoolUser === null) {
      let email = decodedToken.email;

      // fetch email if scope includes it and accessToken exists
      if (!email && accessToken && decodedToken.scope.includes('email')) {
        email = await fetchAuth0Email(accessToken);
      }

      graphCoolUser = await createGraphCoolUser(
        decodedToken.sub,
        email,
        api
      );
    }

    // custom exp does not work yet, see https://github.com/graphcool/graphcool-lib/issues/19
    const token = await graphcool.generateNodeToken(
      graphCoolUser.id,
      'User',
      decodedToken.exp
    );

    console.log(`token=${token}     `);

    return { data: { id: graphCoolUser.id, token } };
  } catch (err) {
    return { error: err };
  }
};



/**
 * Validates the request JWT token
 * @param {string} token 
 * @param {string} audience 
 */
function verifyToken(token, audience) {
  //Decode the JWT Token
  const decoded = jwt.decode(token, { complete: true });

  if (!decoded || !decoded.header || !decoded.header.kid) {
    throw new Error('Unable to retrieve key identifier from token ');
  }

  if (decoded.header.alg !== 'RS256') {
    throw new Error(
      `Wrong signature algorithm, expected RS256, got ${decoded.header.alg}`
    );
  }

  const jkwsClient = jwkRsa({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    // jwksUri: "https://inscriptum.auth0.com/.well-known/jwks.json"
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  });


  return new Promise(resolve => {
    //Retrieve the JKWS's signing key using the decode token's key identifier (kid)
    jkwsClient.getSigningKey(decoded.header.kid, (err, key) => {
      if (err) throw new Error(err);

      const signingKey = key.publicKey || key.rsaPublicKey;
      //if the JWT Token was valid, verify its validity against the JKWS's signing key
      jwt.verify(
        token,
        signingKey,
        {
          algorithms: ['RS256'],
          // ignoreExpiration: false,
          issuer: "https://inscriptum.auth0.com/",//`https://${process.env.AUTH0_DOMAIN}/`,
          audience
        },
        (err, decoded) => {
          if (err) throw new Error(err);
          return resolve(decoded);
        }
      );
    });
  });
}



//Retrieves the Graphcool user record using the Auth0 user id
const getGraphcoolUser = (auth0UserId, api) =>
  api
    .request(/* GraphQL */`
        query getUser($auth0UserId: String!){
          User(auth0UserId: $auth0UserId){
            id
          }
        }
      `,
      { auth0UserId }
    )
    .then(queryResult => queryResult.User);



//Creates a new User record.
const createGraphCoolUser = (auth0UserId, email, api) =>
  api
    .request(/* GraphQL */`
        mutation createUser($auth0UserId: String!, $email: String) {
          createUser(
            auth0UserId: $auth0UserId
            email: $email
          ){
            id
          }
        }
      `,
      { auth0UserId, email }
    )
    .then(queryResult => queryResult.createUser);




const fetchAuth0Email = accessToken =>
  fetch(
    `https://${process.env.AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`
  )
    .then(response => response.json())
    .then(json => json.email)

import auth0, { Auth0DecodedHash, Auth0Error, Auth0ParseHashError } from 'auth0-js';
import { Auth } from '../models/auth.model';
import { Observable } from 'rxjs';

export function auth(redirectUri: string): Observable<Auth> {
  const webAuth: auth0.WebAuth = new auth0.WebAuth({
    domain: 'inscriptum.auth0.com',
    clientID: 'sSGAFDwnRqJUsJw7v12KV8SAeuYtl3Cd',
    redirectUri,
    responseType: 'token id_token',
    scope: 'openid email',
    audience: 'https://inscriptum.js.org',
  });

  const hash: string = sessionStorage.windowLocationHash ?? window.location.hash;

  if (hash != null && hash.length > 0) {
    return handleAuthentication(webAuth);
  } else {
    return renewTokens(webAuth, redirectUri);
  }
}

/**
 * Handle token from url
 */
function handleAuthentication(webAuth: auth0.WebAuth): Observable<Auth> {
  const hash = sessionStorage.windowLocationHash ?? window.location.hash;

  return new Observable((subscriber) => {
    webAuth.parseHash({ hash }, (err, authResult) => {
      const result = localLogin(err, authResult);
      subscriber.next(result);
    });
  });
}

/**
 * Get new token if a session is valid
 */
function renewTokens(webAuth: auth0.WebAuth, redirectUri: string): Observable<Auth> {
  return new Observable((subscriber) => {
    webAuth.checkSession({}, (err, authResult) => {
      try {
        const result = localLogin(err, authResult);
        subscriber.next(result);
      } catch (error) {
        webAuth.authorize({ redirectUri });

        subscriber.error(error);
      }
    });
  });
}

/**
 * Save auth token and get auth object for connect to data source
 *
 * @param authResult - auth0 request result
 */
function localLogin(err: Auth0Error | Auth0ParseHashError | null, authResult: Auth0DecodedHash | null): Auth {
  // check auth result
  if (authResult?.accessToken != null && authResult?.idToken != null) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    // Set the time that the access token will expire at
    const expiresAt = Number(JSON.stringify((authResult.expiresIn ?? 1) * 1000 + new Date().getTime()));
    const accessToken = authResult.accessToken;
    const idToken = authResult.idToken;

    if (authResult.idTokenPayload == null) {
      alert('idTokenPayload is undefined');
    }

    const userInfo = {
      auth0Id: authResult.idTokenPayload['https://hasura.io/jwt/claims']['x-hasura-user-id'],
      email: authResult.idTokenPayload.email,
    };

    return {
      accessToken,
      expiresAt,
      idToken,
      userInfo,
    };
  } else {
    let errorMsg = '';
    if (err) {
      errorMsg = 'Error: ' + err.error + '. Check the console for further details.';
      console.warn(errorMsg);
    }

    throw Error(errorMsg);
  }
}

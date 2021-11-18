import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js';
import { Auth } from '../models/auth.model';
import { config } from 'settings';

let _auth0: Auth0Client | null = null;

async function getAuthClient() {
  if (_auth0 != null) {
    return _auth0;
  }

  return (_auth0 = await createAuth0Client({
    domain: 'inscriptum.auth0.com',
    client_id: 'sSGAFDwnRqJUsJw7v12KV8SAeuYtl3Cd',
    audience: 'https://inscriptum.js.org',
  }));
}

export async function auth(redirectUri: string): Promise<Auth> {
  // Auth is disabled
  if (config.isAuthDisabled) {
    const date = new Date();
    // add a day
    const expiresAt = date.setDate(date.getDate() + 1);

    const auth: Auth = {
      accessToken: '',
      expiresAt,
      userInfo: {
        auth0Id: 'auth0|5c2b3430c12e3e5be73e5b35',
        email: 'test@test.test',
      },
    };
    return auth;
  }

  const query = window.location.search;

  if (query.includes('code=') && query.includes('state=')) {
    return handleAuthentication(redirectUri);
  } else {
    return login(redirectUri);
  }
}

/**
 * Handle token from url
 */
async function handleAuthentication(redirectUri: string) {
  // const hash = sessionStorage.windowLocationHash ?? window.location.hash;
  const auth0 = await getAuthClient();

  try {
    const isAuthenticated = await auth0.isAuthenticated();

    if (!isAuthenticated) {
      await auth0.handleRedirectCallback();
    }

    // Use replaceState to redirect the user away and remove the querystring parameters
    window.history.replaceState({}, document.title, redirectUri);
  } catch (error) {
    throw new Error(error);
  }

  return createAuthState();

  // return result;

  // localLogin(err, authResult);

  // return new Observable(async (subscriber) => {
  //   // Process the login state
  //   (await auth0Client).handleRedirectCallback();

  //   // webAuth.parseHash({ hash }, (err, authResult) => {
  //   //   const result = localLogin(err, authResult);
  //   //   subscriber.next(result);
  //   // });
  // });
}

/**
 * Get new token if a session is valid or login
 */
async function login(redirectUri: string): Promise<Auth> {
  const accessToken = sessionStorage.getItem('accessToken');
  const userInfoStr = sessionStorage.getItem('userInfo');
  const expiresAt = Number(sessionStorage.getItem('expiresAt'));

  if (accessToken != null && userInfoStr != null && expiresAt > Date.now()) {
    const userInfo: Auth['userInfo'] = JSON.parse(userInfoStr);

    return {
      accessToken,
      userInfo,
      expiresAt
    };
  }

  const auth0 = await getAuthClient();
  const isAuthenticated = await auth0.isAuthenticated();

  if (!isAuthenticated) {
    await auth0.loginWithRedirect({
      redirect_uri: redirectUri,
    });
  }

  return createAuthState();
}

/**
 * Save auth token and get auth object for connect to data source
 *
 * @param authResult - auth0 request result
 */
async function createAuthState(): Promise<Auth> {
  const auth0 = await getAuthClient();

  const accessToken = await auth0.getTokenSilently();
  const user = await auth0.getUser();

  if (user == null) {
    throw new Error("Can't find user info");
  }

  const userInfo: Auth['userInfo'] = {
    auth0Id: user.sub!,
    email: user.email,
  };

  const date = new Date();
  // add a day
  const expiresAt = date.setDate(date.getDate() + 1);

  sessionStorage.setItem('accessToken', accessToken);
  sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
  sessionStorage.setItem('expiresAt', JSON.stringify(expiresAt));

  return {
    accessToken,
    userInfo,
    expiresAt
  };
}

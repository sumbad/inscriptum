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
    return disabledAuth();
  }

  const query = window.location.search;

  if (query.includes('code=') && query.includes('state=')) {
    return handleAuthentication(redirectUri);
  } else {
    return login(redirectUri);
  }
}

export async function silentAuth() {
  // Auth is disabled
  if (config.isAuthDisabled) {
    return disabledAuth();
  }
  
  return login(undefined, true);
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
}

/**
 * Get new token if a session is valid or login
 */
async function login(redirectUri?: string, silent: boolean = false): Promise<Auth> {
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

  if (!isAuthenticated && !silent) {
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
    uid: user.sub!,
    email: user.email || null,
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

function disabledAuth() {
  const date = new Date();
  // add a day
  const expiresAt = date.setDate(date.getDate() + 1);

  const auth: Auth = {
    accessToken: '',
    expiresAt,
    userInfo: {
      uid: 'Wk2PD0EhcbWeaMCSR3lHG4j9zEG2',
      email: 'test@test.test',
    },
  };

  return auth;
}
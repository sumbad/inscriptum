import { StorageService } from './storage/storage.service';
import { BehaviorSubject } from 'rxjs';
import auth0 from 'auth0-js';

export interface UserInfo extends auth0.Auth0UserProfile {
  email: string;
  email_verified: boolean;
  'https://hasura.io/jwt/claims': {
    'x-hasura-default-role': string;
    'x-hasura-allowed-roles': string[];
    'x-hasura-user-id': string;
  };
  sub: string;
}

/**
 * @deprecated
 * Singleton. Auth service
 */
export class AuthService {
  private static instance: AuthService;

  /** subject to observe authenticate event */
  $authenticated = new BehaviorSubject<boolean | null>(null);
  /** auth0 WebAuth obj */
  webAuth: auth0.WebAuth;
  /** access token */
  accessToken: string;
  /** token id */
  idToken: string;
  /** token expiration date */
  expiresAt: number;

  /** get user info */
  public userInfo: UserInfo;

  constructor(private _storageService: StorageService, private _redirectUrl: string = document.URL) {
    const newWebAuth = () =>
      // TODO: move to .env
      new auth0.WebAuth({
        domain: 'inscriptum.auth0.com',
        clientID: 'sSGAFDwnRqJUsJw7v12KV8SAeuYtl3Cd',
        redirectUri: _redirectUrl,
        responseType: 'token id_token',
        scope: 'openid email',
        audience: 'https://inscriptum.js.org',
      });

    if (AuthService.instance) {
      if (AuthService.instance._redirectUrl !== _redirectUrl) {
        AuthService.instance.webAuth = newWebAuth();
      }
      return AuthService.instance;
    }

    this.webAuth = newWebAuth();

    // check auth
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.renewTokens();
    } else {
      this.handleAuthentication();
    }

    AuthService.instance = this;
  }

  /**
   * Handle token from url
   */
  handleAuthentication() {
    const hash = sessionStorage.windowLocationHash ?? window.location.hash;

    this.webAuth.parseHash({ hash }, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
      } else {
        if (err) {
          console.warn('Error: ' + err.error + '. Check the console for further details.');
        }
        this.$authenticated.next(false);
      }
    });
  }

  /**
   * Get new token if a session is valid
   */
  renewTokens() {
    this.webAuth.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        console.warn('Could not get a new token ' + err.error + ':' + err.errorDescription + '.');
        this.logout();
      }
    });
  }

  /**
   * Go to login page
   */
  login() {
    this.webAuth.authorize();
  }

  /**
   * Logout
   */
  logout() {
    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    // Remove tokens and expiry time
    this.accessToken = '';
    this.idToken = '';
    this.expiresAt = 0;

    this.$authenticated.next(false);
  }

  /**
   * Save auth token and get auth object for connect to data source
   *
   * @param authResult - auth0 request result
   */
  async localLogin(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    // Set the time that the access token will expire at
    this.expiresAt = Number(JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime()));
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;

    const userInfo: UserInfo = await new Promise((resolve, reject) => {
      this.webAuth.client.userInfo(this.accessToken, (err, userInfo: UserInfo) => {
        if (err) {
          reject(err);
        } else {
          resolve(userInfo);
        }
      });
    });

    this.userInfo = userInfo;

    await this._storageService.authenticateAuthor(this.idToken, userInfo);

    if (this.userInfo !== undefined) {
      this.$authenticated.next(true);
    }
  }

  /**
   * Check if user logged in
   */
  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    var expiration = this.expiresAt || 0;
    return localStorage.getItem('isLoggedIn') === 'true' && new Date().getTime() < expiration;
  }
}

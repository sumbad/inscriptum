import Auth0Lock from 'auth0-lock';
import { StorageService } from 'storage/storage.service';
import { BehaviorSubject } from 'rxjs';



/**
 * Singleton. Auth service
 */
export class AuthService {
  private static instance: AuthService;

  /** subject to observe authenticate event */
  $authenticated = new BehaviorSubject<boolean>(false);

  /** option to get auth */
  private _options: Auth0LockConstructorOptions = {
    auth: {
      // redirect: false,
      redirectUrl: 'http://localhost:3000/editor',
      responseType: 'token id_token',
      params: {
        scope: 'openid email'
      },
      audience: 'https://inscriptum.js.org'
    }
  };


  constructor(
    private _storageService: StorageService
  ) {
    if (AuthService.instance) {
      return AuthService.instance;
    }

    const lock = new Auth0Lock(
      'sSGAFDwnRqJUsJw7v12KV8SAeuYtl3Cd',
      'inscriptum.auth0.com',
      this._options,
    );

    // Listening for the authenticated event
    lock.on('authenticated',
      (authResult) => {
        this.checkAuth(authResult.accessToken, lock);
        // Use the token in authResult to getUserInfo() and save it to localStorage
        lock.getUserInfo(authResult.accessToken,
          (error, profile) => {
            if (error) {
              throw error;
            }
            localStorage.setItem('accessToken', authResult.accessToken);
            localStorage.setItem('auth0IdToken', authResult.idToken);
            localStorage.setItem('profile', JSON.stringify(profile));
            lock.hide();
          }
        );
      }
    );

    this.checkAuth(localStorage.getItem('accessToken') || '', lock);

    AuthService.instance = this;
  }



  /**
   * Check user authentication by access token
   * 
   * @param accessToken - user access token
   * @param lock - auth0 lock instance
   */
  async checkAuth(accessToken: string, lock: Auth0LockStatic) {    
    try {
      await new Promise(
        (resolve, reject) => {
          lock.getUserInfo(
            accessToken,
            (error, profile) => {
              if (error) {
                reject(error);
              } else {
                resolve(profile);
              }
            }
          );
        }
      );

      const authObj = await this._storageService.authenticateUser(accessToken);

      if(authObj){
        this.$authenticated.next(true);
      }
    } catch (error) {
      lock.show();
    }
  }

}

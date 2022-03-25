import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, User, signOut } from 'firebase/auth';
import { Auth } from 'models/auth.model';
import { authElement } from 'app/notepad/auth.element';
import { config } from 'settings';

export function authModule() {
  // Initialize Firebase
  const app = initializeApp(config.firebaseConfig);
  const auth = getAuth(app);

  // Make a new auth element
  const AuthElementConstructor = authElement('inscriptum-auth');
  const AuthElement = new AuthElementConstructor();
  document.body.appendChild(AuthElement);

  async function login(hintMessage?: string) {
    if (config.isAuthDisabled) {
      return disabledAuth();
    }

    const user: User | null = await new Promise((resolve) => onAuthStateChanged(auth, (u) => resolve(u)));

    if (user == null) {
      // TODO: refactor web-companions
      AuthElement.props = { 
        isOpen: true,
        message: hintMessage
      }; // supported by JS & TS
      // AuthElement['next']({isOpen: true}); // supported by JS
      // AuthElement['isOpen'] = true; // supported by JS
      return null;
    } else {
      const accessToken = await user.getIdToken();
      const tokenResult = await user.getIdTokenResult();

      return {
        accessToken,
        expiresAt: Date.parse(tokenResult.expirationTime),
        userInfo: {
          uid: user.uid,
          email: user.email,
        },
      };
    }
  }

  async function logout(redirectUri?: string) {
    await signOut(auth);

    if (redirectUri != null) {
      location.replace(redirectUri);
    } else {
      location.reload();
    }
  }

  async function signIn(email: string, password: string): Promise<Auth> {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const accessToken = await user.getIdToken();
    const tokenResult = await user.getIdTokenResult();

    return {
      accessToken,
      expiresAt: Date.parse(tokenResult.expirationTime),
      userInfo: {
        uid: user.uid,
        email: user.email,
      },
    };
  }

  function disabledAuth() {
    const date = new Date();
    // add a day
    const expiresAt = date.setDate(date.getDate() + 1);

    if(config.testUserUID == null || config.testUserEmail == null) {
      throw new Error("Please set TEST_USER_UID and TEST_USER_EMAIL");
    }

    const auth: Auth = {
      accessToken: '',
      expiresAt,
      userInfo: {
        uid: config.testUserUID,
        email: config.testUserEmail,
      },
    };

    return auth;
  }

  return {
    login,
    logout,
    signIn,
  };
}

import { Auth } from 'models/auth.model';

const a = 'AUTH_ACTION' as const;

const AUTH: unique symbol = Symbol(`[${a}] AUTH`);
const AUTH_DONE: unique symbol = Symbol(`[${a}] AUTH_DONE`);
const AUTH_FAIL: unique symbol = Symbol(`[${a}] AUTH_FAIL`);

const SING_IN: unique symbol = Symbol(`[${a}] SING_IN`);
const SING_IN_DONE: unique symbol = Symbol(`[${a}] SING_IN_DONE`);
const SING_IN_FAIL: unique symbol = Symbol(`[${a}] SING_IN_FAIL`);

const LOGOUT: unique symbol = Symbol(`[${a}] LOGOUT`);
const LOGOUT_DONE: unique symbol = Symbol(`[${a}] LOGOUT_DONE`);
const LOGOUT_FAIL: unique symbol = Symbol(`[${a}] LOGOUT_FAIL`);

export const AUTH_ACTION = {
  AUTH,
  AUTH_DONE,
  AUTH_FAIL,
  SING_IN,
  SING_IN_DONE,
  SING_IN_FAIL,
  LOGOUT,
  LOGOUT_DONE,
  LOGOUT_FAIL,
} as const;

export type AuthActionAuth = {
  type: typeof AUTH_ACTION.AUTH;
  payload: {
    redirectUri?: string;
    silent?: boolean;
  };
};

export type AuthActionSignIn = {
  type: typeof AUTH_ACTION.SING_IN;
  payload: {
    email: string;
    password: string;
  };
};

export type AuthActionLogout = {
  type: typeof AUTH_ACTION.LOGOUT;
  payload: {
    redirectUri?: string;
  };
};

export type AuthAction =
  | AuthActionAuth
  | {
      type: typeof AUTH_ACTION.AUTH_DONE;
      payload: Auth | null;
    }
  | {
      type: typeof AUTH_ACTION.AUTH_FAIL;
      payload: { error: any };
    }
  | AuthActionSignIn
  | {
      type: typeof AUTH_ACTION.SING_IN_DONE;
      payload: Auth;
    }
  | {
      type: typeof AUTH_ACTION.SING_IN_FAIL;
      payload: { error: any };
    }
  | AuthActionLogout
  | {
      type: typeof AUTH_ACTION.LOGOUT_DONE;
      payload: null;
    }
  | {
      type: typeof AUTH_ACTION.LOGOUT_FAIL;
      payload: { error: any };
    };

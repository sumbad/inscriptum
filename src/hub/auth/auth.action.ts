import { Auth } from 'models/auth.model';

const a = 'AUTH_ACTION' as const;

const AUTH: unique symbol = Symbol(`[${a}] AUTH`);
const AUTH_DONE: unique symbol = Symbol(`[${a}] AUTH_DONE`);
const AUTH_FAIL: unique symbol = Symbol(`[${a}] AUTH_FAIL`);

export const AUTH_ACTION = {
  AUTH,
  AUTH_DONE,
  AUTH_FAIL,
} as const;

export type AuthActionAuth = {
  type: typeof AUTH_ACTION.AUTH;
  payload: {
    redirectUri?: string;
    silent?: boolean;
  };
};

export type AuthAction =
  | AuthActionAuth
  | {
      type: typeof AUTH_ACTION.AUTH_DONE;
      payload: Auth;
    }
  | {
      type: typeof AUTH_ACTION.AUTH_FAIL;
      payload: { error: any };
    };

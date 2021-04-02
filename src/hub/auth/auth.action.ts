import { Auth } from 'models/auth.model';

const p = 'AUTH_ACTION' as const;

const AUTH: unique symbol = Symbol(`[${p}] AUTH`);
const AUTH_DONE: unique symbol = Symbol(`[${p}] AUTH_DONE`);
const AUTH_FAIL: unique symbol = Symbol(`[${p}] AUTH_FAIL`);

export const AUTH_ACTION = {
  AUTH,
  AUTH_DONE,
  AUTH_FAIL,
} as const;

export type AuthAction =
  | {
      type: typeof AUTH_ACTION.AUTH;
      payload: {
        redirectUri: string;
      };
    }
  | {
      type: typeof AUTH_ACTION.AUTH_DONE;
      payload: Auth;
    }
  | {
      type: typeof AUTH_ACTION.AUTH_FAIL;
      payload: { error: any };
    };

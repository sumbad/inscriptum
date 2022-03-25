import { AuthAction, AUTH_ACTION } from 'hub/auth/auth.action';
import { auth$, authLogOutEffect, authSignInEffect } from 'hub/auth/auth.effect';
import hub from 'hub';
import { Observable, merge } from 'rxjs';
import { startWith, scan, distinct, publishReplay, refCount } from 'rxjs/operators';
import { filterByActionsGroup } from 'utils/operators';
import { Auth } from 'models/auth.model';

export interface AuthState {
  data?: Auth | null;
  error?: any | null;
  isLoading?: boolean;
}

const initialState: AuthState = {
  isLoading: false,
};

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case AUTH_ACTION.AUTH:
    case AUTH_ACTION.SING_IN:
    case AUTH_ACTION.LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case AUTH_ACTION.AUTH_DONE:
    case AUTH_ACTION.SING_IN_DONE:
    case AUTH_ACTION.LOGOUT_DONE:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case AUTH_ACTION.AUTH_FAIL:
    case AUTH_ACTION.SING_IN_FAIL:
    case AUTH_ACTION.LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
}

export const authState: Observable<AuthState> = merge(hub.$, auth$, authSignInEffect, authLogOutEffect).pipe(
  filterByActionsGroup(AUTH_ACTION),
  startWith(initialState),
  scan(reducer),
  distinct(),
  publishReplay(1),
  refCount()
) as Observable<AuthState>;

// global subscriber
authState.subscribe();

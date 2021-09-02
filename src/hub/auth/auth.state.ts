import { AuthAction, AUTH_ACTION } from 'hub/auth/auth.action';
import { auth$ } from 'hub/auth/auth.effect';
import hub from 'hub';
import { Observable, merge } from 'rxjs';
import { startWith, scan, distinct, publishReplay, refCount } from 'rxjs/operators';
import { filterByActionsGroup } from 'utils/operators';
import { Auth } from 'models/auth.model';

export interface AuthState {
  data?: Auth;
  error?: any | null;
  isLoading?: boolean;
}

const initialState: AuthState = {
  isLoading: false,
};

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case AUTH_ACTION.AUTH:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case AUTH_ACTION.AUTH_DONE:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case AUTH_ACTION.AUTH_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

export const authState: Observable<AuthState> = merge(hub.$, auth$).pipe(
  filterByActionsGroup(AUTH_ACTION),
  startWith(initialState),
  scan(reducer),
  distinct(),
  publishReplay(1),
  refCount()
);

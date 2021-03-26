import { AuthAction, AUTH_ACTION } from 'hub/actions/auth.action';
import { auth$ } from 'hub/effects/auth.effect';
import hub from 'hub';
import { Observable, merge } from 'rxjs';
import { startWith, scan, distinct, publishReplay, refCount } from 'rxjs/operators';
import { AuthState } from 'services/auth.service';
import { filterByActions } from 'utils/operators';

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
      debugger;
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

const defaultState: AuthState = {
  isLoading: false,
};

export const authState: Observable<AuthState> = merge(hub.$, auth$).pipe(
  filterByActions(AUTH_ACTION),
  startWith(defaultState),
  scan(reducer),
  distinct(),
  publishReplay(1),
  refCount()
);

// authState.subscribe((state) => {
//   if(state.)
//   addAuthToken()
// });

import { merge, Observable, of, Subject } from 'rxjs';
import { startWith, scan, publishReplay, refCount, filter, map, switchMap, distinct, catchError } from 'rxjs/operators';
import { AuthAction, auth, AuthState } from 'services/Auth.service';
import { DraftAction } from 'services/DraftSubject.service';
import { PageAction } from 'services/PageSubject.service';

export interface GlobalState {
  auth?: AuthState;
}

const defaultState: GlobalState = {
  auth: undefined,
};

export type GlobalAction = AuthAction | DraftAction | PageAction;

const actions$ = new Subject<GlobalAction>();

// DEBUG: develop mode
window['actions$'] = actions$;


//#region Effects for global State (not for all)

const auth$: Observable<GlobalAction> = actions$.pipe(
  filter((action) => 'auth' === action.type), // TODO: resolve types
  switchMap((d: AuthAction) => {
    // debugger;
    return auth((d.payload as any).redirectUri).pipe(
      map((payload): AuthAction => ({
        type: 'auth done',
        payload,
      })),
      catchError((error) =>
        of<AuthAction>({
          type: 'auth failed',
          payload: error,
        })
      )
    );
  })
);

//#endregion Effects

function reducer(state: GlobalState, action: GlobalAction): GlobalState {
  switch (action.type) {
      case 'auth':
      return {
        ...state,
        auth: {
          error: null,
          isLoading: true,
        },
      };
    case 'auth done':
      return {
        ...state,
        auth: {
          data: action.payload,
          isLoading: false,
        },
      };
    case 'auth failed':
      debugger;
      return {
        ...state,
        auth: {
          error: action.payload,
          isLoading: false,
        },
      };
    default:
      return state;
  }
}

export function dispatch(action: GlobalAction): void {
  actions$.next(action);
}

export const state$: Observable<GlobalState> = merge(actions$, auth$).pipe(
  startWith(defaultState), //
  scan(reducer),
  distinct(),
  publishReplay(1),
  refCount()
);

export let state: GlobalState = defaultState;

state$.subscribe((s) => {
  state = s;
});

/**
 * Dispatcher
 */
export const dispatcher$ = actions$.asObservable();

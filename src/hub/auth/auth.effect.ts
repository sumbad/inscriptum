import { AUTH_ACTION, AuthAction, AuthActionSignIn, AuthActionLogout } from 'hub/auth/auth.action';
import hub from 'hub';
import { defer, Observable, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { authModule } from 'modules/auth.module';

const auth = authModule();

export const auth$: Observable<AuthAction> = hub.$.pipe(
  filter((action) => AUTH_ACTION.AUTH === action.type),
  switchMap(() => {
    return defer(() => auth.login()).pipe(
      map((payload): AuthAction => {
        return {
          type: AUTH_ACTION.AUTH_DONE,
          payload: payload,
        };
      }),
      filter((action) => action != null),
      catchError((error) => {
        console.warn(error);

        return of<AuthAction>({
          type: AUTH_ACTION.AUTH_FAIL,
          payload: error,
        });
      })
    );
  })
);

export const authSignInEffect: Observable<AuthAction> = hub.$.pipe(
  filter((action) => AUTH_ACTION.SING_IN === action.type),
  switchMap((d: AuthActionSignIn) => {
    return defer(() => auth.signIn(d.payload.email, d.payload.password)).pipe(
      map((payload): AuthAction => {
        return {
          type: AUTH_ACTION.AUTH_DONE,
          payload,
        };
      }),
      catchError((error) => {
        console.warn(error);
        auth.login(error.message);

        return of<AuthAction>({
          type: AUTH_ACTION.AUTH_FAIL,
          payload: error,
        });
      })
    );
  })
);

export const authLogOutEffect: Observable<AuthAction> = hub.$.pipe(
  filter((action) => AUTH_ACTION.LOGOUT === action.type),
  switchMap((action: AuthActionLogout) => {
    return defer(() => auth.logout(action.payload.redirectUri)).pipe(
      map((): AuthAction => {
        return {
          type: AUTH_ACTION.LOGOUT_DONE,
          payload: null,
        };
      }),
      catchError((error) => {
        console.warn(error);
        auth.login(error.message);

        return of<AuthAction>({
          type: AUTH_ACTION.LOGOUT_FAIL,
          payload: error,
        });
      })
    );
  })
);

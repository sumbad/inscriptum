import { AUTH_ACTION, AuthAction, AuthActionAuth } from 'hub/auth/auth.action';
import hub from 'hub';
import { defer, Observable, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { auth } from 'services/Auth.service';

export const auth$: Observable<AuthAction> = hub.$.pipe(
  filter((action) => AUTH_ACTION.AUTH === action.type),
  switchMap((d: AuthActionAuth) => {
    return defer(() => auth(d.payload.redirectUri)).pipe(
      map(
        (payload): AuthAction => 
        // {
        //   debugger;

        //   return {
        //     type: AUTH_ACTION.AUTH_DONE,
        //     payload,
        //   };
        // }

        ({
          type: AUTH_ACTION.AUTH_DONE,
          payload,
        })
      ),
      catchError(
        (error) => {
          console.warn(error);

          return of<AuthAction>({
            type: AUTH_ACTION.AUTH_FAIL,
            payload: error,
          });
        }
        // of<AuthAction>({
        //   type: AUTH_ACTION.AUTH_FAIL,
        //   payload: error,
        // })
      )
    );
  })
);

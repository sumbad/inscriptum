import { AUTH_ACTION, AuthAction } from 'hub/auth/auth.action';
import hub from 'hub';
import { Observable, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { auth } from 'services/Auth.service';

export const auth$: Observable<AuthAction> = hub.$.pipe(
  filter((action) => AUTH_ACTION.AUTH === action.type),
  switchMap((d: AuthAction) => {
    return auth((d.payload as any).redirectUri).pipe(
      map(
        (payload): AuthAction => ({
          type: AUTH_ACTION.AUTH_DONE,
          payload,
        })
      ),
      catchError((error) =>
        of<AuthAction>({
          type: AUTH_ACTION.AUTH_FAIL,
          payload: error,
        })
      )
    );
  })
);
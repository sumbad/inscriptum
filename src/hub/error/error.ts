import { AUTH_ACTION } from 'hub/auth/auth.action';
import hub from 'hub';
import { filter } from 'rxjs/operators';

const JWT_EXPIRED_ERROR_MESSAGE = 'Could not verify JWT: JWTExpired';

hub.$.pipe(filter((v) => 'error' in v.payload)).subscribe((action) => {
  const resErrors = action.payload['error']['response']['errors'];
  if (Array.isArray(resErrors)) {
    resErrors.some((e) => e['message'].startWith(JWT_EXPIRED_ERROR_MESSAGE));

    hub.dispatch({
      type: AUTH_ACTION.AUTH,
      payload: {
        redirectUri: `${document.location.origin}/drafts`,
      },
    });
  }
});

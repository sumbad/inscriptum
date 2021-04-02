import hub from 'hub';
import { HubAction } from 'hub/actions';
import { AUTH_ACTION } from 'hub/auth/auth.action';

const JWT_EXPIRED_ERROR_MESSAGE = 'Could not verify JWT: JWTExpired';

export function globalErrorHandle(action: HubAction) {
  if (
    'error' in action.payload &&
    Array.isArray(action.payload.error?.response?.errors) &&
    action.payload.error.response.errors.some((e) => e['message']?.startWith(JWT_EXPIRED_ERROR_MESSAGE))
  ) {
    hub.dispatch({
      type: AUTH_ACTION.AUTH,
      payload: {
        redirectUri: `${document.location.origin}/drafts`,
      },
    });
  }
}

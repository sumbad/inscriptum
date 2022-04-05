import hub from 'hub';
import { HubAction, HUB_ACTION } from 'hub/actions';
import { AUTH_ACTION } from 'hub/auth/auth.action';
import { NOTICE_ACTION } from 'hub/notice.action';

const JWT_EXPIRED_ERROR_MESSAGE = 'Could not verify JWT: JWTExpired';

export function globalErrorHandle(action: HubAction) {
  const payload = action.payload ?? {};
  // if (
  //   'error' in payload  &&
  //   Array.isArray(payload.error?.response?.errors) &&
  //   payload.error.response.errors.some((e) => e['message']?.startWith(JWT_EXPIRED_ERROR_MESSAGE))
  // ) {
  //   hub.dispatch({
  //     type: AUTH_ACTION.AUTH,
  //     payload: {
  //       redirectUri: `${document.location.origin}/drafts`,
  //     },
  //   });
  // }

  if (
    [
      HUB_ACTION.AUTH_FAIL,
      HUB_ACTION.LOAD_FAIL,
      HUB_ACTION.SAVE_FAIL,
      HUB_ACTION.SHOW_FAIL,
      HUB_ACTION.CREATE_FAIL,
      HUB_ACTION.LOGOUT_FAIL,
      HUB_ACTION.SING_IN_FAIL,
      HUB_ACTION.PAGE_SAVE_FAIL,
    ].includes(action.type)
    && 'error' in payload
  ) {
    hub.dispatch({
      type: NOTICE_ACTION.SHOW,
      payload: {
        type: 'bottom-right',
        status: 'error',
        message: String(payload.error)
      }
    })
  }
}

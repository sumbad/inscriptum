import hub from 'hub';
import { HubAction, HUB_ACTION } from 'hub/actions';
import { AUTH_ACTION } from 'hub/auth/auth.action';
import { authState } from 'hub/auth/auth.state';
import { NOTICE_ACTION } from 'hub/notice.action';
import { Observable, mergeMap, throwError, timer, finalize, first, tap } from 'rxjs';

const JWT_EXPIRED_ERROR_MESSAGE = 'Could not verify JWT: JWTExpired';

export const requestErrorRetryStrategy =
  ({
    maxRetryAttempts = 1,
    scalingDuration = 1000,
  }: {
    maxRetryAttempts?: number;
    scalingDuration?: number;
  } = {}) =>
  (attempts: Observable<any>) => {
    return attempts.pipe(
      mergeMap((error, i) => {
        const retryAttempt = i + 1;
        // if maximum number of retries have been met
        if (retryAttempt > maxRetryAttempts) {
          return throwError(() => error);
        }
        console.log(`Attempt ${retryAttempt}: retrying in ${retryAttempt * scalingDuration}ms`);

        // if the error is auth error
        if (error.message.startsWith(JWT_EXPIRED_ERROR_MESSAGE)) {
          hub.dispatch({
            type: AUTH_ACTION.AUTH,
            payload: {},
          });

          return authState.pipe(
            tap((d) => console.log(d)),
            first((state) => !state.isLoading)
          );
        }

        // retry after 1s, 2s, etc...
        return timer(retryAttempt * scalingDuration);
      }),
      finalize(() => console.log('We are done!'))
    );
  };


export function globalErrorHandle(action: HubAction) {
  const payload = action.payload ?? {};

  if (
    [
      HUB_ACTION.AUTH_FAIL,
      HUB_ACTION.LOAD_FAIL,
      HUB_ACTION.SAVE_FAIL,
      HUB_ACTION.CREATE_FAIL,
      HUB_ACTION.LOGOUT_FAIL,
      HUB_ACTION.SING_IN_FAIL,
      HUB_ACTION.PAGE_SAVE_FAIL,
    ].includes(action.type) &&
    'error' in payload
  ) {
    let message = String(payload.error);
    if (message.length > 200) {
      message = message.slice(0, 200) + '...';
    }

    console.error(payload.error);

    hub.dispatch({
      type: NOTICE_ACTION.SHOW,
      payload: {
        type: 'bottom-right',
        status: 'error',
        message,
      },
    });
  }
}

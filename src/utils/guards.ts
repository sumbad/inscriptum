import { AUTH_ACTION } from 'hub/actions/auth.action';
import hub from 'hub';
import { authState } from 'hub/state/auth.store';
import { first, take } from 'rxjs/operators';

export async function authorized<T>(work: () => T, redirectUri: string = `${document.location.origin}/drafts`): Promise<T> {
  return new Promise((resolve) => {
    authState.pipe(take(1)).subscribe((state) => {
      if (state.data?.idToken == null && !state.isLoading) {
        hub.dispatch({
          type: AUTH_ACTION.AUTH,
          payload: {
            redirectUri,
          },
        });
      }
    });

    authState.pipe(first((state) => state.data != null && !state.isLoading)).subscribe(() => {
      console.log('authorizedWork AUTH_ACTION.AUTH_DONE');
      resolve(work());
    });
  });
}

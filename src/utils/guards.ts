import { AUTH_ACTION } from 'hub/auth/auth.action';
import hub from 'hub';
import { authState } from 'hub/auth/auth.state';
import { first, take } from 'rxjs/operators';
import { Auth } from 'models/auth.model';

export async function authorized<T>(work: (auth: Auth) => T, redirectUri: string = `${document.location.origin}/drafts`): Promise<T> {
  return new Promise((resolve) => {
    authState.pipe(take(1)).subscribe((state) => {
      if (state.data?.accessToken == null && !state.isLoading) {
        hub.dispatch({
          type: AUTH_ACTION.AUTH,
          payload: {
            redirectUri,
          },
        });
      }
    });

    authState.pipe(first((state) => state.data != null && !state.isLoading)).subscribe((state) => {
      console.log('Make authorized work');
      resolve(work(state.data!));
    });
  });
}

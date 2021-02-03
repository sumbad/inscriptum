import { GraphQLClient } from 'graphql-request';
import type { Observable, Subscription } from 'rxjs';
import { getSdk } from 'api/generated';
import { dispatch, state, state$ } from 'state';
import { first, map, publishReplay, refCount, take } from 'rxjs/operators';
import { AuthState } from './Auth.service';

export abstract class AbstractModelService<G = unknown> {
  abstract state$: Observable<G>;

  /** options for request data from GraphQL server */
  protected _graphQLClientOptions: RequestInit = {
    credentials: 'include',
    mode: 'cors',
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  };

  /** url GraphQL api */
  protected _graphQLClientEndpoint = process.env.API_ENDPOINT || '';

  protected graphQLClient = new GraphQLClient(this._graphQLClientEndpoint, this._graphQLClientOptions);

  protected sdkApi = getSdk(this.graphQLClient);

  subs: Subscription[] = [];

  #auth$: Observable<AuthState>;

  constructor() {
    this.#auth$ = state$.pipe(
      first((s) => {
        return s.auth?.data != null;
      }),
      map(
        (state): AuthState => {
          if (state.auth?.data != null) {
            this._graphQLClientOptions = {
              ...this._graphQLClientOptions,
              headers: {
                ...this._graphQLClientOptions.headers,
                Authorization: `Bearer ${state.auth.data.idToken}`,
              },
            };

            this.graphQLClient = new GraphQLClient(this._graphQLClientEndpoint, this._graphQLClientOptions);
            this.sdkApi = getSdk(this.graphQLClient);
          }

          return state.auth ?? {};
        }
      ),
      publishReplay(1),
      refCount()
    );
  }

  authorizedWork(work: () => any, redirectUri: string) {
    if (state.auth?.data == null && !state.auth?.isLoading) {
      dispatch({
        type: 'auth',
        payload: {
          redirectUri,
        },
      });
    }

    this.#auth$.pipe(take(1)).subscribe((auth) => {
      if (auth?.data != null && auth?.error == null) {
        work();
      }
    });
  }

  destroy(): void {
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
  }
}

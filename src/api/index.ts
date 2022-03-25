import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { authState } from 'hub/auth/auth.state';
import { first } from 'rxjs/operators';
import { config } from 'settings';
import { getSdk } from './generated';

/** url GraphQL api */
const graphQLClientEndpoint = process.env.API_ENDPOINT || '';

/** options for request data from GraphQL server */
let graphQLClientOptions: RequestInit = {
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

let graphQLClient = new GraphQLClient(graphQLClientEndpoint, graphQLClientOptions);

authState.pipe(first((state) => state.data?.accessToken != null && !state.isLoading)).subscribe((state) => {
  console.log('API AUTH_ACTION.AUTH_DONE');

  if (config.isAuthDisabled) {
    graphQLClientOptions = {
      ...graphQLClientOptions,
      headers: {
        ...graphQLClientOptions.headers,
        'x-hasura-user-id': String(state.data?.userInfo.uid),
      },
    };
  } else {
    graphQLClientOptions = {
      ...graphQLClientOptions,
      headers: {
        ...graphQLClientOptions.headers,
        Authorization: `Bearer ${state.data?.accessToken}`,
      },
    };
  }

  graphQLClient = new GraphQLClient(graphQLClientEndpoint, graphQLClientOptions);
});

export const sdk = () => getSdk(graphQLClient);

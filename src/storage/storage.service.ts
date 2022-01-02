import { GraphQLClient } from 'graphql-request';
import { authorApi, Author } from './api/author';
import type { UserInfo } from 'auth';

/**
 * Singleton. Storage service with method to work with GraphQL data source
 */
export class StorageService {
  public author: Author;

  public api: {
    author: ReturnType<typeof authorApi>,
  };

  /** options for request data from GraphQL server */
  private _graphQLClientOptions: RequestInit = {
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

  private static instance: StorageService;

  /** url GraphQL api */
  private _graphQLClientEndpoint = process.env.API_ENDPOINT || '';

  constructor() {
    if (StorageService.instance) {
      return StorageService.instance;
    }

    this.prepareApi();

    StorageService.instance = this;
  }

  /**
   * Update the API object
   */
  prepareApi() {
    const graphQLClient = new GraphQLClient(this._graphQLClientEndpoint, this._graphQLClientOptions);
    this.api = {
      author: authorApi(graphQLClient),
    };
  }

  /**
   * @todo
   * Experimental method. Not working. Need to fix or remove
   */
  sendBeacon4UpdateDraft(id: string, contents: string) {
    const body = /* GraphQL */ `
      mutation {
        updateDraft(id: ${id}, contents: ${contents}){
          id
        }
      }
    `;

    const headers = {
      type: 'application/x-www-form-urlencoded',
      Authorization: (this._graphQLClientOptions.headers || {})['Authorization'],
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    };

    const url = Object.keys(JSON.stringify(body))
      .map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(body);
      })
      .join('&');

    let blob = new Blob([encodeURIComponent('query') + '=' + encodeURIComponent(body)], headers);
    navigator.sendBeacon(this._graphQLClientEndpoint, blob);
  }

  /**
   * Authenticate the user by token
   * @param accessToken
   */
  async authenticateAuthor(accessToken: string, userInfo: UserInfo) {
    this._addAuthInfoToGraphQLClient(accessToken);

    this.author = await this.api.author.findByAuth0({auth0_id: userInfo['https://hasura.io/jwt/claims']['x-hasura-user-id']});
  }

  /**
   * Add authentication token to GraphQL client
   * @param token - auth token
   */
  private _addAuthInfoToGraphQLClient(token: string) {
    this._graphQLClientOptions = {
      ...this._graphQLClientOptions,
      headers: {
        ...this._graphQLClientOptions.headers,
        Authorization: `Bearer ${token}`,
      },
    };

    this.prepareApi();
  }
}

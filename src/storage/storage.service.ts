import { GraphQLClient } from 'graphql-request';
import { Options } from 'graphql-request/dist/src/types';
import allDrafts from './queries/allDrafts';
import authenticateUser from './mutations/authenticateUser';
import updateDraft from './mutations/updateDraft';
import getDraft from './queries/getDraft';
import createDraft from './mutations/createDraft';
import deleteDraft from './mutations/deleteDraft';
import createNote from './mutations/createNote';
import updateNote from './mutations/updateNote';
import getNote from './queries/getNote';



/**
 * Singleton. Storage service with method to work with GraphQL data source
 */
export class StorageService {
  private static instance: StorageService;

  /** options for request data from GraphQL server */
  public _graphQLClientOptions: Options = {
    credentials: 'include',
    mode: 'cors',
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    }
  };

  /** url GraphQL api */
  private _graphQLClientEndpoind = 'https://api.graph.cool/simple/v1/cjd617qc7245901203dv54gy4';

  /** GraphQL client */
  private _graphQLClient: GraphQLClient;


  constructor() {
    if (StorageService.instance) {
      return StorageService.instance;
    }

    this._graphQLClient = new GraphQLClient(this._graphQLClientEndpoind, this._graphQLClientOptions);

    StorageService.instance = this;
  }


  /**
   * Get a draft by ID
   */
  getDraft(id: string): Promise<{ Draft: { contents: any, id: string } }> {
    return this._graphQLClient.request(getDraft, { id });
  };


  /**
   * Get all drafts
   */
  allDrafts(): Promise<{ allDrafts: { contents: any, id: string }[] }> {
    return this._graphQLClient.request(allDrafts);
  };


  /**
   * Update a draft by ID
   * @param id - draft id
   * @param contents - new content
   */
  updateDraft(id: string, contents: string): Promise<{ updateDraft: { id: string } }> {
    return this._graphQLClient.request(updateDraft, {
      id,
      contents
    });
  };


  /**
   * Delete a draft by ID
   * @param id - draft id
   */
  deleteDraft(id: string): Promise<{ deleteDraft: { id: string, contents: string } }> {
    return this._graphQLClient.request(deleteDraft, {
      id
    });
  };


  /**
   * Create new draft
   */
  createDraft(): Promise<{ createDraft: { id: string, contents: any } }> {
    return this._graphQLClient.request(createDraft);
  };


  /**
   * Get a note by ID
   */
  getNote(id: string): Promise<{ Note: { content: any } }> {
    return this._graphQLClient.request(getNote, { id });
  };


  /**
   * Create new note
   */
  createNote(author: string, name: string, title: string, content: object)
    : Promise<{ createNote: { id: string, createdAt: number, updatedAt: number } }> {
    return this._graphQLClient.request(createNote, {
      author,
      name,
      title,
      content
    });
  };


  /**
   * Create new note
   */
  updateNote(id: string, author: string, name: string, title: string, content: object)
    : Promise<{ updateNote: { id: string, createdAt: number, updatedAt: number } }> {
    return this._graphQLClient.request(
      updateNote,
      {
        id,
        author,
        name,
        title,
        content
      }
    );
  };


  /**
   * @todo
   * Experimental method. Not working. Need to fix or remove
   */
  sendBeacon4UpdateDraft(id: string, contents: string) {
    const body = /* GraphQL */`
      mutation {
        updateDraft(id: ${id}, contents: ${contents}){
          id
        }
      }
    `;


    const headers = {
      type: 'application/x-www-form-urlencoded',
      'Authorization': (this._graphQLClientOptions.headers || {})['Authorization'],
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    };


    const url = Object.keys(JSON.stringify(body)).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(body)
    }).join('&');

    let blob = new Blob([encodeURIComponent('query') + '=' + encodeURIComponent(body)], headers);
    navigator.sendBeacon(this._graphQLClientEndpoind, blob);
  };


  /**
   * Authenticate the user by token
   * @param accessToken
   */
  async authenticateUser(accessToken: string) {
    const authObj: { authenticateUser: any } = await this._graphQLClient.request(authenticateUser, { accessToken });

    this._addAuthInfoToGraphQLClient(authObj.authenticateUser.token)

    return authObj;
  };


  /**
   * Add authentication token to GraphQL client
   * @param token - auth token
   */
  private _addAuthInfoToGraphQLClient(token: string) {
    this._graphQLClientOptions = {
      ...this._graphQLClientOptions,
      headers: {
        ...this._graphQLClientOptions.headers,
        'Authorization': `Bearer ${token}`
      }
    };

    this._graphQLClient = new GraphQLClient(this._graphQLClientEndpoind, this._graphQLClientOptions);
  }
}

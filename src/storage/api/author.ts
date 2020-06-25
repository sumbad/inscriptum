import { GraphQLClient } from 'graphql-request';

export interface Author {
  id: string;
  email: string;
  name: string;
  last_seen: string;
  created_at: string;
}

export interface AuthorApi {
  Query: {
    AUTHOR_FIND_BY_AUTH0: {
      authors: Author[];
    };
  };
  Mutation: {};
}

export function authorApi(gqlClient: GraphQLClient) {
  const query = {
    findByAuth0: /* GraphQL */ `
      query AUTHOR_FIND_BY_AUTH0($auth0_id: String) {
        authors: author(where: { auth0_id: { _eq: $auth0_id } }) {
          id
          email
          name
          last_seen
          created_at
        }
      }
    `,
  };

  /**
   * Get an author by auth0 ID
   * @param variables 
   */
  async function findByAuth0(variables: { auth0_id: string }) {
    const { authors } = await gqlClient.request<AuthorApi['Query']['AUTHOR_FIND_BY_AUTH0']>(query.findByAuth0, variables);
    return authors[0];
  }

  return {
    findByAuth0,
  };
}

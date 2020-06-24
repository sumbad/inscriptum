import type { GraphQLClient } from 'graphql-request';
import type Delta from 'quill-delta';

export interface DraftApi {
  Query: {
    DRAFT_GET_ALL: {
      drafts: {
        id: string;
        content: Delta;
        created_at: string;
        updated_at: string;
        author: {
          id: string;
          email: string;
          name: string;
        };
      }[];
    };
    DRAFT_FIND_BY_ID: {
      draft: {
        id: string;
        content: Delta;
      };
    };
  };
  Mutation: {
    DRAFT_UPDATE_BY_ID: {
      update_draft_by_pk: {
        id: string;
      };
    };
    DRAFT_CREATE: {
      insert_draft_one: {
        id: string;
        content: Delta;
      };
    };
    DRAFT_DELETE: {
      delete_draft_by_pk: {
        id: string;
      };
    };
  };
}

/**
 * The module with Draft API
 */
export function draftApi(gqlClient: GraphQLClient) {
  const query = {
    getAll: /* GraphQL */ `
      query DRAFT_GET_ALL {
        drafts: draft(order_by: { updated_at: desc }) {
          id
          content
          created_at
          updated_at
          author {
            id
            email
            name
          }
        }
      }
    `,
    findById: /* GraphQL */ `
      query DRAFT_FIND_BY_ID($id: uuid!) {
        draft: draft_by_pk(id: $id) {
          content
          id
        }
      }
    `,
  };

  const mutation = {
    updateById: /* GraphQL */ `
      mutation DRAFT_UPDATE_BY_ID($id: uuid!, $content: jsonb, $updated_at: timestamptz) {
        update_draft_by_pk(pk_columns: { id: $id }, _set: { content: $content, updated_at: $updated_at }) {
          id
        }
      }
    `,
    create: /* GraphQL */ `
      mutation DRAFT_CREATE($author_id: uuid) {
        insert_draft_one(object: { author_id: $author_id, content: "" }) {
          id
          content
        }
      }
    `,
    deleteById: /* GraphQL */ `
      mutation DRAFT_DELETE($id: uuid!) {
        delete_draft_by_pk(id: $id) {
          id
        }
      }
    `,
  };

  /**
   * Get a draft by ID
   * @param variables
   */
  async function findById(variables: { id: string }) {
    const { draft } = await gqlClient.request<DraftApi['Query']['DRAFT_FIND_BY_ID']>(query.findById, variables);

    return draft;
  }

  /**
   * Get all drafts
   */
  async function getAll() {
    const { drafts } = await gqlClient.request<DraftApi['Query']['DRAFT_GET_ALL']>(query.getAll);
    return drafts;
  }

  /**
   * Update a draft by ID
   * @param variables
   */
  async function updateById(variables: { id: string; content: Delta, updated_at: string}) {
    const { update_draft_by_pk } = await gqlClient.request<DraftApi['Mutation']['DRAFT_UPDATE_BY_ID']>(mutation.updateById, variables);
    return update_draft_by_pk.id;
  }

  /**
   * Create a new draft
   * @param variables
   */
  async function create(variables: { author_id: string }) {
    const { insert_draft_one } = await gqlClient.request<DraftApi['Mutation']['DRAFT_CREATE']>(mutation.create, variables);

    return insert_draft_one;
  }

  /**
   * Delete a draft by ID
   * @param variables
   */
  async function deleteById(variables: { id: string }) {
    const { delete_draft_by_pk } = await gqlClient.request<DraftApi['Mutation']['DRAFT_DELETE']>(mutation.deleteById, variables);

    return delete_draft_by_pk;
  }

  return {
    findById,
    getAll,
    updateById,
    create,
    deleteById,
  };
}

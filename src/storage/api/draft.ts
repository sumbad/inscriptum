import { JSONContent } from '@tiptap/core';
import type { GraphQLClient } from 'graphql-request';
import type Delta from 'quill-delta';

/**
 * The module with Draft API
 */
export function draftApi(gqlClient: GraphQLClient) {
  /**
   * Get all drafts
   */
  async function getAll() {
    type DRAFT_GET_ALL = {
      drafts: {
        id: string;
        pages: {
          content: Delta | JSONContent;
        }[];
        created_at: string;
        updated_at: string;
        author: {
          id: string;
          email: string;
          name: string;
        };
        notes: {
          static_link?: string;
        }[];
      }[];
    };

    const query = /* GraphQL */ `
      query DRAFT_GET_ALL {
        drafts: draft(order_by: { updated_at: desc }, where: { ended_at: { _is_null: true } }) {
          id
          pages(order_by: { created_at: asc }, where: { ended_at: { _is_null: true } }) {
            content
          }
          created_at
          updated_at
          author {
            id
            email
            name
          }
          notes(order_by: { created_at: asc }, where: { ended_at: { _is_null: true } }) {
            static_link
          }
        }
      }
    `;

    const { drafts } = await gqlClient.request<DRAFT_GET_ALL>(query);
    return drafts;
  }

  /**
   * Get a draft by ID
   */
  async function findById(id: string) {
    type DRAFT_FIND_BY_ID = {
      draft: {
        id: string;
        created_at: string;
        updated_at: string;
        notes?: {
          id: string;
        }[];
        pages: {
          id: string;
          content: Delta;
        }[];
      };
    };

    const variables = {
      id,
    };

    const { draft } = await gqlClient.request<DRAFT_FIND_BY_ID>(
      /* GraphQL */ `
        query DRAFT_FIND_BY_ID($id: uuid!) {
          draft: draft_by_pk(id: $id) {
            id
            created_at
            updated_at
            notes(order_by: { created_at: asc }, where: { ended_at: { _is_null: true } }) {
              id
            }
            pages(order_by: { created_at: asc }, where: { ended_at: { _is_null: true } }) {
              id
              content
            }
          }
        }
      `,
      variables
    );

    if (Array.isArray(draft.notes) && draft.notes.length > 1) {
      throw new Error(`There are more then one active notes for ${draft.id} draft`);
    }

    return draft;
  }

  /**
   * Create a new draft
   * @param authorId - an author's ID
   */
  async function create(authorId: string, content?: Delta) {
    type DRAFT_CREATE = {
      insert_draft_one: {
        id: string;
        pages: {
          id: string;
          content: Delta;
        };
      };
    };

    const variables = {
      author_id: authorId,
      content,
    };

    const { insert_draft_one } = await gqlClient.request<DRAFT_CREATE>(
      /* GraphQL */ `
        mutation DRAFT_CREATE($author_id: uuid, $content: jsonb) {
          insert_draft_one(object: { author_id: $author_id, pages: { data: { content: $content } } }) {
            id
            pages {
              id
              content
            }
          }
        }
      `,
      variables
    );

    return insert_draft_one;
  }

  /**
   * Delete a draft by ID
   * @param variables
   */
  async function deleteById(variables: { id: string }) {
    type DRAFT_DELETE_LOGICALLY = {
      update_draft_by_pk: {
        id: string;
      };
    };
    const { update_draft_by_pk } = await gqlClient.request<DRAFT_DELETE_LOGICALLY>(
      /* GraphQL */ `
        mutation DRAFT_DELETE_LOGICALLY($id: uuid!, $ended_at: timestamptz) {
          update_draft_by_pk(pk_columns: { id: $id }, _set: { ended_at: $ended_at }) {
            id
          }
        }
      `,
      {
        ...variables,
        ended_at: new Date().toISOString(),
      }
    );

    return update_draft_by_pk;
  }

  return {
    findById,
    getAll,
    create,
    deleteById,
  };
}

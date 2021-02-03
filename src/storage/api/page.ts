import type { GraphQLClient } from 'graphql-request';
import type Delta from 'quill-delta';

/**
 * The module with Page API
 */
export function pageApi(gqlClient: GraphQLClient) {
  async function updateById(id: string, content: Delta) {
    type PAGE_UPDATE_BY_ID = {
      update_page_by_pk: {
        id: string;
      };
    };

    const variables = {
      id,
      content,
      updated_at: new Date().toISOString(),
    };

    const { update_page_by_pk } = await gqlClient.request<PAGE_UPDATE_BY_ID>(
      /* GraphQL */ `
        mutation PAGE_UPDATE_BY_ID($id: uuid!, $content: jsonb, $updated_at: timestamptz) {
          update_page_by_pk(pk_columns: { id: $id }, _set: { content: $content, updated_at: $updated_at }) {
            id
          }
        }
      `,
      variables
    );

    return update_page_by_pk.id;
  }

  return {
    updateById,
  };
}

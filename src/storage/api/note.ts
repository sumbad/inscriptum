import type { GraphQLClient } from 'graphql-request';
import type Delta from 'quill-delta';

export interface Note {
  id: string;
  name: string;
  preview: {
    title: string;
    description: string;
    image: string;
  };
  draft_id: string;
  static_link: string;
  updated_at: string;
  created_at: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
}

export function noteApi(gqlClient: GraphQLClient) {
  /**
   * Get all notes
   */
  async function getAll() {
    type NOTE_GET_ALL = { notes: Note[] };

    const { notes } = await gqlClient.request<NOTE_GET_ALL>(/* GraphQL */ `
      query NOTE_GET_ALL {
        notes: note(order_by: { created_at: desc }, where: { ended_at: { _is_null: true } }) {
          id
          name
          preview
          draft_id
          static_link
          updated_at
          created_at
          author {
            id
            name
            email
          }
        }
      }
    `);

    return notes;
  }

  /**
   * Get a note by ID
   */
  async function findById(id: string) {
    type NOTE_BY_ID = {
      note: {
        draft?: {
          id: string;
          pages: {
            id: string;
            content: Delta;
          }[];
        };
      };
    };

    const variables = {
      id,
    };

    const { note } = await gqlClient.request<NOTE_BY_ID>(
      /* GraphQL */ `
        query NOTE_BY_ID($id: uuid!) {
          note: note_by_pk(id: $id) {
            draft {
              id
              pages(order_by: { created_at: asc }, where: { ended_at: { _is_null: true } }) {
                id
                content
              }
            }
          }
        }
      `,
      variables
    );

    return note;
  }

  /**
   * Update a note by ID
   */
  async function updateById(id: string, name: string, preview: Note['preview'], static_link: string) {
    type NOTE_UPDATE_BY_ID = {
      update_note_by_pk: {
        id: string;
        updated_at: string;
        created_at: string;
      };
    };

    const variables = {
      id,
      name,
      preview,
      static_link,
      updated_at: new Date().toISOString(),
    };

    const { update_note_by_pk } = await gqlClient.request<NOTE_UPDATE_BY_ID>(
      /* GraphQL */ `
        mutation NOTE_UPDATE_BY_ID($id: uuid!, $name: String, $preview: jsonb, $static_link: String, $updated_at: timestamptz) {
          update_note_by_pk(
            pk_columns: { id: $id }
            _set: { name: $name, preview: $preview, static_link: $static_link, updated_at: $updated_at }
          ) {
            id
            updated_at
            created_at
          }
        }
      `,
      variables
    );
    return update_note_by_pk;
  }

  /**
   * Create a new note
   */
  async function create(author_id: string, name: string, draft_id: string, preview: Note['preview'], static_link: string) {
    type NOTE_CREATE = {
      insert_note_one: {
        id: string;
        created_at: string;
        updated_at: string;
      };
    };

    const variables = {
      author_id,
      name,
      draft_id,
      preview,
      static_link,
    };

    const { insert_note_one } = await gqlClient.request<NOTE_CREATE>(
      /* GraphQL */ `
        mutation NOTE_CREATE($author_id: uuid, $name: String, $draft_id: uuid, $preview: jsonb, $static_link: String) {
          insert_note_one(
            object: { author_id: $author_id, name: $name, draft_id: $draft_id, preview: $preview, static_link: $static_link }
          ) {
            id
            created_at
            updated_at
          }
        }
      `,
      variables
    );

    return insert_note_one;
  }

  return {
    getAll,
    findById,
    updateById,
    create,
  };
}

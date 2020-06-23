import type { GraphQLClient } from 'graphql-request';
import type Delta from 'quill-delta';

export interface Note {
  content: Delta;
  updated_at: string;
  title: string;
  name: string;
  id: string;
  created_at: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
}

export interface NoteApi {
  Query: {
    NOTE_BY_ID: {
      note: {
        content: Delta;
      };
    };
    NOTE_GET_ALL: {
      notes: Note[];
    };
  };
  Mutation: {
    NOTE_UPDATE_BY_ID: {
      update_note_by_pk: {
        id: string;
        created_at: string;
        updated_at: string;
      };
    };
    NOTE_CREATE: {
      insert_note_one: {
        id: string;
        created_at: string;
        updated_at: string;
      };
    };
  };
}

export function noteApi(gqlClient: GraphQLClient) {
  const query = {
    getAll: /* GraphQL */ `
      query NOTE_GET_ALL {
        notes: note(order_by: { created_at: desc }) {
          content
          updated_at
          title
          name
          id
          created_at
          author {
            id
            name
            email
          }
        }
      }
    `,
    findById: /* GraphQL */ `
      query NOTE_BY_ID($id: uuid!) {
        note: note_by_pk(id: $id) {
          content
        }
      }
    `,
  };

  const mutation = {
    updateById: /* GraphQL */ `
      mutation NOTE_UPDATE_BY_ID($id: uuid!, $content: jsonb, $name: String, $title: String, $updated_at: timestamptz) {
        update_note_by_pk(pk_columns: { id: $id }, _set: { content: $content, name: $name, title: $title, updated_at: $updated_at }) {
          id
          created_at
          updated_at
        }
      }
    `,
    create: /* GraphQL */ `
      mutation NOTE_CREATE($author_id: uuid, $content: jsonb, $name: String, $title: String) {
        insert_note_one(object: { author_id: $author_id, content: $content, name: $name, title: $title }) {
          id
          created_at
          updated_at
        }
      }
    `,
  };

  /**
   * Get all notes
   */
  async function getAll() {
    const { notes } = await gqlClient.request<NoteApi['Query']['NOTE_GET_ALL']>(query.getAll);

    return notes;
  }

  /**
   * Get a note by ID
   * @param variables
   */
  async function findById(variables: { id: string }) {
    const { note } = await gqlClient.request<NoteApi['Query']['NOTE_BY_ID']>(query.findById, variables);

    return note;
  }

  /**
   * Update a note by ID
   * @param variables
   */
  async function updateById(variables: { id: string; content: Delta; name: string; title: string, updated_at: string }) {
    const { update_note_by_pk } = await gqlClient.request<NoteApi['Mutation']['NOTE_UPDATE_BY_ID']>(mutation.updateById, variables);
    return update_note_by_pk;
  }

  /**
   * Create a new note
   * @param variables
   */
  async function create(variables: { author_id: string, content: string, name: string, title: string }) {
    const { insert_note_one } = await gqlClient.request<NoteApi['Mutation']['NOTE_CREATE']>(mutation.create, variables);

    return insert_note_one;
  }

  return {
    getAll,
    findById,
    updateById,
    create,
  };
}

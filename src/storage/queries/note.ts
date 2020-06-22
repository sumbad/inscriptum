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

export const allNotes = /* GraphQL */ `
  {
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
`;

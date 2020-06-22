import type Delta from 'quill-delta';

export interface Draft {
  id: string;
  content: Delta;
  created_at: string;
  updated_at: string;
  author: {
    id: string;
    email: string;
    name: string;
  };
}

export const allDrafts = /* GraphQL */ `
  query AllDrafts {
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
`;

export const draftById = /* GraphQL */ `
  query DraftById($id: uuid!) {
    draft: draft_by_pk(id: $id) {
      content
      id
    }
  }
`;

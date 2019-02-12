export default /* GraphQL */`
  mutation($id: ID!, $contents: Json!) {
    updateDraft(id: $id, contents: $contents){
      id
    }
  }
`;
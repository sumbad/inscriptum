export default /* GraphQL */`
  mutation($id: ID!) {
    deleteDraft(id: $id){
      id
      contents
    }
  }
`;
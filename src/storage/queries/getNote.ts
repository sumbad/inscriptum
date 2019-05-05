export default /* GraphQL */`
  query Note($id: ID!) {
      Note(id: $id) {
      content
    }
  }
`;
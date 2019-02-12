export default /* GraphQL */`
  query Draft($id: ID!) {
      Draft(id: $id) {
      contents
      id
    }
  }
`;
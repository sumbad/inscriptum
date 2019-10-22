export default /* GraphQL */`
  mutation ($author: String!) {
    createDraft (author: $author) {
      contents
      id
    }
  }
`;
export default /* GraphQL */`
  {
    allDrafts (orderBy: updatedAt_DESC) {
      contents
      id
    }
  }
`;
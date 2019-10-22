export default /* GraphQL */`
  {
    allNotes (orderBy: createdAt_DESC) {
      author
      content
      createdAt
      id
      name
      title
      updatedAt
    }
  }
`;
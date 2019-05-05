export default /* GraphQL */`
  mutation($id: ID!, $author: String!, $name: String!, $title: String!, $content: Json!) {
    updateNote(id: $id, author: $author, name: $name, title: $title, content: $content){
      id 
      createdAt
      updatedAt
    }
  }
`;
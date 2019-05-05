export default /* GraphQL */`
  mutation($author: String!, $name: String!, $title: String!, $content: Json!) {
    createNote(author: $author, name: $name, title: $title, content: $content){
      id 
      createdAt
      updatedAt
    }
  }
`;
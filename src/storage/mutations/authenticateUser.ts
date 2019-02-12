export default /* GraphQL */`
  mutation($accessToken: String) {
    authenticateUser(
      accessToken: $accessToken
    ) {
      id
      token
    }
  }
`;
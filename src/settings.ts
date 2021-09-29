export const config = Object.freeze({
  isDevMode: process.env.NODE_ENV === 'development',
  isAuthDisabled: process.env.HASURA_GRAPHQL_UNAUTHORIZED_ROLE === 'author',
  nodeListFileName: `list${process.env.NODE_ENV === 'development' ? '.dev' : ''}.json`,
} as const);

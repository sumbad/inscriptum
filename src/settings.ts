import { Buffer } from 'buffer';

export const config = Object.freeze({
  isDevMode: process.env.NODE_ENV === 'development',
  isAuthDisabled: process.env.HASURA_GRAPHQL_UNAUTHORIZED_ROLE === 'author',
  nodeListFileName: `list${process.env.NODE_ENV === 'development' ? '.dev' : ''}.json`,
  testUserUID: process.env.TEST_USER_UID,
  testUserEmail: process.env.TEST_USER_EMAIL,
  firebaseConfig: JSON.parse(Buffer.from(process.env.FIREBASE_CONFIG!, 'base64').toString()),
} as const);

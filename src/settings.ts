export const config = Object.freeze({
  isDevMode: process.env.NODE_ENV === 'development',
} as const);

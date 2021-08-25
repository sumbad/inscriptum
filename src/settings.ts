export const config = Object.freeze({
  isDevMode: process.env.NODE_ENV === 'development',
  nodeListFileName: `list${process.env.NODE_ENV === 'development' ? '.dev' : ''}.json`,
} as const);

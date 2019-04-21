import HyperHTML from 'hyperhtml/esm';

import polyfills from './polyfills';



polyfills.then(
  async p => {
    await import('./routes/root');
  }
).catch(e => {
  console.warn(e);
});
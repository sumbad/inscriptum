import polyfills from './polyfills';



polyfills.then(
  async p => {
    await import('./routes/$');
  }
).catch(e => {
  console.warn(e);
});
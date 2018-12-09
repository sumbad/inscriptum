declare module 'quill/core' {

  import Quill from 'quill';

  class QuillClass extends Quill {
    static sources: {
      USER: 'user',
      API: 'api',
      SILENT: 'silent'
    };
  }

  export default QuillClass;
}



declare module 'quill/blots/inline' {

  import Parchment from 'parchment';

  export default Parchment.Inline;
}

declare module 'quill-delta' {

  import Delta from 'quill/node_modules/quill-delta/dist/Delta';

  export default Delta;
}



declare module 'quill/blots/block' {

  import Parchment from 'parchment';

  class BlockEmbed extends Parchment.Embed {}

  export default Parchment.Block;
  export { BlockEmbed };
}

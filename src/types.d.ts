
declare module 'quill/core' {

  import Quill, { EventEmitter, TextChangeHandler, SelectionChangeHandler, EditorChangeHandler } from 'quill';
  import ScrollBlot from 'parchment/dist/src/blot/scroll';
  import { Blot } from 'parchment/dist/src/blot/abstract/blot';
  import { BlockEmbed } from 'quill/blots/block';
  import { Selection } from 'quill/core/selection';
  import { History } from 'quill/modules/history';

  type events = {
    EDITOR_CHANGE        : 'editor-change',
    SCROLL_BEFORE_UPDATE : 'scroll-before-update',
    SCROLL_OPTIMIZE      : 'scroll-optimize',
    SCROLL_UPDATE        : 'scroll-update',
    SELECTION_CHANGE     : 'selection-change',
    TEXT_CHANGE          : 'text-change'
  };
  type sources = {
    API    : 'api',
    SILENT : 'silent',
    USER   : 'user'
  };

  class ScrollBlotFix extends ScrollBlot {
    line: (index: number) => any;
    descendant(criteria: any, index: number): [Blot | null, number];
    descendants(criteria: any, index: number, length: number): Blot[];
    descendants(criteria: any): Blot[];
  }

  class QuillClass extends Quill {
    static sources: sources;
    static events: events;
    container: HTMLElement;
    scroll: ScrollBlotFix;
    selection: Selection;
    history: History

    isEnabled: () => boolean;
    on(eventName: "text-change", handler: TextChangeHandler): EventEmitter;
    on(eventName: "selection-change", handler: SelectionChangeHandler): EventEmitter;
    on(eventName: "editor-change", handler: EditorChangeHandler): EventEmitter;
    on(eventName: events[keyof events], handler: (...args)=>any): EventEmitter;
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

  class BlockEmbed extends Parchment.Embed { }

  export default Parchment.Block;
  export { BlockEmbed };
}

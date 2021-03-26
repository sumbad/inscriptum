import { Margin } from 'models/margin.model';
import Delta from 'quill-delta';

const p = 'PAGE_ACTION' as const;
///
const SAVE: unique symbol = Symbol(`[${p}] SAVE`);
const SAVING: unique symbol = Symbol(`[${p}] SAVING`);
const SAVE_DONE: unique symbol = Symbol(`[${p}] SAVE_DONE`);
const SAVE_FAIL: unique symbol = Symbol(`[${p}] SAVE_FAIL`);
///
const CREATE_MARGIN: unique symbol = Symbol(`[${p}] CREATE_MARGIN`);
const CREATE_MARGIN_DONE: unique symbol = Symbol(`[${p}] CREATE_MARGIN_DONE`);
const CREATE_MARGIN_FAIL: unique symbol = Symbol(`[${p}] CREATE_MARGIN_FAIL`);

export const PAGE_ACTION = {
  SAVE,
  SAVING,
  SAVE_DONE,
  SAVE_FAIL,
  CREATE_MARGIN,
  CREATE_MARGIN_DONE,
  CREATE_MARGIN_FAIL,
} as const;

export type PageAction =
  | {
      type: typeof PAGE_ACTION.SAVE;
      payload: {
        draftId: string;
        pageId: string;
        content: Delta;
      };
    }
  | {
      type: typeof PAGE_ACTION.SAVING;
      payload: {
        draftId: string;
        pageId: string;
      };
    }
  | {
      type: typeof PAGE_ACTION.SAVE_DONE;
      payload: {
        draftId: string;
        pageId: string;
        content: Delta;
      };
    }
  | {
      type: typeof PAGE_ACTION.SAVE_FAIL;
      payload: {
        error: any;
        pageId: string;
      };
    }
  | {
      type: typeof PAGE_ACTION.CREATE_MARGIN;
      payload: {
        pageId: string;
        img?: string;
        options?: Margin['options'];
      };
    }
  | {
      type: typeof PAGE_ACTION.CREATE_MARGIN_DONE;
      payload: {
        pageId: string;
        marginId: string;
      };
    }
  | {
      type: typeof PAGE_ACTION.CREATE_MARGIN_FAIL;
      payload: {
        pageId: string;
        error: any;
      };
    };

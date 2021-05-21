import { JSONContent } from '@tiptap/core';
import { Margin } from 'models/margin.model';
import Delta from 'quill-delta';

const p = 'PAGE_ACTION' as const;
const CREATE_MARGIN: unique symbol = Symbol(`[${p}] CREATE_MARGIN`);
const CREATE_MARGIN_DONE: unique symbol = Symbol(`[${p}] CREATE_MARGIN_DONE`);
const CREATE_MARGIN_FAIL: unique symbol = Symbol(`[${p}] CREATE_MARGIN_FAIL`);

export const PAGE_ACTION = {
  CREATE_MARGIN,
  CREATE_MARGIN_DONE,
  CREATE_MARGIN_FAIL,
} as const;

export type PageActionSave = {
  draftId: string;
  pageId: string;
  content: Delta | JSONContent;
};


export type PageAction =
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

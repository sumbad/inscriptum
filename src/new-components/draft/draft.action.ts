import { DraftModel } from 'models/draft.model';
import { Page } from 'models/page.model';

const p = 'DRAFT_ACTION' as const;

const LOAD: unique symbol = Symbol(`[${p}] LOAD`);
const LOADING: unique symbol = Symbol(`[${p}] LOADING`);
const LOAD_DONE: unique symbol = Symbol(`[${p}] LOAD_DONE`);

const UPDATE_TOC_DONE: unique symbol = Symbol(`[${p}] UPDATE_TOC_DONE`);
const UPDATE_TOC_ERROR: unique symbol = Symbol(`[${p}] UPDATE_TOC_ERROR`);


export const DRAFT_ACTION = {
  LOAD,
  LOADING,
  LOAD_DONE,
  UPDATE_TOC_DONE,
  UPDATE_TOC_ERROR,
} as const;

export type DraftAction =
  | {
      type: typeof DRAFT_ACTION.LOAD;
      payload: { 
        id: string 
      };
    }
  | {
      type: typeof DRAFT_ACTION.LOADING;
      payload: { 
        id: string 
      };
    }
  | {
      type: typeof DRAFT_ACTION.LOAD_DONE;
      payload: DraftModel;
    }
  | {
      type: typeof DRAFT_ACTION.UPDATE_TOC_DONE;
      payload: {
        id: string;
        toc: DraftModel['table_of_contents'];
      };
    }
  | {
      type: typeof DRAFT_ACTION.UPDATE_TOC_ERROR;
      payload: {
        id: string;
        error: any;
      };
    }

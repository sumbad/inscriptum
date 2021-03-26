import { DraftModel } from 'models/draft.model';
import { Page } from 'models/page.model';

const p = 'DRAFT_ACTION' as const;

const LOAD: unique symbol = Symbol(`[${p}] LOAD`);
const LOADING: unique symbol = Symbol(`[${p}] LOADING`);
const LOAD_DONE: unique symbol = Symbol(`[${p}] LOAD_DONE`);

const UPDATE_TOC_DONE: unique symbol = Symbol(`[${p}] UPDATE_TOC_DONE`);
const UPDATE_TOC_ERROR: unique symbol = Symbol(`[${p}] UPDATE_TOC_ERROR`);

const ADD_NEW: unique symbol = Symbol(`[${p}] ADD_NEW`);
// const ADDING_NEW: unique symbol = Symbol(`[${p}] ADDING_NEW`);
const ADD_NEW_DONE: unique symbol = Symbol(`[${p}] ADD_NEW_DONE`);
const ADD_NEW_FAIL: unique symbol = Symbol(`[${p}] ADD_NEW_FAIL`);

const DELETE_PAGE: unique symbol = Symbol(`[${p}] DELETE_PAGE`);
// const DELETING_PAGE: unique symbol = Symbol(`[${p}] DELETING_PAGE`);
const DELETE_PAGE_DONE: unique symbol = Symbol(`[${p}] DELETE_PAGE_DONE`);
const DELETE_PAGE_FAIL: unique symbol = Symbol(`[${p}] DELETE_PAGE_FAIL`);

export const DRAFT_ACTION = {
  LOAD,
  LOADING,
  LOAD_DONE,
  UPDATE_TOC_DONE,
  UPDATE_TOC_ERROR,
  ADD_NEW,
  // ADDING_NEW,
  ADD_NEW_DONE,
  ADD_NEW_FAIL,
  DELETE_PAGE,
  // DELETING_PAGE,
  DELETE_PAGE_DONE,
  DELETE_PAGE_FAIL,
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
  //#region  ADD_NEW
  | {
      type: typeof DRAFT_ACTION.ADD_NEW;
      payload: {
        id: string;
        order: number;
      };
    }
  | {
      type: typeof DRAFT_ACTION.ADD_NEW_DONE;
      payload: {
        id: string;
        newPage: Page;
        updatedPages: { id: string; order: number }[];
      };
    }
  | {
      type: typeof DRAFT_ACTION.ADD_NEW_FAIL;
      payload: {
        id: string;
        error: any;
      };
    }
  //#endregion ADD_NEW
  //#region DELETE PAGE
  | {
      type: typeof DRAFT_ACTION.DELETE_PAGE;
      payload: {
        id: string;
        pageId: string;
        order: number;
      };
    }
  | {
      type: typeof DRAFT_ACTION.DELETE_PAGE_DONE;
      payload: {
        id: string;
        deletedPage: { id: string; order: number };
        updatedPages: { id: string; order: number }[];
      };
    }
  | {
      type: typeof DRAFT_ACTION.DELETE_PAGE_FAIL;
      payload: {
        id: string;
        pageId: string;
        error: any;
      };
    };
//#endregion DELETE PAGE

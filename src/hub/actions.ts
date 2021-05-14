import { Page } from 'models/page.model';
import { DraftAction } from 'new-components/draft/draft.action';
import { MarginAction } from 'new-components/margin/margin.action';
import Delta from 'quill-delta';
import { AuthAction } from './auth/auth.action';

const namespace = 'HUB_ACTION' as const;
///
const PAGE_SAVE: unique symbol = Symbol(`[${namespace}] PAGE_SAVE`);
const PAGE_SAVING: unique symbol = Symbol(`[${namespace}] PAGE_SAVING`);
const PAGE_SAVE_DONE: unique symbol = Symbol(`[${namespace}] PAGE_SAVE_DONE`);
const PAGE_SAVE_FAIL: unique symbol = Symbol(`[${namespace}] PAGE_SAVE_FAIL`);
///
const DRAFT_ADD_PAGE_DONE: unique symbol = Symbol(`[${namespace}] DRAFT_ADD_PAGE_DONE`);
const DRAFT_DELETE_PAGE_DONE: unique symbol = Symbol(`[${namespace}] DRAFT_DELETE_PAGE_DONE`);

export const HUB_ACTION = {
  PAGE_SAVE,
  PAGE_SAVING,
  PAGE_SAVE_DONE,
  PAGE_SAVE_FAIL,
  DRAFT_ADD_PAGE_DONE,
  DRAFT_DELETE_PAGE_DONE,
} as const;

export type HubAction =
  | AuthAction
  | DraftAction
  | MarginAction
  | {
      type: typeof HUB_ACTION.PAGE_SAVE;
      payload: {
        draftId: string;
        pageId: string;
      };
    }
  | {
      type: typeof HUB_ACTION.PAGE_SAVING;
      payload: {
        draftId: string;
        pageId: string;
      };
    }
  | {
      type: typeof HUB_ACTION.PAGE_SAVE_DONE;
      payload: {
        draftId: string;
        pageId: string;
        content: Delta;
      };
    }
  | {
      type: typeof HUB_ACTION.PAGE_SAVE_FAIL;
      payload: {
        draftId: string;
        pageId: string;
        error: any;
      };
    }
  | {
      type: typeof HUB_ACTION.DRAFT_ADD_PAGE_DONE;
      payload: {
        draftId: string;
        newPage: Page;
        updatedPages: { id: string; order: number }[];
      };
    }
  | {
      type: typeof HUB_ACTION.DRAFT_DELETE_PAGE_DONE;
      payload: {
        draftId: string;
        deletedPage: { id: string; order: number };
        updatedPages: { id: string; order: number }[];
      };
    };

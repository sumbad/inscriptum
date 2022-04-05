import { JSONContent } from '@tiptap/core';
import { Page } from 'models/page.model';
import { DraftAction, DRAFT_ACTION } from 'new-components/draft/draft.action';
import { MarginAction, MARGIN_ACTION } from 'new-components/margin/margin.action';
import { AuthAction, AUTH_ACTION } from './auth/auth.action';
import { NoticeAction, NOTICE_ACTION } from './notice.action';

const namespace = 'HUB_ACTION' as const;
///
const PAGE_SAVE: unique symbol = Symbol(`[${namespace}] PAGE_SAVE`);
const PAGE_SAVING: unique symbol = Symbol(`[${namespace}] PAGE_SAVING`);
const PAGE_SAVE_DONE: unique symbol = Symbol(`[${namespace}] PAGE_SAVE_DONE`);
const PAGE_SAVE_FAIL: unique symbol = Symbol(`[${namespace}] PAGE_SAVE_FAIL`);
///
const DRAFT_ADD_PAGE_DONE: unique symbol = Symbol(`[${namespace}] DRAFT_ADD_PAGE_DONE`);
const DRAFT_DELETE_PAGE_DONE: unique symbol = Symbol(`[${namespace}] DRAFT_DELETE_PAGE_DONE`);
///
const DRAFT_PUBLISH: unique symbol = Symbol(`[${namespace}] DRAFT_PUBLISH`);
///
const FULLSCREEN_CHANGED: unique symbol = Symbol(`[${namespace}] FULLSCREEN_CHANGED`);



export const HUB_ACTION = {
  PAGE_SAVE,
  PAGE_SAVING,
  PAGE_SAVE_DONE,
  PAGE_SAVE_FAIL,
  DRAFT_ADD_PAGE_DONE,
  DRAFT_DELETE_PAGE_DONE,
  DRAFT_PUBLISH,
  FULLSCREEN_CHANGED,
  ...NOTICE_ACTION,
  ...AUTH_ACTION,
  ...DRAFT_ACTION,
  ...MARGIN_ACTION
} as const;

export type HubAction =
  | NoticeAction
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
        content: JSONContent;
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
    }
  | {
      type: typeof HUB_ACTION.DRAFT_PUBLISH;
      payload: {
        draftId: string;
      };
    }
  | {
      type: typeof HUB_ACTION.FULLSCREEN_CHANGED;
      payload: {
        isFullscreen: boolean;
        element: Element | null;
      };
    };

import { NoticeProps } from 'new-components/notice/notice.element';

const a = 'NOTICE_ACTION' as const;

const SHOW: unique symbol = Symbol(`[${a}] SHOW`);
const SHOW_DONE: unique symbol = Symbol(`[${a}] SHOW_DONE`);
const SHOW_FAIL: unique symbol = Symbol(`[${a}] SHOW_FAIL`);

export const NOTICE_ACTION = {
  SHOW,
  SHOW_DONE,
  SHOW_FAIL,
} as const;

export type NoticeAction =
  | {
      type: typeof NOTICE_ACTION.SHOW;
      payload: NoticeProps;
    }
  | {
      type: typeof NOTICE_ACTION.SHOW_DONE;
      payload: null;
    }
  | {
      type: typeof NOTICE_ACTION.SHOW_FAIL;
      payload: { error: any };
    };

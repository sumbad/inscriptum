import { NoticeProps } from 'components/notice/notice.element';

const a = 'NOTICE_ACTION' as const;

const SHOW: unique symbol = Symbol(`[${a}] SHOW`);
const HIDE: unique symbol = Symbol(`[${a}] HIDE`);

export const NOTICE_ACTION = {
  SHOW,
  HIDE,
} as const;

export type NoticeAction =
  | {
      type: typeof NOTICE_ACTION.SHOW;
      payload: NoticeProps;
    }
  | {
      type: typeof NOTICE_ACTION.HIDE;
      payload: null;
    };

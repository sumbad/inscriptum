import { Margin } from 'models/margin.model';

const namespace = 'MARGIN_ACTION' as const;
///
const LOAD_DONE: unique symbol = Symbol(`[${namespace}] LOAD_DONE`);
const LOAD_FAIL: unique symbol = Symbol(`[${namespace}] LOAD_FAIL`);
const SAVE_DONE: unique symbol = Symbol(`[${namespace}] SAVE_DONE`);
const SAVE_FAIL: unique symbol = Symbol(`[${namespace}] SAVE_FAIL`);

export const MARGIN_ACTION = {
  LOAD_DONE,
  LOAD_FAIL,
  SAVE_DONE,
  SAVE_FAIL,
} as const;

export type MarginAction =
  | {
      type: typeof MARGIN_ACTION.LOAD_DONE;
      payload: Margin;
    }
  | {
      type: typeof MARGIN_ACTION.LOAD_FAIL;
      payload: {
        id: string;
        error: any;
      };
    }
  | {
      type: typeof MARGIN_ACTION.SAVE_DONE;
      payload: {
        id: string;
      };
    }
  | {
      type: typeof MARGIN_ACTION.SAVE_FAIL;
      payload: {
        id: string;
        error: any;
      };
    };

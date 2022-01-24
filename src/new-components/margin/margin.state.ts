import { Margin } from 'models/margin.model';
import { MarginAction, MARGIN_ACTION } from './margin.action';

export interface MarginState {
  data: Margin | undefined;
  error?: any | null;
  isLoading: boolean;
}

export const initialState: MarginState = {
  data: undefined,
  isLoading: false,
};

export function reducer(state: MarginState, action: MarginAction): MarginState {
  switch (action.type) {
    case MARGIN_ACTION.LOAD_DONE:
      return {
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case MARGIN_ACTION.LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case MARGIN_ACTION.SAVE_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

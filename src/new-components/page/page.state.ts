import hub from 'hub';
import { Page } from 'models/page.model';
import { MarginAction, MARGIN_ACTION } from 'new-components/margin/margin.action';
import { filter } from 'rxjs';
import { filterByActionsGroup } from 'utils/operators';

export interface PageState {
  data: Page | undefined;
  error?: any | null;
  isLoading: boolean;
}

export const initialState: PageState = {
  data: undefined,
  isLoading: false,
};

export function page$(pageId: string) {
  return hub.$.pipe(
    filterByActionsGroup<MarginAction>(MARGIN_ACTION),
    filter((action) => action.type === MARGIN_ACTION.CREATE_DONE && action.payload.pageId === pageId)
  );
}

export function reducer(state: PageState, action: MarginAction) {
  switch (action.type) {
    case MARGIN_ACTION.CREATE_DONE:
      if (state.data != null) {
        state.data.margins = [
          {
            id: action.payload.id,
          },
          ...state.data.margins,
        ];
      }

      return state;
    default:
      return state;
  }
}

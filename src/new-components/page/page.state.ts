import { Page } from 'models/page.model';
import { merge, Observable, Subject } from 'rxjs';
import { PageAction, PAGE_ACTION } from './page.action';

export interface PageState {
  data: Page | undefined;
  error?: any | null;
  isLoading: boolean;
}

export const initialState: PageState = {
  data: undefined,
  isLoading: false,
};

export function page$(pageId: string): Observable<PageAction | Partial<PageState['data']>> {
  const $ = new Subject<PageAction>();
  return merge($);
}

export function reducer(state: PageState, action: PageAction) {
  switch (action.type) {
    case PAGE_ACTION.CREATE_MARGIN_DONE:
      return {
        ...state,
        data:
          state.data != null
            ? {
                ...state.data,
                margins: [
                  {
                    id: action.payload.marginId,
                  },
                  ...state.data.margins,
                ],
              }
            : undefined,
      };
    default:
      return state;
  }
}

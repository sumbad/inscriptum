import hub from 'hub';
import { Page } from 'models/page.model';
import { Observable } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { saveChanges } from 'services/page.service';
import { config } from 'settings';
import { filterByActions } from 'utils/operators';
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

export function page$(pageId: string): Observable<PageAction> {
  console.log('pageSubject');

  const pDispatcher$ = hub.$.pipe(
    filterByActions<PageAction>(PAGE_ACTION),
    filter((action) => action.payload.pageId === pageId)
  );

  pDispatcher$
    .pipe(
      filter((action) => action.type === PAGE_ACTION.SAVE),
      debounceTime(config.isDevMode ? 3000 : 10000)
    )
    .subscribe((a) => {
      // TODO: unsubscribe
      if (a.type === PAGE_ACTION.SAVE) {
        saveChanges(a.payload.pageId, a.payload.draftId, a.payload.content, hub.dispatch);
      }
    });

  return pDispatcher$;
}

export function reducer(state: PageState, action: PageAction) {
  switch (action.type) {
    case PAGE_ACTION.SAVE:
      state.error = null;
      return state;
    case PAGE_ACTION.SAVE_DONE:
      if (state.data) {
        state.data.content = action.payload.content;
      }
      return state;
    case PAGE_ACTION.SAVE_FAIL:
      state.error = action.payload.error;
      return state;
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

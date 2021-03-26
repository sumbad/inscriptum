import hub from 'hub';
import { DraftModel } from 'models/draft.model';
import { PageAction, PAGE_ACTION } from 'new-components/page/page.action';
import Delta from 'quill-delta';
import { merge, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { updateToc } from 'services/draft.service';
import { filterByActions } from 'utils/operators';
import { DraftAction, DRAFT_ACTION } from './draft.action';

export interface DraftState {
  data?: DraftModel | undefined;
  isLoading: boolean;
}

export const initialState: DraftState = {
  data: undefined,
  isLoading: false,
};

export function draft$(draftId: string): Observable<DraftAction | PageAction> {
  const dispatcherDraft$ = hub.$.pipe(
    filterByActions<DraftAction>(DRAFT_ACTION),
    filter((action) => action.payload.id === draftId)
  );
  const dispatcherPageSaveDone$ = hub.$.pipe(
    filter<PageAction>((action) => action.type === PAGE_ACTION.SAVE_DONE && action.payload.draftId === draftId)
  );

  return merge(dispatcherDraft$, dispatcherPageSaveDone$);
}

export function reducer(state: DraftState, action: DraftAction | PageAction) {
  switch (action.type) {
    case DRAFT_ACTION.LOAD:
      return { ...state, isLoading: true };

    case DRAFT_ACTION.LOADING:
      return { ...state, isLoading: true };

    case DRAFT_ACTION.LOAD_DONE:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case DRAFT_ACTION.ADD_NEW_DONE:
      if (state.data != null && action.payload.newPage != null) {
        const pages = state.data.pages ?? [];

        for (const page of pages) {
          const updatedPage = action.payload.updatedPages.find((p) => p.id === page.id);
          if (updatedPage != null) {
            page.order = updatedPage.order;
          }
        }

        action.payload.newPage.content = action.payload.newPage.content ?? ({} as Delta);

        pages.push(action.payload.newPage);

        const sourceToc = state.data.table_of_contents;
        const toc = [
          ...sourceToc.slice(0, action.payload.newPage.order),
          {
            header: '...',
            pageId: action.payload.newPage.id,
          },
          ...sourceToc.slice(action.payload.newPage.order),
        ];

        updateToc(toc, state.data.id);

        return {
          ...state,
          data: {
            ...state.data,
            pages: pages.sort((a, b) => a.order - b.order),
          },
        };
      }
      return state;

    case DRAFT_ACTION.DELETE_PAGE_DONE:
      if (state.data != null) {
        const pages = (state.data.pages ?? []).filter((ps) => ps.id !== action.payload.deletedPage.id);

        for (const page of pages) {
          const newOrder = action.payload.updatedPages.find((p) => p.id === page.id);
          if (newOrder != null) {
            page.order = newOrder.order;
          }
        }

        const sourceToc = state.data.table_of_contents;
        const toc = [...sourceToc.slice(0, action.payload.deletedPage.order), ...sourceToc.slice(action.payload.deletedPage.order + 1)];

        updateToc(toc, state.data.id);

        return {
          ...state,
          data: {
            ...state.data,
            pages: pages.sort((a, b) => a.order - b.order),
          },
        };
      }
      return state;

    case DRAFT_ACTION.UPDATE_TOC_DONE:
      return state.data != null
        ? {
            ...state,
            data: {
              ...state.data,
              table_of_contents: action.payload.toc,
            },
          }
        : state;

    case DRAFT_ACTION.UPDATE_TOC_ERROR:
      console.warn(action.payload.error);
      return state;

    case PAGE_ACTION.SAVE_DONE:
      if (state.data != null) {
        const order = state.data.pages?.find((p) => p.id === action.payload.pageId)?.order ?? -1;
        const toc = state.data.table_of_contents;
        const newHeader = action.payload.content.ops[0].insert ?? '...';

        if (order > -1 && toc[order].header !== String(newHeader)) {
          toc[order] = {
            header: String(newHeader),
            pageId: action.payload.pageId,
          };

          updateToc(toc, state.data.id);
        }
      }
      return state;

    default:
      return state;
  }
}
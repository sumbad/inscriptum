import { LoadingProgressBarHTMLElement } from 'loading-progress-bar';
import { Page } from 'models/page.model';
import { Observable} from 'rxjs';
import { distinct, filter, publishReplay, refCount, scan, startWith } from 'rxjs/operators';
import { dispatch, dispatcher$ } from '../state';
import { AbstractModelService } from './AbstractSubject.service';
import { PAGE_ACTION } from './PageSubject.service';


export type Draft = {
  id: string;
  created_at: string;
  updated_at: string;
  pages?: Page[];
  notes?: {
    id: string;
  }[];
};

export interface DraftState {
  data: Draft | undefined;
  isLoading: boolean;
}

const p = 'DRAFT_ACTION' as const;

const LOAD: unique symbol = Symbol(`[${p}] LOAD`);
const LOADING: unique symbol = Symbol(`[${p}] LOADING`);
const LOAD_DONE: unique symbol = Symbol(`[${p}] LOAD_DONE`);

export const DRAFT_ACTION = {
  LOAD,
  LOADING,
  LOAD_DONE,
} as const;

export type DraftAction =
  | {
      type: typeof DRAFT_ACTION.LOAD;
      payload: { id: string };
    }
  | {
      type: typeof DRAFT_ACTION.LOADING;
      payload: { id: string };
    }
  | {
      type: typeof DRAFT_ACTION.LOAD_DONE;
      payload: Draft;
    };

const defaultState: DraftState = {
  data: undefined,
  isLoading: false,
};

export class DraftSubjectService extends AbstractModelService {
  state$: Observable<DraftState>;
  state: DraftState;

  constructor() {
    super();

    this.state$ = dispatcher$.pipe(
      startWith(defaultState), //
      scan(this.stateReducer),
      distinct(),
      publishReplay(1),
      refCount()
    );

    this.subs.push(
      this.state$.subscribe((s) => {
        this.state = s;
      })
    );
  }

  stateReducer(state: DraftState, action: DraftAction): DraftState {
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
      default:
        return state;
    }
  }

  getById(draftId: string) {
    dispatch({
      type: DRAFT_ACTION.LOADING,
      payload: {
        id: draftId,
      },
    });

    this.authorizedWork(async () => {
      const { draft } = await this.sdkApi.getDraftById({ id: draftId });

      if (draft != null) {
        dispatch({
          type: DRAFT_ACTION.LOAD_DONE,
          payload: {
            id: draft.id,
            created_at: draft.created_at,
            updated_at: draft.updated_at,
            notes: draft.notes,
            pages: draft.pages
              .sort((a, b) => a.order - b.order)
              .map((p, idx) => ({
                ...p,
                content: p.content ?? {},
                draftId,
                isFolded: idx !== 0,
              })),
          },
        });
      }
    }, `${document.location.origin}/drafts`);
  }

  foldPage(pageId: string, flag: boolean) {
    dispatch({
      type: PAGE_ACTION.FOLD,
      payload: {
        pageId,
        flag,
      },
    });
  }

  savingProcess(loadingRef: { current: LoadingProgressBarHTMLElement }) {
    const originDocumentTitle = document.title;
    const unsavedDocumentTitle = `*${originDocumentTitle}`;

    const togglePause = loadingRef.current.togglePause;
    const generateProgress = loadingRef.current.generateProgress;

    if (togglePause != null && generateProgress != null) {
      let savingTime = 2000;
      let isProgressing = false;

      this.subs.push(
        // new unsaved changes
        dispatcher$.pipe(filter((a) => a.type === PAGE_ACTION.SAVE)).subscribe(() => {
          if (document.title !== unsavedDocumentTitle) {
            document.title = unsavedDocumentTitle;
          }
        })
      );

      this.subs.push(
        // is saving
        dispatcher$.pipe(filter((a) => a.type === PAGE_ACTION.SAVING)).subscribe(() => {
          // finish a previous process
          if (isProgressing) {
            generateProgress.next();
          }

          savingTime = 2000;
          isProgressing = true;

          const generateResult = generateProgress.next();

          if (generateResult !== undefined && generateResult.value === 1) {
            setTimeout(() => {
              if (isProgressing) {
                togglePause(true);
                savingTime -= 300;
              }
            }, 300);
            setTimeout(() => {
              if (isProgressing) {
                togglePause(false);
              }
            }, 1000);
            setTimeout(() => {
              if (isProgressing) {
                togglePause(true);
                savingTime -= 1000;
              }
            }, 2000);
            setTimeout(() => {
              if (isProgressing) {
                savingTime -= 1000;
              }
            }, 3000);
          }
        })
      );

      this.subs.push(
        // saved
        dispatcher$.pipe(filter((a) => a.type === PAGE_ACTION.SAVE_DONE)).subscribe(() => {
          isProgressing = false;
          togglePause(false);

          setTimeout(
            () => {
              generateProgress.next();
            },
            savingTime > 0 ? savingTime : 0
          );

          document.title = originDocumentTitle;
        })
      );
    }
  }

  addNewPage(order: number) {
    this.authorizedWork(async () => {
      if (this.state.data != null) {
        const { insert_page_one: newPage, update_page } = await this.sdkApi.addPageToDraft({
          draft_id: this.state.data.id,
          order,
          created_at: new Date().toISOString(),
        });

        const updatedPages = new Map((update_page?.returning ?? []).map((it) => [it.id, it.order]));

        if (newPage != null) {
          const pages = this.state.data.pages ?? [];

          for (const page of pages) {
            const newOrder = updatedPages.get(page.id);
            if (newOrder != null) {
              page.order = newOrder;
            }
          }

          newPage.content = newPage.content ?? {};

          pages.push({
            draftId: this.state.data.id,
            ...newPage,
          });

          dispatch({
            type: DRAFT_ACTION.LOAD_DONE,
            payload: {
              ...this.state.data,
              pages: pages.sort((a, b) => a.order - b.order),
            },
          });
        }
      }
    }, `${document.location.origin}/drafts`);
  }

  deletePage(pageId: string, pageOrder: number) {
    this.authorizedWork(async () => {
      if (this.state.data != null) {
        const { update_page_by_pk: deletedPage, update_page } = await this.sdkApi.deletePage({
          id: pageId,
          ended_at: new Date().toISOString(),
          draft_id: this.state.data?.id,
          order: pageOrder,
        });

        if (deletedPage != null && update_page?.returning != null) {
          const updatedPages = new Map((update_page.returning ?? []).map((it) => [it.id, it.order]));

          const pages = (this.state.data.pages ?? []).filter((ps) => ps.id !== deletedPage.id);

          for (const page of pages) {
            const newOrder = updatedPages.get(page.id);
            if (newOrder != null) {
              page.order = newOrder;
            }
          }

          dispatch({
            type: DRAFT_ACTION.LOAD_DONE,
            payload: {
              ...this.state.data,
              pages: pages.sort((a, b) => a.order - b.order),
            },
          });
        }
      }
    }, `${document.location.origin}/drafts`);
  }
}

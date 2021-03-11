import { config } from 'settings';
import { Page } from 'models/page.model';
import Delta from 'quill-delta';
import { concat, Observable, of } from 'rxjs';
import { catchError, debounceTime, distinct, filter, map, publishReplay, refCount, scan, startWith } from 'rxjs/operators';
import { dispatch, dispatcher$ } from 'state';
import { AbstractModelService } from './AbstractSubject.service';
import { DRAFT_ACTION } from './DraftSubject.service';

interface PageState {
  data: Page | undefined;
  error?: any | null;
  isLoading: boolean;
}

const defaultState: PageState = {
  data: undefined,
  isLoading: false,
};

const p = 'PAGE_ACTION' as const;

const SAVE: unique symbol = Symbol(`[${p}] SAVE`);
const SAVING: unique symbol = Symbol(`[${p}] SAVING`);
const SAVE_DONE: unique symbol = Symbol(`[${p}] SAVE_DONE`);
const SAVE_FAIL: unique symbol = Symbol(`[${p}] SAVE_FAIL`);

const FOLD: unique symbol = Symbol(`[${p}] FOLD`);

export const PAGE_ACTION = {
  SAVE,
  SAVING,
  SAVE_DONE,
  SAVE_FAIL,
  FOLD,
} as const;

export type PageAction =
  | {
      type: typeof PAGE_ACTION.SAVE;
      payload: {
        draftId: string;
        pageId: string;
      };
    }
  | {
      type: typeof PAGE_ACTION.SAVING;
      payload: {
        draftId: string;
        pageId: string;
      };
    }
  | {
      type: typeof PAGE_ACTION.SAVE_DONE;
      payload: {
        draftId: string;
        pageId: string;
        content: Delta;
      };
    }
  | {
      type: typeof PAGE_ACTION.SAVE_FAIL;
      payload: {
        error: any;
        pageId: string;
      };
    }
  | {
      type: typeof PAGE_ACTION.FOLD;
      payload: {
        pageId: string;
        flag: boolean;
      };
    };

export class PageSubjectService extends AbstractModelService {
  state$: Observable<PageState>;
  state: PageState;

  private unsavedContent: Delta | null = null;

  constructor(initState: PageState = defaultState) {
    super();

    this.state$ = dispatcher$.pipe(
      filter((action: PageAction) => action.payload.pageId === this.state.data?.id),
      startWith(initState),
      scan<PageState>(this.stateReducer.bind(this)),
      distinct(),
      publishReplay(1),
      refCount()
    );

    this.subs.push(
      this.state$.subscribe((s) => {
        this.state = s;
      })
    );

    this.subs.push(
      dispatcher$
        .pipe(
          filter((action) => action.type === PAGE_ACTION.SAVE && action.payload.pageId === this.state.data?.id),
          debounceTime(config.isDevMode ? 3000 : 10000)
        )
        .subscribe(() => {
          concat(
            of({
              type: PAGE_ACTION.SAVING,
              payload: {
                draftId: this.state.data?.draftId,
                pageId: this.state.data?.id,
              },
            }),
            this.saveChanges().pipe(
              map((d) => ({
                type: PAGE_ACTION.SAVE_DONE,
                payload: {
                  pageId: d.id,
                  draftId: d.draftId,
                  content: d.content,
                },
              })),
              catchError((error) =>
                of({
                  type: PAGE_ACTION.SAVE_FAIL,
                  payload: error,
                })
              )
            )
          ).subscribe((a: PageAction) => dispatch(a));
        })
    );
  }

  stateReducer(state: PageState, action: PageAction): PageState {
    switch (action.type) {
      case PAGE_ACTION.SAVE:
        return {
          ...state,
          error: null,
        };
      case PAGE_ACTION.SAVE_DONE:
        if (state.data) {
          state.data.content = action.payload.content;
        }
        return state;
      case PAGE_ACTION.SAVE_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      case PAGE_ACTION.FOLD:
        return {
          ...state,
          data:
            state.data != null
              ? {
                  ...state.data,
                  isFolded: action.payload.flag,
                }
              : undefined,
        };
      default:
        return state;
    }
  }

  /**
   * Accumulate changes
   *
   * @param newContent
   */
  changeContent(newContent: Delta) {
    if (this.state.data != null) {
      this.unsavedContent = newContent;

      dispatch({
        type: PAGE_ACTION.SAVE,
        payload: {
          pageId: this.state.data.id,
          draftId: this.state.data.draftId,
        },
      });
    }
  }

  saveChanges(): Observable<Page> {
    return new Observable<Page>((subscribe) => {
      this.authorizedWork(async () => {
        try {
          if (this.unsavedContent != null && this.state.data != null) {
            const { update_page_by_pk: uPage } = await this.sdkApi.updatePageById({
              id: this.state.data.id,
              content: this.unsavedContent,
              updated_at: new Date().toISOString(),
            });

            if (uPage != null) {
              subscribe.next({
                ...this.state.data,
                content: this.unsavedContent,
              });
            }

            this.unsavedContent = null;
          } else {
            subscribe.next(this.state.data);
          }
        } catch (error) {
          subscribe.error(error);
        }
      }, `${document.location.origin}/drafts`);
    });
  }

  addNewPage(order: number) {
    if (this.state.data?.draftId != null) {
      dispatch({ type: DRAFT_ACTION.ADD_NEW, payload: { draftId: this.state.data.draftId, order } });
    }
  }

  deletePage() {
    if (this.state.data != null) {
      dispatch({ type: DRAFT_ACTION.DELETE_PAGE, payload: { pageId: this.state.data.id, order: this.state.data.order } });
    }
  }

  foldPage(pageId: string, flag: boolean): void {
    dispatch({
      type: PAGE_ACTION.FOLD,
      payload: {
        pageId,
        flag,
      },
    });
  }
}

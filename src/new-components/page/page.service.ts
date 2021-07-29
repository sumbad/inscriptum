import { JSONContent } from '@tiptap/core';
import { sdk } from 'api';
import hub from 'hub';
import { HUB_ACTION } from 'hub/actions';
import { PageAction, PageActionSave, PAGE_ACTION } from 'new-components/page/page.action';
import Delta from 'quill-delta';
import { Subject, from, defer, of, throwError, EMPTY } from 'rxjs';
import { debounceTime, tap, switchMap, catchError } from 'rxjs/operators';
import { config } from 'settings';
import { authorized } from 'utils/guards';

export async function createMargin(pageId: string, dispatch: (action: PageAction) => void) {
  return await authorized(async () => {
    const { insert_margin_one } = await sdk().createMargin({
      page_id: pageId,
      created_at: new Date().toISOString(),
    });
    
    if (insert_margin_one?.id != null) {
      dispatch({
        type: PAGE_ACTION.CREATE_MARGIN_DONE,
        payload: {
          pageId,
          marginId: insert_margin_one.id,
        },
      });

      return insert_margin_one;
    } else {
      dispatch({
        type: PAGE_ACTION.CREATE_MARGIN_FAIL,
        payload: {
          pageId,
          error: {
            massage: `Can not create a new Margin for Page ${pageId}!`,
          },
        },
      });
      // throw new Error(`Can not create a new Margin for Page ${pageId}!`);
    }
  });
}

async function saveChanges(pageId: string, draftId: string, content: Delta | JSONContent) {
  return await authorized(async () => {
    try {
      await sdk().updatePageById({
        id: pageId,
        content,
        updated_at: new Date().toISOString(),
      });

      return { pageId, draftId, content };
    } catch (error) {
      throw {
        pageId,
        error,
      };
    }
  });
}

export function savePageEffect(subject: Subject<PageActionSave>) {
  return subject.pipe(
    tap((a) => {
      hub.dispatch({
        type: HUB_ACTION.PAGE_SAVE,
        payload: {
          pageId: a.pageId,
          draftId: a.draftId,
        },
      });
    }),
    debounceTime(config.isDevMode ? 3000 : 10000),
    tap((a) => {
      hub.dispatch({
        type: HUB_ACTION.PAGE_SAVING,
        payload: {
          pageId: a.pageId,
          draftId: a.draftId,
        },
      });
    }),
    switchMap((action) =>
      from(saveChanges(action.pageId, action.draftId, action.content)).pipe(
        tap((payload) => {
          hub.dispatch({
            type: HUB_ACTION.PAGE_SAVE_DONE,
            payload,
          });
        }),
        catchError((error) => {
          hub.dispatch({
            type: HUB_ACTION.PAGE_SAVE_FAIL,
            payload: {
              draftId: action.draftId,
              pageId: action.pageId,
              error,
            },
          });

          return EMPTY;
        })
      )
    )
  );
}

export function addNewPageEffect(subject: Subject<{ draftId: string; order: number }>) {
  return subject.pipe(
    switchMap((action) =>
      defer(async () =>
        authorized(async () => {
          const { insert_page_one: newPage, update_page } = await sdk().addPageToDraft({
            draft_id: action.draftId,
            order: action.order,
            created_at: new Date().toISOString(),
          });

          if (newPage == null) {
            throw new Error('newPage == null');
          }

          const updatedPages = update_page?.returning ?? [];

          return { draftId: action.draftId, newPage, updatedPages };
        })
      )
    ),
    tap((r) => {
      const { draftId, updatedPages, newPage } = r;
      hub.dispatch({
        type: HUB_ACTION.DRAFT_ADD_PAGE_DONE,
        payload: {
          draftId: draftId,
          newPage: {
            ...newPage,
            content: newPage?.content,
            draftId,
          },
          updatedPages,
        },
      });
    })
  );
  //     } else {
  //       dispatch({
  //         type: DRAFT_ACTION.ADD_NEW_FAIL,
  //         payload: {
  //           id: draftId,
  //           error: {
  //             massage: `Can not create a new Page for Draft ${draftId}!`,
  //           },
  //         },
  //       });
  //     }
}

export function deletePageEffect(subject: Subject<{ draftId: string; pageId: string; order: number }>) {
  return subject.pipe(
    switchMap((action) =>
      defer(async () =>
        authorized(async () => {
          const { update_page_by_pk, update_page } = await sdk().deletePage({
            id: action.pageId,
            ended_at: new Date().toISOString(),
            draft_id: action.draftId,
            order: action.order,
          });
  
          const updatedPages = update_page?.returning ?? [];
  
          const deletedPage = {
            id: update_page_by_pk?.id,
            order: action.order,
          };
  
          return { draftId: action.draftId, deletedPage, updatedPages };
        })
      )
    ),
    tap((r) => {
      hub.dispatch({
        type: HUB_ACTION.DRAFT_DELETE_PAGE_DONE,
        payload: {
          draftId: r.draftId,
          deletedPage: r.deletedPage,
          updatedPages: r.updatedPages,
        },
      });
    })
  );
// } catch (error) {
//   dispatch({
//     type: DRAFT_ACTION.DELETE_PAGE_FAIL,
//     payload: {
//       id: draftId,
//       pageId,
//       error,
//     },
//   });
// }
}


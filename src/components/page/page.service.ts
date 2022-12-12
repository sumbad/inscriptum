import { JSONContent } from '@tiptap/core';
import { sdk } from 'api';
import hub from 'hub';
import { HUB_ACTION } from 'hub/actions';
import { PageActionSave } from 'components/page/page.action';
import { Subject, defer, EMPTY } from 'rxjs';
import { debounceTime, tap, switchMap, catchError, retryWhen } from 'rxjs/operators';
import { config } from 'settings';
import { requestErrorRetryStrategy } from 'utils/error.util';
import { authorized } from 'utils/guards';

async function saveChanges(pageId: string, draftId: string, content: JSONContent) {
  return await authorized(async () => {
    await sdk().updatePageById({
      id: pageId,
      content,
      updated_at: new Date().toISOString(),
    });

    return { pageId, draftId, content };
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
      defer(() => saveChanges(action.pageId, action.draftId, action.content)).pipe(
        tap((payload) => {
          hub.dispatch({
            type: HUB_ACTION.PAGE_SAVE_DONE,
            payload,
          });
        }),
        retryWhen(requestErrorRetryStrategy()),
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

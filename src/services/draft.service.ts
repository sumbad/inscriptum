import { sdk } from 'api';
import hub from 'hub';
import { DraftTocModel } from 'models/draft.model';
import { DraftAction, DRAFT_ACTION } from 'new-components/draft/draft.action';
import { authorized } from 'utils/guards';

export async function getById(draftId: string) {
  hub.dispatch({
    type: DRAFT_ACTION.LOADING,
    payload: {
      id: draftId,
    },
  });

  return authorized(async () => {
    const { draft } = await sdk().getDraftById({ id: draftId });

    if (draft != null) {
      hub.dispatch({
        type: DRAFT_ACTION.LOAD_DONE,
        payload: {
          id: draft.id,
          created_at: draft.created_at,
          updated_at: draft.updated_at,
          table_of_contents: draft.table_of_contents,
          notes: draft.notes,
          pages: draft.pages
            .sort((a, b) => a.order - b.order)
            .map((p, idx) => ({
              ...p,
              content: p.content ?? {},
              draftId,
              isFolded: idx !== 0,
              margins: p.margins ?? [],
            })),
        },
      });
    }
  });
}

export async function addNewPage(draftId: string, order: number, dispatch: (action: DraftAction) => void) {
  return authorized(async () => {
    const { insert_page_one: newPage, update_page } = await sdk().addPageToDraft({
      draft_id: draftId,
      order,
      created_at: new Date().toISOString(),
    });

    if (newPage != null) {
      const updatedPages = update_page?.returning ?? [];

      dispatch({
        type: DRAFT_ACTION.ADD_NEW_DONE,
        payload: {
          id: draftId,
          newPage: {
            ...newPage,
            content: newPage.content ?? {},
            draftId,
          },
          updatedPages,
        },
      });

      return { newPage, updatedPages };
    } else {
      dispatch({
        type: DRAFT_ACTION.ADD_NEW_FAIL,
        payload: {
          id: draftId,
          error: {
            massage: `Can not create a new Page for Draft ${draftId}!`,
          },
        },
      });
    }
  });
}

export async function deletePage(draftId: string, pageId: string, pageOrder: number, dispatch: (action: DraftAction) => void) {
  try {
    return await authorized(async () => {
      const { update_page_by_pk, update_page } = await sdk().deletePage({
        id: pageId,
        ended_at: new Date().toISOString(),
        draft_id: draftId,
        order: pageOrder,
      });

      const updatedPages = update_page?.returning ?? [];

      const deletedPage = {
        id: update_page_by_pk?.id,
        order: pageOrder,
      };

      dispatch({
        type: DRAFT_ACTION.DELETE_PAGE_DONE,
        payload: {
          id: draftId,
          deletedPage,
          updatedPages,
        },
      });

      return { deletedPage, updatedPages };
    });
  } catch (error) {
    dispatch({
      type: DRAFT_ACTION.DELETE_PAGE_FAIL,
      payload: {
        id: draftId,
        pageId,
        error,
      },
    });
  }
}

export async function updateToc(toc: DraftTocModel[], draftId: string) {
  return authorized(async () => {
    try {
      const { update_draft_by_pk: updatedDraftToc } = await sdk().updateDraftTOC({
        id: draftId,
        table_of_contents: toc,
        updated_at: new Date().toISOString(),
      });

      if (updatedDraftToc != null) {
        hub.dispatch({
          type: DRAFT_ACTION.UPDATE_TOC_DONE,
          payload: {
            id: draftId,
            toc: updatedDraftToc.table_of_contents,
          },
        });
      }
    } catch (error) {
      hub.dispatch({
        type: DRAFT_ACTION.UPDATE_TOC_ERROR,
        payload: {
          id: draftId,
          error,
        },
      });
    }
  });
}

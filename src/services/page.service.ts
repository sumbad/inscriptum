import { sdk } from 'api';
import { PageAction, PAGE_ACTION } from 'new-components/page/page.action';
import Delta from 'quill-delta';
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

export async function saveChanges(pageId: string, draftId: string, content: Delta, dispatch: (action: PageAction) => void) {
  dispatch({
    type: PAGE_ACTION.SAVING,
    payload: {
      pageId,
      draftId
    },
  });

  return await authorized(async () => {
    try {
      const { update_page_by_pk: uPage } = await sdk().updatePageById({
        id: pageId,
        content,
        updated_at: new Date().toISOString(),
      });

      if (uPage != null) {
        dispatch({
          type: PAGE_ACTION.SAVE_DONE,
          payload: {
            pageId,
            draftId,
            content,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: PAGE_ACTION.SAVE_FAIL,
        payload: {
          pageId,
          error,
        },
      });
    }
  });
}

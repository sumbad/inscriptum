import { sdk } from 'api';
import hub from 'hub';
import { NOTICE_ACTION } from 'hub/notice.action';
import { Margin, MarginOptions } from 'models/margin.model';
import { MARGIN_ACTION } from 'components/margin/margin.action';
import { authorized } from 'utils/guards';

export async function getMarginById(id: string): Promise<Margin> {
  return await authorized(async () => {
    const { margin } = await sdk().getMarginById({ id });

    if (margin != null) {
      hub.dispatch({
        type: MARGIN_ACTION.LOAD_DONE,
        payload: margin,
      });

      return margin;
    } else {
      hub.dispatch({
        type: MARGIN_ACTION.LOAD_FAIL,
        payload: {
          id,
          error: {
            message: `The Margin ${id} not found!`,
          },
        },
      });

      throw new Error(`The Margin ${id} not found!`);
    }
  });
}

export async function saveMarginById(id: string, dataUri: string, options: Omit<MarginOptions, 'type'>) {
  const [type, img] = dataUri.split(',');
  // const img = decodeURIComponent(atob(encodedImage));
  // const img = atob(encodedImage);

  // console.log(btoa(img));

  // // .split('').map(function(c) {
  // //   return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  // // }).join('');

  return await authorized(async () => {
    const { update_margin_by_pk } = await sdk().saveMargin({
      id,
      options: {
        ...options,
        type,
      },
      // name,
      img,
      updated_at: new Date().toISOString(),
    });

    if (update_margin_by_pk != null) {
      hub.dispatch({
        type: MARGIN_ACTION.SAVE_DONE,
        payload: update_margin_by_pk,
      });

      hub.dispatch({
        type: NOTICE_ACTION.SHOW,
        payload: {
          status: 'success',
          type: 'top-right',
          message: 'Successfully saved',
        },
      });

      return update_margin_by_pk;
    } else {
      hub.dispatch({
        type: MARGIN_ACTION.SAVE_FAIL,
        payload: {
          id,
          error: {
            message: `The Margin ${id} has not been saved!`,
          },
        },
      });
    }
  });
}

export async function clearMargin(margin: Margin) {
  hub.dispatch({
    type: MARGIN_ACTION.LOAD_DONE,
    payload: {
      id: margin.id,
      pageId: margin.pageId,
    },
  });
}

export async function createNewMargin(pageId: string) {
  return await authorized(async () => {
    const { insert_margin_one } = await sdk().createMargin({
      page_id: pageId,
      created_at: new Date().toISOString(),
    });

    if (insert_margin_one?.id != null) {
      hub.dispatch({
        type: MARGIN_ACTION.CREATE_DONE,
        payload: {
          id: insert_margin_one.id,
          pageId,
        },
      });

      return insert_margin_one;
    } else {
      hub.dispatch({
        type: MARGIN_ACTION.CREATE_FAIL,
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

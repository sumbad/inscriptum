import { sdk } from 'api';
import hub from 'hub';
import { Margin, MarginOptions } from 'models/margin.model';
import { MARGIN_ACTION } from 'new-components/margin/margin.action';
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
  // debugger
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

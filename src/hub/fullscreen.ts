import { HubAction, HUB_ACTION } from './actions';

export function onChangeFullscreen(dispatch: (action: HubAction) => void) {
  document.addEventListener('fullscreenchange', () => {

    dispatch({
      type: HUB_ACTION.FULLSCREEN_CHANGED,
      payload: {
        isFullscreen: document.fullscreenElement != null,
        element: document.fullscreenElement,
      }
    })

    // document.fullscreenElement will point to the element that
    // is in fullscreen mode if there is one. If there isn't one,
    // the value of the property is null.
    if (document.fullscreenElement != null) {
      console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
      console.log('Leaving full-screen mode.');
    }
  });
  
  document.addEventListener('webkitfullscreenchange', () => {

    dispatch({
      type: HUB_ACTION.FULLSCREEN_CHANGED,
      payload: {
        isFullscreen: document['webkitIsFullScreen'] != null,
        element: document.fullscreenElement,
      }
    })

    // document.fullscreenElement will point to the element that
    // is in fullscreen mode if there is one. If there isn't one,
    // the value of the property is null.
    if (document['webkitIsFullScreen']) {
      console.log(`Element: entered full-screen mode.`);
    } else {
      console.log('Leaving full-screen mode.');
    }
  }); 
}
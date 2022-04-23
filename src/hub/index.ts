import { Subject } from 'rxjs';
import { HubAction } from './actions';
import { onChangeFullscreen } from './fullscreen';

const actions$ = new Subject<HubAction>();

function dispatch(action: HubAction): void {
  console.log(action);

  actions$.next(action);
}

export default {
  $: actions$.asObservable(),
  dispatch,
};


onChangeFullscreen(dispatch);
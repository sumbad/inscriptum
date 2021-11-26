import { Subject } from 'rxjs';
import { globalErrorHandle } from 'services/error.service';
import { HubAction } from './actions';
import { onChangeFullscreen } from './fullscreen';

const actions$ = new Subject<HubAction>();

function dispatch(action: HubAction): void {
  console.log(action);

  globalErrorHandle(action);

  actions$.next(action);
}

export default {
  $: actions$.asObservable(),
  dispatch,
};


onChangeFullscreen(dispatch);
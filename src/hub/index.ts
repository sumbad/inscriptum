import { Subject } from 'rxjs';
import { globalErrorHandle } from 'services/error.service';
import { HubAction } from './actions';

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

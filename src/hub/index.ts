import { Subject } from 'rxjs';
import { HubAction } from './actions/hub.action';

const actions$ = new Subject<HubAction>();

// function dispatch<T extends { type: any; payload: any } = HubAction>(action: T): void {
function dispatch(action: HubAction): void {
  console.log(action);

  actions$.next(action);
}

export default {
  $: actions$.asObservable(),
  dispatch,
};

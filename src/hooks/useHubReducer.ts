import { useEffect, useReducer } from '@web-companions/fc';
import { HubAction } from 'hub/actions/hub.action';
import { Observable } from 'rxjs';

export function useHubReducer<T, A extends HubAction, R extends (state: T, action: A) => T = (state: T, action: A) => T>(
  observable: Observable<A>,
  reducer: R,
  initialState: T
): [T, (action: A) => void] {
  // TODO: fix types for useReducer
  const [state, innerDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const sub = observable.subscribe((action) => innerDispatch(action as any));

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return [state, (innerDispatch as never) as (action: A) => void];
}

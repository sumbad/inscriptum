import { HubAction } from 'hub/actions/hub.action';
import type { MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

export function filterByActions<T extends HubAction>(actionTypes: {[x: string]: any}): MonoTypeOperatorFunction<T> {
  return filter((action) => Object.values(actionTypes).includes(action.type));
}

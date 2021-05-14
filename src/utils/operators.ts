import { HubAction } from 'hub/actions';
import type { MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

export function filterByActionsGroup<T extends HubAction>(actionTypes: {[x: string]: any}): MonoTypeOperatorFunction<T> {
  return filter((action) => Object.values(actionTypes).includes(action.type));
}

export function filterByActions<T extends HubAction>(actionTypes: symbol[]): MonoTypeOperatorFunction<T> {
  return filter((action) => actionTypes.includes(action.type));
}

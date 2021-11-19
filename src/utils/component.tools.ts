import { defer, Subject } from 'rxjs';
import { Unpacked } from './types';

/**
 * Wrap a service function to run it and observe the result
 * 
 * @param func 
 * @returns 
 */
export function supervise<T extends (...args: any[]) => any>(func: T) {
  const subject = new Subject<Unpacked<ReturnType<typeof func>>>();

  return {
    $: subject.asObservable(),
    _: (...params: Parameters<typeof func>) => defer(() => func(...params)).subscribe(subject),
  };
}

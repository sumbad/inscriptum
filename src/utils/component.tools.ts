import { from, Subject } from 'rxjs';
import { Unpacked } from './types';

/**
 * Wrap a service function to run it and observe the result
 *
 * @param func
 * @returns
 */
export function supervise<T extends (...args: any[]) => any>(func: T) {
  type FuncResult = Unpacked<ReturnType<typeof func>>;
  const subject = new Subject<FuncResult>();

  return {
    $: subject,
    _: (...params: Parameters<typeof func>) =>
      from(func(...params)).subscribe({
        next: (v: FuncResult) => subject.next(v),
        error: (e) => subject.error(e),
      }),
  };
}

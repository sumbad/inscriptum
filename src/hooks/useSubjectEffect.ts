import { useState, useEffect } from '@web-companions/fc';
import { Observable, Subject } from 'rxjs';

export function useSubjectEffect<T, R>(effect: (subject: Subject<T>) => Observable<R>) {
  const [s, setS] = useState<[Observable<R>, Subject<T>['next']]>();

  useEffect(() => {
    const subject = new Subject<T>();
    setS([effect(subject), (v) => subject.next(v)]);

    return () => subject.unsubscribe();
  }, []);

  return s;
}

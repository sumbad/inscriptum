import { useState, useEffect } from '@web-companions/fc';
import type { Observable } from 'rxjs';
import { AbstractModelService } from 'services/AbstractSubject.service';

export interface SubjectServiceConstructor {
  new (...args: any): AbstractModelService;
}

export function useSubjectService<S extends SubjectServiceConstructor>(service: S, init?: ConstructorParameters<S>) {
  const [instance, setInstance] = useState();
  const [model, setModel] = useState();

  useEffect(() => {
    const args: any[] = init ?? [];
    const instance = new service(...args);
    setInstance(instance);   
    
    const sub = instance.state$
    .subscribe(
      setModel
    );

    return () => {
      instance.destroy();
      sub.unsubscribe();
    };
  }, []);

  return [model, instance] as [InstanceType<S>['state$'] extends Observable<infer U> ? U | undefined : never, InstanceType<S> | undefined];
}

import type { BehaviorSubject } from 'rxjs';

type DefaultSubjectModelStatus = undefined | 'loading' | 'loaded';

export type SubjectModel<T, S = DefaultSubjectModelStatus> = BehaviorSubject<{
  data: T;
  status: S | DefaultSubjectModelStatus;
  error?: null | { msg: string };
}>;

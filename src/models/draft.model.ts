import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SubjectModel } from './$.model';
import { Page, PageSubject } from './page.model';

export type Draft = {
  id: string;
  created_at: string;
  updated_at: string;
  pagesSubjects?: PageSubject[];
  notes?: {
    id: string;
  }[];
};

export type DraftSubject = SubjectModel<Draft | null | undefined>;

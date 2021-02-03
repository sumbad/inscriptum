import type Delta from 'quill-delta';
import { SubjectModel } from './$.model';

export type Page = {
  id: string;
  draftId: string;
  order: number
  content?: Delta;
  isFolded?: boolean;
};

export type PageSubject = SubjectModel<Page, 'save' | 'saving' | 'saved' | 'fold'>;

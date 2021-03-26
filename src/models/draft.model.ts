import { Page } from './page.model';

export type DraftTocModel = {
  header: string;
  pageId: string;
}

export type DraftModel = {
  id: string;
  created_at: string;
  updated_at: string;
  table_of_contents: DraftTocModel[];
  pages?: Page[];
  notes?: {
    id: string;
  }[];
};
import type Delta from 'quill-delta';

export type Page = {
  id: string;
  draftId: string;
  order: number
  margins: {
    id: string;
  }[];
  content?: Delta;
  isFolded?: boolean;
};

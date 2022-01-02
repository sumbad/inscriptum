import { JSONContent } from '@tiptap/core';

export type Page = {
  id: string;
  draftId: string;
  order: number
  margins: {
    id: string;
  }[];
  content?: JSONContent;
  isFolded?: boolean;
};

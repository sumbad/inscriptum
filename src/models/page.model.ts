import { JSONContent } from '@tiptap/core';
import type Delta from 'quill-delta';

export type Page = {
  id: string;
  draftId: string;
  order: number
  margins: {
    id: string;
  }[];
  content?: Delta | JSONContent;
  isFolded?: boolean;
};

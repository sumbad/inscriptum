import { Content, Editor, EditorOptions, Extensions, generateHTML, JSONContent } from '@tiptap/core';

import Document from '@tiptap/extension-document';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import Dropcursor from '@tiptap/extension-dropcursor';
import Gapcursor from '@tiptap/extension-gapcursor';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import History from '@tiptap/extension-history';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Italic from '@tiptap/extension-italic';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';

import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Highlight from '@tiptap/extension-highlight';

import { Figure } from './extensions/figure';
import { TopicDoc } from './extensions/topicDoc';
import { TopicTitle } from './extensions/topicTitle';
import { TopicSummary } from './extensions/topicSummary';
import { TopicFirstLine } from './extensions/topicFirstLine';
import { LinkWithTooltip } from './extensions/linkWithTooltip';

import tippy from 'tippy.js';
import { Aside } from './extensions/aside';
import { HljsCodeBlock } from './extensions/hljsCodeBlock/hljsCodeBlock';
import { CodeBlock2HljsCodeBlock } from './extensions/hljsCodeBlock/codeBlock2HljsCodeBlock';
import { HljsMark } from './extensions/hljsCodeBlock/hljsMark';
import { HljsCodeBlockRow } from './extensions/hljsCodeBlock/hljsCodeBlockRow';

/**
 * Create a new TipTap Editor
 *
 * TODO:
 *  + use packages from StarterKit
 *  + create Figure Node
 *  + create Code Node
 *  + create Title Node
 *  + create Menu/Tooltip 3  (https://github.com/ueberdosis/tiptap/blob/main/packages/react/src/BubbleMenu.tsx) (https://www.tiptap.dev/api/extensions/bubble-menu)
 *    + don't show on figure and code
 *    + more actions
 *  + create Link Node 2 (https://www.tiptap.dev/api/marks/link)
 *  + create Inline Code Node 1 (https://www.tiptap.dev/api/marks/code)
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  - [3] create ListContinuer Node
 *  - [3] create a new Node Aside (see Blockquote)
 *  - [3] create Code Node with row numbers (see InsSyntaxModule.ts)
 *  - [3] update fonts, prefer default OS fonts
 *  - [3] tooltip styles
 *  + remove '@tiptap/starter-kit' package
 *  + remove Focus extension
 *  + remove Placeholder extension
 *  -------------------------------------------------------------------
 *
 *
 * @param editorEl
 * @param content
 * @param isTitle
 * @returns
 */
export function createEditor(editorEl: Element, content?: Content, isTitle: boolean = false, options?: Pick<EditorOptions, 'onUpdate'>) {
  const editor = new Editor({
    element: editorEl,
    content,
    onUpdate: options?.onUpdate,
    extensions: redactorExtensions(isTitle),
  });

  return editor;
}

/**
 * Return HTML base on a redactor's content
 *
 * @param content : a page content;
 * @param isTitle : is the page a title or not;
 * @returns
 */
export function createHTMLbyContent(content: JSONContent, isTitle: boolean = false) {
  return generateHTML(content, redactorExtensions(isTitle));
}

function redactorExtensions(isTitle: boolean = false): Extensions {
  const doc = isTitle ? [TopicDoc, TopicTitle, TopicSummary, TopicFirstLine] : [Document];

  return [
    ...doc,
    Paragraph,
    Text,
    Bold,
    Italic,
    Code,
    Strike,
    HardBreak,
    Heading,
    Blockquote,
    BulletList,
    OrderedList,
    ListItem,
    HorizontalRule,
    // CodeBlock,
    History,
    Dropcursor,
    Gapcursor,
    /////////
    TaskList,
    TaskItem,
    Highlight,
    /////////
    HljsCodeBlock,
    HljsMark,
    HljsCodeBlockRow,
    CodeBlock2HljsCodeBlock,
    /////////
    Figure,
    Aside,
    LinkWithTooltip.configure({
      onRenderHTML: () => {
        // TODO: it's a temporary solution
        // Some problems with this:
        // - add a new tippy instance for each link
        // - if a link was removed the tippy instance will be abandoned
        //
        // I think it will be better to use a single tippy instance for all links (https://atomiks.github.io/tippyjs/v6/addons/#singleton)
        setTimeout(() => {
          const linkElements = document.querySelectorAll('a[href]');

          linkElements.forEach((el) => {
            if (el['_tippy'] == null) {
              tippy(el, {
                delay: [300, 200],
                placement: 'bottom',
                content: (reference: HTMLAnchorElement) => reference.href,
              });
            }
          });
        }, 1);
      },
    }),
  ];
}

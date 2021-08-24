import { JSONContent } from '@tiptap/core';
import { FIGURE_NODE_NAME } from 'new-components/redactor/tools/extensions/figure';
import { TOPIC_SUMMARY_NODE_NAME } from 'new-components/redactor/tools/extensions/topicSummary';
import { TOPIC_TITLE_NODE_NAME } from 'new-components/redactor/tools/extensions/topicTitle';
import Delta from 'quill-delta';

export function hasCustomElement(tag: string): boolean {
  return typeof customElements.get(tag) !== 'undefined';
}

export interface IWebComponent4Import {
  tag: string;
  import: Promise<any>;
}

export async function importWebComponent(components: IWebComponent4Import[]) {
  await Promise.all(components.map((c) => c.import));
  // .then(
  //   (elements: object[]) => {
  //     components.forEach((component, index) => {
  //       if (!hasCustomElement(component.tag)) {
  //         console.log(component.tag, elements[index])
  //         customElements.define(component.tag, elements[index]);
  //       }
  //     });
  //   }
  // );

  // await all definitions
  await Promise.all(components.map((c) => customElements.whenDefined(c.tag)));
}

/**
 * Load style from css file dynamically
 * @param path - path to css file
 */
export function loadStyleFile(path: string) {
  if (!document.getElementById(path)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = path;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = document.location.origin + path;
    link.media = 'all';
    head.appendChild(link);
  }
}

/**
 * Get from quill.js Delta object preview info
 *  @deprecated
 *
 * @param delta - quill.js Delta object
 */
export function quillDelta2Preview(delta: Delta) {
  let previewTitle = '<noname>';
  let previewContent = '...';
  let previewImage = '';
  if (Array.isArray(delta?.ops) && delta.ops.length > 0) {
    previewTitle = String(delta.ops[0].insert);
    previewContent = String(delta.ops[2].insert);
    const imageItem = delta.ops.find((item) => getNestedObject(item, ['insert', 'blockFigure', 'image']) !== undefined);
    if (imageItem != undefined) {
      previewImage = getNestedObject(imageItem, ['insert', 'blockFigure', 'image']);
    }

    if (previewContent.length < 3) {
      for (const [index, value] of delta.ops.entries()) {
        if (index > 2) {
          if (previewContent.length > 100) {
            break;
          }

          if (getNestedObject(value, ['insert', 'blockFigure', 'image']) !== undefined) {
            previewImage = getNestedObject(value, ['insert', 'blockFigure', 'image']);
          } else {
            previewContent += ' ' + value.insert;
          }
        }
      }
      previewContent += '...';
    }
  }

  previewContent = previewContent
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/`/g, '&DiacriticalGrave;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

  return {
    title: previewTitle,
    description: previewContent,
    image: previewImage,
  };
}

/**
 * Create a preview object from the redactor Content
 *
 * @param jsonContent
 * @returns
 */
export function redactorContent2Preview(jsonContent: JSONContent | null) {
  let previewTitle = '<noname>';
  let previewContent = '...';
  let previewImage = '';

  if (jsonContent != null) {
    const topicTitleContent = findFirstJsonContent(jsonContent, TOPIC_TITLE_NODE_NAME);
    if (topicTitleContent?.content != null) {
      previewTitle = topicTitleContent.content[0].text ?? previewTitle;
    }

    const topicSummaryContent = findFirstJsonContent(jsonContent, TOPIC_SUMMARY_NODE_NAME);
    if (topicSummaryContent?.content != null) {
      previewContent = topicSummaryContent.content[0].text ?? previewContent;
    }

    const figureContent = findFirstJsonContent(jsonContent, FIGURE_NODE_NAME);
    if (figureContent?.attrs != null) {
      previewImage = figureContent.attrs['src'] ?? previewImage;
    }
  }

  previewContent = previewContent
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/`/g, '&DiacriticalGrave;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

  return {
    title: previewTitle,
    description: previewContent,
    image: previewImage,
  };
}

/**
 * Find the firs JsonContent object from the parent one
 *
 * @param jsonContent
 * @param nodeType
 * @returns
 */
export function findFirstJsonContent(jsonContent: JSONContent, nodeType: string): JSONContent | null {
  if (jsonContent.type === nodeType) {
    return jsonContent;
  } else if (Array.isArray(jsonContent.content)) {
    for (const content of jsonContent.content) {
      const _content = findFirstJsonContent(content, nodeType);
      if (_content != null) {
        return _content;
      }
    }
  }

  return null;
}

/**
 * Return nested object or undefined
 *
 * @param object - root object
 * @param pathArr - path to nested object as string array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getNestedObject(object: object, pathArr: string[]): any {
  return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined), object);
}

export const css = String.raw;

/**
 * Transliterate from Russian to English or vice versa
 *
 * @param text - a source text
 * @param engToRus - direction
 * @returns
 */
export function transliterate(text: string, engToRus = false) {
  const rus = 'щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь'.split(/ +/g);
  const eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g);

  for (let x = 0; x < rus.length; x++) {
    text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
    text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());
  }
  return text;
}

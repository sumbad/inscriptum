import { JSONContent } from '@tiptap/core';
import { FIGURE_NODE_NAME } from 'redactor/extensions/figure';
import { TOPIC_SUMMARY_NODE_NAME } from 'redactor/extensions/topicSummary';
import { TOPIC_TITLE_NODE_NAME } from 'redactor/extensions/topicTitle';

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
      let summary = '';
      topicSummaryContent.content.forEach((c) => {
        if (c.text != null) {
          summary += c.text;
        }
      });

      previewContent = summary.length > 0 ? summary : previewContent;
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

export function percentToHex(p: number) {
  const percent = Math.max(0, Math.min(100, p)); // bound percent from 0 to 100
  const intValue = Math.round((percent / 100) * 255); // map percent to nearest integer (0 - 255)
  const hexValue = intValue.toString(16); // get hexadecimal representation
  return hexValue.padStart(2, '0').toUpperCase(); // format with leading 0 and upper case characters
}

/**
 * Create unique identifier
 * https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
export function uuidv4() {
  const hash: any = ([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11;
  // https://stackoverflow.com/questions/44042816/what-is-wrong-with-crypto-getrandomvalues-in-internet-explorer-11
  const crypto = window.crypto || window['msCrypto']; // for IE 11
  return hash.replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))![0] & (15 >> (c / 4)))).toString(16));
}

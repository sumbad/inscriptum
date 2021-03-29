import Delta from 'quill-delta';

export function hasCustomElement(tag: string): boolean {
  return typeof customElements.get(tag) !== 'undefined';
}

export interface IWebComponent4Import {
  tag: string;
  import: Promise<any>;
}

export async function importWebComponent(components: IWebComponent4Import[]) {
  await Promise.all(components.map(c => c.import));
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
  await Promise.all(components.map(c => customElements.whenDefined(c.tag)));
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
    const imageItem = delta.ops.find(item=> getNestedObject(item, ['insert', 'blockFigure', 'image']) !== undefined);
    if (imageItem != undefined) {
      previewImage = getNestedObject(imageItem, ['insert', 'blockFigure', 'image']);
    }
    
    if(previewContent.length < 3) {
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

  previewContent =
    previewContent
      .trim()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/`/g, '&DiacriticalGrave;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

  return {
    title: previewTitle,
    content: previewContent,
    image: previewImage,
  };
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
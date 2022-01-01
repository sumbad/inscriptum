import { Command, Node, nodeInputRule, mergeAttributes } from '@tiptap/core';
import { showError, uploadDataToBlob } from 'components/editor/editor/utils';
import { uploadFileService } from 'components/editor/image.service';
import { Fragment } from 'prosemirror-model';

export interface FigureOptions {
  inline: boolean;
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands {
    figure: {
      /**
       * Add an figure
       */
      setFigure: (options: { src: string; alt?: string; title?: string; caption?: string }) => Command;
    };
  }
}

export const inputRegex = /!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/;

export const FIGURE_NODE_NAME = 'figure';

/**
 * TODO:
 * + parse HTML
 * + selectable
 * + set attributes for img
 * + insert a new image
 * - print HTML ??? why
 * - addNodeView rewrite with web-companions
 * - move styles here
 * - move utils/helpers here
 * - fix types for helper method
 * - revise API (commands)
 * - upload service as an optional variable
 * - delete autosize package
 */
export const Figure = Node.create<FigureOptions>({
  name: FIGURE_NODE_NAME,

  draggable: true,
  defining: true,
  selectable: true,
  

  content() {
    return 'text*';
  },

  addOptions() {
    return {
      inline: false,
      HTMLAttributes: {},
    }
  },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options.inline ? 'inline' : 'block';
  },

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'figure',
        contentElement: 'figcaption',
        getAttrs: (node: HTMLDivElement) => {
          const img = node.querySelector('img');

          return {
            src: img?.getAttribute('src'),
            alt: img?.getAttribute('alt'),
            title: img?.getAttribute('title'),
          };
        },
      },
      {
        tag: 'img[src]',
        preserveWhitespace: true,
        getContent(img: HTMLImageElement, schema) {
          const textNode: Fragment<any> = Fragment.from(schema.text(img.alt.length > 0 ? img.alt : ' '));
          return textNode;
        },
        getAttrs: (node: HTMLDivElement) => {
          return {
            src: node.getAttribute('src'),
          };
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['figure', ['img', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)], ['figcaption', 0]];
  },

  addCommands() {
    return {
      setFigure:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: inputRegex,
        type: this.type,
        getAttributes: (match) => {
          const [, alt, src, title] = match;

          return { src, alt, title };
        },
      }),
    ];
  },

  ///////////////////////

  addNodeView() {
    return ({ node, HTMLAttributes, getPos, editor }) => {
      const container = document.createElement('figure');
      container.setAttribute('draggable', 'true');

      const domWrapper = document.createElement('div');
      const domCaption = document.createElement('figcaption');

      domWrapper.classList.add('figure_wrapper');
      domWrapper.contentEditable = 'false';

      domCaption.classList.add('editable_text');
      domCaption.classList.add('empty');
      domCaption.setAttribute('data-placeholder', 'Caption (optional)');

      const firstChild = node.content.firstChild;
      if (firstChild?.isText && firstChild.text != null && firstChild.text.trim().length > 0) {
        domCaption.classList.remove('empty');
      }

      container.appendChild(domWrapper);
      container.appendChild(domCaption);

      const img = appendImgNode(node.attrs.src, domWrapper);
      node.attrs.alt && img.setAttribute('alt', node.attrs.alt);
      node.attrs.title && img.setAttribute('title', node.attrs.title);

      const uploadData = prepareUploadData(node.attrs.src);
      if (uploadData != null) {
        const domProgress = document.createElement('div');
        const domProgressBar = document.createElement('div');

        domProgress.classList.add('file_progress');
        domProgressBar.classList.add('file_progress_bar');
        domWrapper.classList.add('loading');

        domProgress.appendChild(domProgressBar);
        domWrapper.appendChild(domProgress);

        uploadFile(uploadData, domWrapper, domProgressBar);
      }

      img.onclick = () => {
        if (typeof getPos === 'function') {
          this.editor.commands.setNodeSelection(getPos());
        }
      };

      return {
        dom: container,
        contentDOM: domCaption,
        ignoreMutation(p) {
          if (p.type === 'attributes' && p.attributeName != null) {
            if (['src', 'title', 'alt'].includes(p.attributeName)) {
              node.attrs[p.attributeName] = (p.target as HTMLElement).getAttribute(p.attributeName);
            }
            return true;
          }

          return false;
        },
        update: (updatedNode) => {
          if (updatedNode.type !== this.type) {
            return false;
          }

          domCaption.classList.toggle('empty', updatedNode.content.size === 0);

          return true;
        },
      };
    };
  },
});

function appendImgNode(src: string, domWrapper: Element) {
  const image = document.createElement('img');
  image.setAttribute('src', sanitizeImg(src));
  domWrapper.appendChild(image);
  return image;
}

function prepareUploadData(url: string) {
  const match = url.match(/^data:(image\/gif|image\/jpe?g|image\/png|video\/mp4);base64,(.*)$/);

  if (match != null) {
    return { type: match[1], base64_data: match[2] };
  }
}

function sanitizeImg(url: string) {
  return sanitize(url, ['http', 'https', 'data']) ? url : '//:0';
}

function sanitize(url: string, protocols: string[]) {
  const anchor = document.createElement('a');
  anchor.href = url;
  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}

function uploadFile(file_data: { type: string; base64_data: string }, domWrapper: HTMLDivElement, domProgressBar: HTMLDivElement) {
  uploadFileStart(
    file_data,
    (loaded, total) => {
      // onProgress
      let percent = 0;
      if (total && loaded) {
        percent = (loaded * 100) / total;
        percent = Math.min(100, percent);
      }
      domProgressBar.style.width = percent + '%';
    },
    (data) => {
      // onSuccess
      if (data) {
        const src = sanitizeImg(data.src);
        const image = domWrapper.querySelector('img');
        if (image != null) {
          image.src = src;
        }
        domWrapper.classList.remove('loading');
      }
    },
    (error) => {
      // onError
      return showError(error);
    }
  );
}

async function uploadFileStart(file_data, onProgress?, onSuccess?, onError?) {
  try {
    const doneFile = await uploadFileService(uploadDataToBlob(file_data), onProgress);
    onSuccess && onSuccess(doneFile);
  } catch (error) {
    onError && onError(error);
  }
}

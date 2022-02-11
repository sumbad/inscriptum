import { JSONContent, Node } from '@tiptap/core';
import { generateHljsNodeJson, getHljsBlockContentAsText, hljsNodeInputRule } from './utils';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import { TextSelection } from 'prosemirror-state';
import { codeBlockSelectLangElement } from './codeBlockSelectLang.element';

interface HljsCodeBlockOptions {
  languageClassPrefix: string;
  printContentAsHTML: boolean;
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    hljsCodeBlock: {
      /**
       * Set a code block
       */
      setHljsCodeBlock: (attributes?: { language: string }) => ReturnType;
      /**
       * Toggle a code block
       */
      toggleHljsCodeBlock: (attributes?: { language: string }) => ReturnType;
    };
  }
}

const CodeBlockSelectLangElement = codeBlockSelectLangElement('code-block-select-lang');

const backtickInputRegex = /^```(?<language>[a-z]*)? $/;
const tildeInputRegex = /^~~~(?<language>[a-z]*)? $/;

export const HljsCodeBlock = Node.create<HljsCodeBlockOptions>({
  name: 'hljsCodeBlock',
  content: '(hljsCodeBlockRow|paragraph?)+',
  isolating: true,

  marks: '',

  group: 'block',

  defining: true,

  addOptions() {
    return {
      languageClassPrefix: 'language-',
      HTMLAttributes: {},
      printContentAsHTML: false,
    };
  },

  addAttributes() {
    return {
      autocomplete: {
        default: 'off',
      },
      autocorrect: {
        default: 'off',
      },
      autocapitalize: {
        default: 'off',
      },
      spellcheck: {
        default: 'false',
      },
      language: {
        default: null,
        parseHTML: (element) => {
          const classAttribute = element.firstElementChild?.getAttribute('class');

          if (classAttribute == null) {
            return null;
          }

          const regexLanguageClassPrefix = new RegExp(`^(${this.options.languageClassPrefix})`);

          return {
            language: classAttribute.replace(regexLanguageClassPrefix, ''),
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        preserveWhitespace: 'full',
        tag: 'pre',
        getContent(pre: HTMLPreElement, schema) {
          let textContent = '';

          let language: string | undefined = undefined;
          const codeEl = pre.querySelector('code');
          language = codeEl?.getAttribute('language') ?? language;

          pre.childNodes.forEach((cn) => {
            textContent += cn.textContent;
            if (cn.nodeName === 'BR') {
              textContent += '\n';
            }
          });

          const codeNodeJson = generateHljsNodeJson(textContent, language);
          const hljsNode = schema.nodeFromJSON(codeNodeJson) as ProsemirrorNode<typeof schema>;
          return hljsNode.content;
        },
      },
      {
        tag: 'div',
        preserveWhitespace: 'full',
        getAttrs: (node: HTMLDivElement) => node.style.whiteSpace === 'pre' && null,
        getContent(div: HTMLDivElement, schema) {
          let textContent = '';

          div.childNodes.forEach((cn) => {
            textContent += cn.textContent + '\n';
          });

          let language: string | undefined = undefined;
          const codeEl = div.querySelector('code');
          language = codeEl?.getAttribute('language') ?? language;

          const codeNodeJson = generateHljsNodeJson(textContent, language);
          const hljsNode = schema.nodeFromJSON(codeNodeJson) as ProsemirrorNode<typeof schema>;
          return hljsNode.content;
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    const content = this.options.printContentAsHTML ? 0 : getHljsBlockContentAsText(node);

    return ['pre', this.options.HTMLAttributes, ['code', HTMLAttributes, content]];
  },

  addCommands() {
    return {
      setHljsCodeBlock: (attributes) => (param) => {
        const slice = param.state.selection.content();
        let codeText = '';

        slice.content.forEach((c, point) => {
          codeText += c.textContent;
          if (point + c.nodeSize < slice.content.size - 2) {
            codeText += '\n';
          }
        });

        const codeNodeJson: any = generateHljsNodeJson(codeText, attributes?.language);
        const newNode = param.editor.schema.nodeFromJSON(codeNodeJson);

        const jsonContent = newNode.content.toJSON() || [];

        return param
          .chain()
          .insertContent({
            type: this.name,
            attrs: attributes,
            content: jsonContent as JSONContent[],
          })
          .setTextSelection(param.state.selection.$to.end() - 1)
          .run();
      },
      toggleHljsCodeBlock: (attributes) => (param) => {
        const content = param.state.selection.content().content;

        if (content.firstChild != null && content.firstChild.type === this.type) {
          let codeText = '';

          content.forEach((c, point) => {
            if (c.type === this.type) {
              codeText += getHljsBlockContentAsText(c);
            } else {
              codeText += c.textContent;
            }

            if (point + c.nodeSize < content.size - 2) {
              codeText += '\n';
            }
          });

          return param
            .chain()
            .deleteRange({
              from: param.state.selection.from - 2,
              to: param.state.selection.to,
            })
            .insertContent({
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: codeText,
                },
              ],
            })
            .setTextSelection(param.state.selection.$to.end())
            .run();
        } else {
          return param.commands.setHljsCodeBlock(attributes);
        }
      },
    };
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Alt-c': () => this.editor.commands.toggleHljsCodeBlock(),

      // cmd + Enter
      'Mod-Enter': () => {
        const { $anchor } = this.editor.state.selection;

        if ($anchor.parent.type.name !== 'hljsCodeBlockRow') {
          return false;
        }

        const { tr } = this.editor.state;

        this.editor.view.dispatch(
          tr
            .insert($anchor.pos, this.editor.schema.node('paragraph', {}))
            .split($anchor.pos + 1, 1)
            .replaceWith($anchor.pos + 2, $anchor.pos + 4, this.editor.schema.node('paragraph', {}))
            .setSelection(TextSelection.create(tr.doc, $anchor.pos + 2))
        );

        return true;
      },

      // insert 2 spaces by pressing Tab inside a code block
      Tab: () => {
        const { $anchor, from, to } = this.editor.state.selection;
        const parent = $anchor.parent;

        if (parent.type.name !== 'hljsCodeBlockRow') {
          return false;
        }

        const { tr } = this.editor.state;

        let lines = 0;
        this.editor.state.doc.nodesBetween(from, to, (node, startPos) => {
          if (node.type.name === 'hljsCodeBlockRow') {
            const firstChild = node.firstChild;

            if (firstChild != null && firstChild.isText) {
              tr.insertText('\u00a0\u00a0', startPos + 1 + lines);
              lines += 2;
            }
          }
        });

        this.editor.view.dispatch(tr);

        return true;
      },

      // remove code block when code block is empty
      Backspace: () => {
        const { empty, $anchor } = this.editor.state.selection;
        const node = this.editor.state.doc.nodeAt($anchor.pos - 2);

        if (node?.type === this.type && node.content.childCount === 1 && empty) {
          return this.editor.commands.insertContentAt(
            {
              from: $anchor.pos - 2,
              to: $anchor.pos - 2 + node.nodeSize,
            },
            {
              type: 'paragraph',
            }
          );
        }

        return false;
      },
    };
  },

  addInputRules() {
    return [
      hljsNodeInputRule(backtickInputRegex, this.type, ({ groups }: any) => groups),
      hljsNodeInputRule(tildeInputRegex, this.type, ({ groups }: any) => groups),
    ];
  },

  addNodeView() {
    const container = new CodeBlockSelectLangElement();
    const domCodeEl = document.createElement('code');
    container.props.domCodeEl = domCodeEl;
    container.classList.add('hljs-codeblock');

    return ({ editor, node, getPos }) => {
      container.props.selectedLanguage = node.attrs.language;

      for (const key in node.attrs) {
        domCodeEl.setAttribute(key, node.attrs[key]);
      }

      if (node.attrs.language != null) {
        domCodeEl.setAttribute('class', this.options.languageClassPrefix + node.attrs.language);
      }

      if (typeof getPos === 'function') {
        container.props.onChange = (language) => {
          editor.view.dispatch(
            editor.view.state.tr.setNodeMarkup(getPos(), undefined, {
              language: language,
            })
          );
        };

        if (node.content.size === 0) {
          requestAnimationFrame(() => {
            editor.view.dispatch(editor.view.state.tr.insert(getPos() + 1, editor.schema.node('hljsCodeBlockRow')));
          });
        }
      }

      return {
        dom: container,
        contentDOM: domCodeEl,
        update: (updatedNode) => {
          if (updatedNode.type !== this.type) {
            return false;
          }

          const codeText = getHljsBlockContentAsText(updatedNode);

          const codeNodeJson = generateHljsNodeJson(codeText, updatedNode.attrs.language);
          const newNode = editor.schema.nodeFromJSON(codeNodeJson);

          updatedNode.content = newNode.content;

          // return true;
        },
      };
    };
  },
});

import { JSONContent, Node } from '@tiptap/core';
import { generateHljsNodeJson, getHljsBlockText, hljsNodeInputRule } from './utils';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import { TextSelection } from 'prosemirror-state';

interface HljsCodeBlockOptions {
  languageClassPrefix: string;
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

const backtickInputRegex = /^```(?<language>[a-z]*)? $/;
const tildeInputRegex = /^~~~(?<language>[a-z]*)? $/;

export const HljsCodeBlock = Node.create<HljsCodeBlockOptions>({
  name: 'hljsCodeBlock',
  content: 'hljsCodeBlockRow+',
  isolating: true,

  defaultOptions: {
    languageClassPrefix: 'language-',
    HTMLAttributes: {},
  },

  marks: '',

  group: 'block',

  defining: true,

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

          if (!classAttribute) {
            return null;
          }

          const regexLanguageClassPrefix = new RegExp(`^(${this.options.languageClassPrefix})`);

          return {
            language: classAttribute.replace(regexLanguageClassPrefix, ''),
          };
        },
        renderHTML: (attributes) => {
          if (!attributes.language) {
            return null;
          }

          return {
            class: this.options.languageClassPrefix + attributes.language,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        getContent(pre: HTMLPreElement, schema) {
          const codeNodeJson = generateHljsNodeJson(pre.textContent || '');
          const hljsNode = schema.nodeFromJSON(codeNodeJson) as ProsemirrorNode<typeof schema>;
          return hljsNode.content;
        },
        preserveWhitespace: 'full',
        tag: 'pre',
      },
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    return ['pre', this.options.HTMLAttributes, ['code', HTMLAttributes, getHljsBlockText(node)]];
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

        const codeNodeJson: any = generateHljsNodeJson(codeText);
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
              codeText += getHljsBlockText(c);
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

      'Mod-Enter': () => {
        const { $anchor } = this.editor.state.selection;

        if ($anchor.parent.type.name !== 'hljsCodeBlockRow') {
          return false;
        }

        const { tr } = this.editor.state;

        this.editor.view.dispatch(
          tr
            .insert($anchor.pos, this.editor.schema.node('paragraph', {}, this.editor.schema.text(' ')))
            .setSelection(TextSelection.create(tr.doc, $anchor.pos + 2))
        );

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
              type: 'paragraph'
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
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const container = document.createElement('pre');
      const domCodeEl = document.createElement('code');

      for (const key in node.attrs) {
        domCodeEl.setAttribute(key, node.attrs[key]);
      }

      if (node.content.size === 0 && typeof getPos === 'function') {
        editor.view.dispatch(editor.view.state.tr.insert(getPos() + 1, editor.schema.node('hljsCodeBlockRow')));
      }

      container.appendChild(domCodeEl);

      return {
        dom: container,
        contentDOM: domCodeEl,
        update: (updatedNode) => {
          if (updatedNode.type !== this.type) {
            return false;
          }

          const codeText = getHljsBlockText(updatedNode);

          const codeNodeJson = generateHljsNodeJson(codeText);
          const newNode = editor.schema.nodeFromJSON(codeNodeJson);

          updatedNode.content = newNode.content;

          // return true;
        },
      };
    };
  },
});

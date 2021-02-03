import loadImage from 'blueimp-load-image';

import Delta from 'quill-delta';
import Block, { BlockEmbed } from 'quill/blots/block';
import Quill from 'quill/core';

import { ListItem } from 'quill/formats/list';
import { ListContinuer } from '../../components/editor/editor/ListContinuer';
import { IndentClass } from 'quill/formats/indent';
import { Code } from 'quill/formats/code';
import Strike from 'quill/formats/strike';
import Keyboard from 'quill/modules/keyboard';
import { Blot } from 'parchment/dist/src/blot/abstract/blot';

import { BreakBlot } from '../../components/editor/editor/BreakBlot';
import { FieldBlot } from '../../components/editor/editor/FieldBlot';
import { LinkBlot } from '../../components/editor/editor/LinkBlot';
import { MyQuill } from '../../components/editor/editor/MyQuill';
import { SingleLineBlot } from '../../components/editor/editor/SingleLineBlot';
import { TitleBlot } from '../../components/editor/editor/TitleBlot';
import { FigureBlot } from '../../components/editor/editor/FigureBlot';
import { DescriptionBlot } from '../../components/editor/editor/DescriptionBlot';
import BlockBlot from 'parchment/dist/src/blot/block';
import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import { HeaderBlot } from '../../components/editor/editor/HeaderBlot';
import { SubheaderBlot } from '../../components/editor/editor/SubheaderBlot';
import { InsSyntaxModule } from '../../components/editor/editor/InsSyntaxModule';
import { CodeBlock } from 'quill/modules/syntax';
import { EditorTooltipComponent } from '../../components/editor/editor/tooltip';
import { draftSave, T, getPageContent, sanitize, uploadDataToBlob, showError, isEdit } from '../../components/editor/editor/utils';
import hljs from '../../components/editor/editor/hljs';
import { DividerBlot } from '../../components/editor/editor/DividerBlot';

let ua = navigator.userAgent.toLowerCase();
export let browser = {
  opera: /opera/i.test(ua) || /opr/i.test(ua),
  msie: (/msie/i.test(ua) && !/opera/i.test(ua)) || /trident\//i.test(ua) || /edge/i.test(ua),
  msie_edge: /edge/i.test(ua) && !/opera/i.test(ua),
  mozilla: /firefox/i.test(ua),
  chrome: /chrome/i.test(ua) && !/edge/i.test(ua),
  safari: !/chrome/i.test(ua) && /webkit|safari|khtml/i.test(ua),
  iphone: /iphone/i.test(ua),
  ipod: /ipod/i.test(ua),
  ipad: /ipad/i.test(ua),
  android: /android/i.test(ua),
  mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(ua),
  safari_mobile: /iphone|ipod|ipad/i.test(ua),
  opera_mobile: /opera mini|opera mobi/i.test(ua),
  opera_mini: /opera mini/i.test(ua),
  mac: /mac/i.test(ua),
};

export function initQuillEditor(tooltip: EditorTooltipComponent, editorContainerEl: HTMLElement, isTitle: boolean = true) {
  // console.log(MyQuill.length);
  // console.log(MyQuill['imports']['formats/']);

  // if(MyQuill['imports']['formats/link'] === undefined) {
  LinkBlot.blotName = 'link';
  LinkBlot.tagName = 'a';
  LinkBlot.showLinkTooltip = (link) => {
    // console.log(link);
    tooltip.showLinkTooltip(link, link.value, isEdit(), quill);
  };
  LinkBlot.hideLinkTooltip = () => tooltip.hideLinkTooltip(quill);
  MyQuill.register(LinkBlot, true);
  // }

  // if(MyQuill['imports']['formats/blockFigure'] === undefined) {
  FigureBlot.blotName = 'blockFigure';
  FigureBlot.tagName = 'figure';
  FigureBlot.quillSetSelection = (index: number, length: number = 0) => quill.setSelection(index, length, Quill.sources.USER);
  FigureBlot.quillDeleteText = (offset: number, length: number, source: 'api' | 'user' | 'silent' | undefined = Quill.sources.USER) =>
    quill.deleteText(offset, length, source);
  FigureBlot.quillInsertText = (index: number, text: string) => quill.insertText(index, text, Quill.sources.USER);
  FigureBlot.draftSave = () => draftSave(pageContent, quill);
  MyQuill.register(FigureBlot, true);
  // }

  MyQuill.register(DividerBlot);

  MyQuill.register(
    {
      'modules/syntax': InsSyntaxModule,
      'formats/bold': Bold,
      'formats/italic': Italic,
      'formats/indent': IndentClass,
      'formats/list': ListContinuer,
      'formats/list-item': ListItem,
      'formats/code': Code,
      'formats/strike': Strike,
    },
    true
  );
  // Quill.register('modules/clipboard', PlainTextClipboard, true);

  var pageContent: boolean | string = false;

  if (browser.mobile) {
    document.body.classList.add('mobile');
  }

  // let $tl_article = document.querySelector('.tl_article') as HTMLElement;
  // let $tl_header = document.querySelector('.tl_article_header') as HTMLElement;
  // let $tl_content = document.querySelector('.tl_article_content') as HTMLElement;

  // let $image_button = document.querySelector('#_image_button') as HTMLButtonElement;
  // let $embed_button = document.querySelector('#_embed_button') as HTMLButtonElement;

  // let $edit_button = document.querySelector('#_edit_button');
  // let $publish_button = document.querySelector('#_publish_button') as HTMLButtonElement;

  // let $account = document.querySelector('.account');

  // var quill = initQuill();
  // window['quill'] = quill;

  // function initQuill() {
  // let draft = draftGet();
  // if (draft && $tl_editor) {
  //   // $('#_tl_editor').html(draft);
  //   $tl_editor.innerHTML = draft;
  // }

  var quill = new MyQuill(editorContainerEl, {
    scrollingContainer: 'html, body',
    readOnly: true,
    // updatePhoto: updatePhoto,
    // formats: [
    //   'bold', 'italic', 'underline', 'strike', 'code', 'link',
    //   'textBreak',
    //   'blockTitle', 'blockDescription',
    //   'blockHeader', 'blockSubheader',
    //   'blockBlockquote', 'blockPullquote',
    //   'blockDivider',
    //   'blockFigure',
    //   'code-block',
    //   'list',
    // ],
    modules: {
      syntax: {
        highlight: (text) => hljs.highlightAuto(text).value,
      },
      clipboard: {
        matchers: [
          getSimpleMatcher('h2', { blockHeader: true }),
          getSimpleMatcher('h5', { blockSubheader: true }),
          getSimpleMatcher('h6', { blockSubheader: true }),
          [
            'img',
            function (node, delta) {
              if (node.src && sanitize(node.src, ['http', 'https', 'data'])) {
                return new Delta().insert({ blockFigure: { image: node.src, caption: node.alt || '' } });
              }
              return new Delta();
            },
          ],
          [
            'video',
            function (node, delta) {
              if (node.src && sanitize(node.src, ['http', 'https', 'data'])) {
                return new Delta().insert({ blockFigure: { video: node.src } });
              }
              return new Delta();
            },
          ],
          [
            'br',
            function (node, delta) {
              console.log('modules.clipboard.matchers.br');

              if (node.classList.contains('inline')) {
                return new Delta().insert({ textBreak: true });
              }
              return delta;
            },
          ],
        ],
      },
      keyboard: {
        bindings: {
          // 'indent': {
          //   handler: function () {
          //     console.log('keyboard.bindings.indent.handler');
          //     return true;
          //   }
          // },
          // 'outdent': {
          //   handler: function () {
          //     console.log('keyboard.bindings.outdent.handler');
          //     return true;
          //   }
          // },
          // 'tab': {
          //   key: Keyboard.keys.TAB,
          //   handler: function () {
          //     console.log('keyboard.bindings.tab.handler');
          //     return true;
          //   }
          // },
          'required enter': {
            key: Keyboard.keys.ENTER,
            collapsed: true,
            shiftKey: null,
            format: ['blockTitle', 'blockDescription'],
            suffix: /^$/,
            handler: function (range, context) {
              console.log('keyboard.bindings.required_enter.handler');
              let [block]: [BlockBlot] = this.quill.scroll.descendant(FieldBlot, range.index);
              if (block && block.next && block.next.domNode && !block.next.domNode.textContent) {
                this.quill.setSelection(block.next.offset(this.quill.scroll), 0, Quill.sources.USER);
                return false;
              }
              // this.quill.insertText(range.index, '\n', Quill.sources.USER);
              return true;
            },
          },
          'required tab prev': {
            key: Keyboard.keys.TAB,
            shiftKey: true,
            handler: function (range, context) {
              console.log('keyboard.bindings.required_tab_prev.handler');
              let block: Blot | null = null;
              if (range.length > 0) {
                let blocks = quill.scroll.descendants(Block, range.index, range.length);
                if (blocks.length != 1) {
                  return true;
                }
                block = blocks[0];
              } else {
                [block] = quill.scroll.descendant(Block, range.index);
              }
              if (block != null && block.prev != null && block.prev instanceof FieldBlot) {
                let offset = block.prev.offset(quill.scroll);
                let length = block.prev.length();
                quill.setSelection(offset, length > 1 ? length : 0, Quill.sources.USER);
                return false;
              }
              return true;
            },
          },
          'required tab next': {
            key: Keyboard.keys.TAB,
            shiftKey: false,
            handler: function (range, context) {
              console.log('keyboard.bindings.required_tab_next.handler');
              let block: Blot | null = null;
              if (range.length > 0) {
                let blocks = quill.scroll.descendants(Block, range.index, range.length);
                if (blocks.length != 1) {
                  return true;
                }
                block = blocks[0];
              } else {
                [block] = quill.scroll.descendant(Block, range.index);
              }
              if (block != null && block instanceof FieldBlot && block.next != null) {
                let offset = block.next.offset(quill.scroll);
                if (block.next instanceof FieldBlot) {
                  let length = block.next.length();
                  quill.setSelection(offset, length > 1 ? length : 0, Quill.sources.USER);
                } else {
                  quill.setSelection(offset, 0, Quill.sources.USER);
                }
                return false;
              }
              return true;
            },
          },
          'no tab': {
            key: Keyboard.keys.TAB,
            shiftKey: null,
            handler: function (range, context) {
              console.log('keyboard.bindings.no_tab.handler');
              return false;
            },
          },
          'detect embed': {
            key: Keyboard.keys.ENTER,
            collapsed: true,
            handler: function (range, context) {
              console.log('keyboard.bindings.detect_embed.handler');
              let [line_blot, offset] = quill.scroll.line(range.index);
              if (line_blot) {
                let text = line_blot.domNode.textContent;
                let prefix = text.substr(0, offset);
                let match;
                if ((match = prefix.match(/(^|\s)(https?:\/\/\S+)$/))) {
                  let url = match[2];
                  let links = quill.scroll.descendants(LinkBlot, range.index - url.length, url.length);
                  if (!links.length) {
                    quill.formatText(range.index - url.length, url.length, 'link', url, Quill.sources.USER);
                  }
                  if (!prefix.substr(0, offset - url.length).trim().length && line_blot.domNode.tagName == 'P') {
                    let figure_value = getFigureValueByUrl(url);
                    if (figure_value) {
                      let offset = line_blot.offset(quill.scroll);
                      quill.updateContents(
                        new Delta().retain(offset).delete(prefix.length).insert({ blockFigure: figure_value }),
                        Quill.sources.USER
                      );
                      tooltip.hideBlocksTooltip();
                      return false;
                    }
                  }
                }
              }
              return true;
            },
          },
          'divider autofill': {
            key: Keyboard.keys.ENTER,
            collapsed: true,
            prefix: /^([-*])\1{2,}$/,
            handler: function (range, context) {
              console.log('keyboard.bindings.divider_autofill.handler');
              let [line_blot, index] = quill.scroll.line(range.index);
              if (line_blot && line_blot.domNode.tagName == 'P') {
                let offset = line_blot.offset(quill.scroll);
                let delta = new Delta().retain(offset).delete(line_blot.length()).insert({ blockDivider: true });
                if (!line_blot.next) {
                  delta.insert('\n');
                }
                quill.updateContents(delta, Quill.sources.USER);
                return false;
              }
              return true;
            },
          },
          break: {
            key: Keyboard.keys.ENTER,
            shiftKey: true,
            handler: breakHandler.bind(null, true),
          },
          enter: {
            key: Keyboard.keys.ENTER,
            handler: breakHandler.bind(null, false),
          },
          'detect link': {
            key: ' ',
            collapsed: true,
            handler: detectLinkHandler,
          },
          'cancel placeholder': {
            key: Keyboard.keys.ESCAPE,
            handler: function (range, context) {
              console.log('keyboard.bindings.cancel_placeholder.handler');
              checkOncePlaceholder();
              this.quill.updateSelection(Quill.sources.USER);
              return true;
            },
          },
          'list autofill': {
            key: ' ',
            shiftKey: null,
            collapsed: true,
            format: {
              list: false,
              'code-block': false,
              blockquote: false,
              header: false,
              table: false,
            },
            prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
            handler(range, context) {
              if (this.quill.scroll.query && this.quill.scroll.query('list') == null) return true;
              const { length } = context.prefix;
              const [line, offset] = this.quill.getLine(range.index);
              if (offset > length) return true;
              let value;
              switch (context.prefix.trim()) {
                case '[]':
                case '[ ]':
                  value = 'unchecked';
                  break;
                case '[x]':
                  value = 'checked';
                  break;
                case '-':
                case '*':
                  value = 'bullet';
                  break;
                default:
                  value = { type: 'ordered', start: Number(context.prefix.slice(0, -1)) - 1 };
              }
              this.quill.insertText(range.index, ' ', Quill.sources.USER);
              this.quill.history.cutoff();
              console.log('keyboard.bindings.list_autofill.handler', range, context);
              const delta = new Delta()
                .retain(range.index - offset)
                .delete(length + 1)
                .retain(line.length() - 2 - offset)
                .retain(1, { list: value, start: value.start });
              console.log('keyboard.bindings.list_autofill.handler', delta);
              const newContend = this.quill.updateContents(delta, Quill.sources.USER);
              console.log('keyboard.bindings.list_autofill.handler', newContend);
              this.quill.history.cutoff();
              this.quill.setSelection(range.index - length, Quill.sources.SILENT);
              return false;
            },
          },
          // 'list autofill': {
          //   key: ' ',
          //   collapsed: true,
          //   format: { list: false },
          //   prefix: /^(\d*\.|-|\*)$/,
          //   handler: function (range, context) {
          //     let length = context.prefix.length;
          //     console.log('keyboard.bindings.list_autofill.handler', range, context);
          //     this.quill.scroll.deleteAt(range.index - length, length);
          //     this.quill.formatLine(range.index - length, 1, 'list', length === 1 ? 'bullet' : 'ordered', Quill.sources.USER);
          //     this.quill.setSelection(range.index - length, Quill.sources.SILENT);
          //   }
          // },
          'pre wrap': {
            key: 192, // `
            collapsed: true,
            format: { 'code-block': false },
            prefix: /^``$/,
            offset: 2,
            handler: function (range, context) {
              console.log('keyboard.bindings.pre_wrap.handler');
              let length = context.prefix.length;
              let index = range.index - length;
              this.quill.scroll.deleteAt(index, length);
              this.quill.formatLine(index, 1, 'code-block', true, Quill.sources.USER);
              this.quill.setSelection(index, Quill.sources.SILENT);
            },
          },
          code: {
            key: 192, // `
            handler: function (range, context) {
              console.log('keyboard.bindings.code.handler', !context.format);
              if (!context.collapsed) {
                let lines = quill.scroll.descendants(Block, range.index, range.length);
                if (lines.length > 1 || (lines.length == 1 && lines[0] instanceof CodeBlock)) {
                  this.quill.format('code-block', !context.format['code-block'], Quill.sources.USER);
                  return false;
                }
                let breaks = quill.scroll.descendants(BreakBlot, range.index, range.length);
                if (breaks.length) {
                  this.quill.format('code-block', !context.format['code-block'], Quill.sources.USER);
                  return false;
                }
              }
              if (context.collapsed && !context.format['code'] && !/\s$/.test(context.prefix)) {
                return true;
              }
              this.quill.format('code', !context.format['code'], Quill.sources.USER);
            },
          },
          'figure delete': {
            key: Keyboard.keys.BACKSPACE,
            collapsed: true,
            offset: 0,
            handler: function (range, context) {
              console.log('keyboard.bindings.figure_delete.handler');
              let [line_blot, index] = quill.scroll.line(range.index);
              if (line_blot && line_blot.prev && line_blot.prev instanceof FigureBlot) {
                if (context.empty) {
                  quill.deleteText(range.index, 1, Quill.sources.USER);
                }
                quill.setSelection(line_blot.prev.offset(quill.scroll));
                return false;
              }
              return true;
            },
          },
          'field backspace': {
            key: Keyboard.keys.BACKSPACE,
            collapsed: true,
            offset: 0,
            handler: function (range, context) {
              console.log('keyboard.bindings.field_backspace.handler');
              let [line_blot, index] = quill.scroll.line(range.index);
              if (line_blot && line_blot.prev && line_blot.prev instanceof FieldBlot && line_blot.domNode.textContent.length > 0) {
                return false;
              }
              return true;
            },
          },
          strikethrough: {
            key: 'X',
            shortKey: true,
            shiftKey: true,
            handler: function (range, context) {
              quill.formatText(range, 'strike', !context.format['strike']);
            },
          },
        },
      },
    },
  });

  function getSimpleMatcher(tag, attributes) {
    return [
      tag,
      function (node, delta) {
        return delta.compose(new Delta().retain(delta.length(), attributes));
      },
    ];
  }

  function lineSuffix(index) {
    let [block, offset] = quill.scroll.line(index);
    return quill.getText(index, block.length() - offset);
  }

  function isLineEnd(index) {
    let suffix = lineSuffix(index);
    return !suffix || suffix == '\n';
  }

  function breakHandler(shiftKey, range, context) {
    console.log('breakHandler', shiftKey, range, context);

    let blot,
      index = range.index;
    if (range.length > 0) {
      quill.scroll.deleteAt(index, range.length);
    }
    let isEnd = isLineEnd(index),
      tailBreak = false;
    [blot] = quill.scroll.descendant(BreakBlot, index);
    if (blot) {
      if (!blot.prev || blot.prev instanceof BreakBlot) {
        quill.scroll.deleteAt(--index, 1);
        tailBreak = true;
      }
    } else {
      [blot] = quill.scroll.descendant(BreakBlot, index - 1);
      if (blot) {
        quill.scroll.deleteAt(--index, 1);
        tailBreak = true;
      }
    }
    [blot] = quill.scroll.descendant(SingleLineBlot, index);
    if (blot || tailBreak || !shiftKey) {
      quill.insertText(index, '\n', Quill.sources.USER);
      quill.setSelection(++index, 0, Quill.sources.USER);
      if (context.format.blockHeader || context.format.blockSubheader || context.format.blockBlockquote || context.format.blockPullquote) {
        if (isEnd) {
          quill.formatLine(
            index,
            1,
            {
              blockHeader: false,
              blockSubheader: false,
              blockBlockquote: false,
              blockPullquote: false,
            },
            Quill.sources.USER
          );
        }
      }
    } else {
      quill.insertEmbed(index, 'textBreak', true, Quill.sources.USER);
      [blot] = quill.scroll.descendant(BreakBlot, index);
      if (blot && !blot.next && !(blot.prev && blot.prev instanceof BreakBlot)) {
        quill.insertEmbed(++index, 'textBreak', true, Quill.sources.SILENT);
        quill.setSelection(index, 0, Quill.sources.SILENT);
      }
    }
    // quill.selection.scrollIntoView();
    return false;
  }

  function detectLinkHandler(range) {
    console.log('detectLinkHandler', range);

    let [line_blot, offset] = quill.scroll.line(range.index);
    if (line_blot) {
      let text = line_blot.domNode.textContent;
      let prefix = text.substr(0, offset);
      let match;
      if ((match = prefix.match(/(^|\s)((?:https?|tg):\/\/\S+|www\.\S+)$/))) {
        let url = match[2];
        let url_length = url.length;
        if (url.substr(0, 4) == 'www.') {
          url = 'http://' + url;
        }
        let links = quill.scroll.descendants(LinkBlot, range.index - url_length, url_length);
        if (!links.length) {
          quill.formatText(range.index - url_length, url_length, 'link', url, Quill.sources.USER);
        }
      }
    }
    return true;
  }

  quill.addContainer(tooltip);

  // quill.on(Quill.events.EDITOR_CHANGE, function (eventType, range) {
  //   if (eventType !== Quill.events.SELECTION_CHANGE) return;
  //   if (!quill.isEnabled()) return;
  //   if (range == null) return;
  //   checkFigureBlots(range);

  //   let [block, offset] = quill.scroll.descendant(Block, range.index);
  //   if (range.length === 0) {
  //     tooltip.hideFormatTooltip(quill);
  //     if (block != null &&
  //       !(block instanceof FieldBlot) &&
  //       !(block instanceof BlockquoteBlot) &&
  //       !(block instanceof PullquoteBlot) &&
  //       !(block instanceof CodeBlock) &&
  //       !(block instanceof ListItem) &&
  //       block.domNode.textContent === ''
  //     ) {
  //       tooltip.showBlocksTooltip(range, isEdit(), quill);
  //     } else {
  //       tooltip.hideBlocksTooltip();
  //     }
  //   } else {
  //     if (block != null &&
  //       !(block instanceof TitleBlot)) {
  //       tooltip.showFormatTooltip(range, quill, isEdit());
  //       toolbarUpdate(range);
  //     } else {
  //       tooltip.hideFormatTooltip(quill);
  //     }
  //     tooltip.hideBlocksTooltip();
  //   }
  //   // toolbarUpdate(range);
  //   let formats = quill.getFormat(range);
  //   $tl_article && $tl_article.classList.toggle('title_focused', !!(formats['blockTitle'] || formats['blockDescription']));
  //   checkOncePlaceholder();
  // });

  quill.on(Quill.events.TEXT_CHANGE, function () {
    let range = quill.getSelection();
    // toolbarUpdate(range);
    checkRequiredBlots(quill);
    checkBlotPlaceholder(quill);
    checkOncePlaceholder();
    draftSave(pageContent, quill);
  });

  // quill.on(Quill.events.TEXT_PASTE, function () {
  //   debugger
  //   let range = quill.getSelection();
  //   if (range) {
  //     detectLinkHandler(range);
  //   }
  // });

  quill.on(Quill.events.SCROLL_OPTIMIZE, function (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type == 'childList' && !mutation.addedNodes.length && mutation.removedNodes.length) {
        let prev = mutation.previousSibling;
        let next = mutation.nextSibling;
        if (!next && prev && prev.tagName == 'BR' && prev.className == 'inline') {
          let br = document.createElement('br');
          br.className = 'inline';
          mutation.target.appendChild(br);
        } else if (
          next &&
          prev &&
          !(prev.tagName == 'BR' && prev.className == 'inline') &&
          next.tagName == 'BR' &&
          next.className == 'inline' &&
          !next.nextSibling
        ) {
          if (next.parentNode) {
            next.parentNode.removeChild(next);
          }
        }
      }
    });
  });

  quill.scroll.domNode.setAttribute('dir', 'auto');

  document.addEventListener('click touchstart', function (e) {
    let el = e.target;
    while (el) {
      if (el === quill.container) {
        return;
      }
      el = (el as Element).parentNode;
    }
    tooltip.hideFormatTooltip(quill);
    tooltip.hideBlocksTooltip();
  });

  checkRequiredBlots(quill);
  checkBlotPlaceholder(quill);

  function getFigureValueByUrl(url) {
    let match;
    if (
      (match = url.match(/^(https?):\/\/(www\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/i)) ||
      (match = url.match(/^(https?):\/\/(www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/i))
    ) {
      return { embed: '/embed/youtube?url=' + encodeURIComponent(url) };
    }
    if ((match = url.match(/^(https?):\/\/(www\.)?vimeo\.com\/(\d+)/i))) {
      return { embed: '/embed/vimeo?url=' + encodeURIComponent(url) };
    }
    if ((match = url.match(/^(https?):\/\/(www\.|mobile\.)?twitter\.com\/(.+)\/status\/(\d+)/i))) {
      return { embed: '/embed/twitter?url=' + encodeURIComponent(url) };
    }
    if ((match = url.match(/^(https?):\/\/(t\.me|telegram\.me|telegram\.dog)\/([a-zA-Z0-9_]+)\/(\d+)/i))) {
      return { embed: '/embed/telegram?url=' + encodeURIComponent(url) };
    }
    if ((match = url.match(/^data:(image\/gif|image\/jpe?g|image\/png|video\/mp4);base64,(.*)$/))) {
      if (match[1].substr(0, 6) == 'video/') {
        return { video: url };
      }
      return { image: url };
    }
    if ((match = url.match(/^(https?):\/\/\S+/i))) {
      let anchor = document.createElement('a');
      anchor.href = url;
      if (anchor.pathname.match(/\.(jpe?g|png|gif|mp4)$/i)) {
        if (match[1] == 'mp4') {
          return { video: url };
        }
        return { image: url };
      }
    }
    return false;
  }

  function checkBlotPlaceholder(quill) {
    let lines = quill.scroll.descendants(Block, 0, quill.scroll.length());
    lines.forEach((line: { domNode: Element }) => {
      if (line.domNode.hasAttribute('data-placeholder')) {
        let value = line.domNode.textContent;
        line.domNode.classList.toggle('empty', !value);
        // if (!value) {
        //   quill.setSelection(quill.getSelection());
        // }
      }
    });
  }

  function checkRequiredBlots(quill) {
    if (isTitle) {
      let [first, second] = quill.scroll.lines();

      if (first instanceof BlockEmbed) {
        quill.updateContents(new Delta().insert('\n', { blockTitle: true }).insert('\n', { blockDescription: true }), Quill.sources.SILENT);
      } else {
        if (!(first instanceof TitleBlot)) {
          quill.formatLine(0, 1, { blockTitle: true }, Quill.sources.SILENT);
        }
        if (!second) {
          let offset = quill.scroll.length();
          quill.updateContents(new Delta().retain(offset).insert('\n', { blockDescription: true }), Quill.sources.SILENT);
        } else if (second instanceof BlockEmbed) {
          let offset = second.offset(quill.scroll);
          quill.updateContents(new Delta().retain(offset).insert('\n', { blockDescription: true }), Quill.sources.SILENT);
        } else if (!(second instanceof DescriptionBlot)) {
          let offset = second.offset(quill.scroll);
          quill.formatLine(offset, 1, { blockDescription: true }, Quill.sources.SILENT);
        }
      }

      let [, , third] = quill.scroll.lines();
      if (!third) {
        let offset = quill.scroll.length();
        quill.insertText(offset, '\n', Quill.sources.SILENT);
      } else {
        let offset = third.offset(quill.scroll);
        let length = quill.scroll.length() - offset;
        let blots = quill.scroll.descendants(FieldBlot, offset, length);
        blots.forEach((blot) => {
          let index = blot.offset(quill.scroll);
          let length = blot.length();
          let format = blot.constructor.blotName;
          quill.formatText(index, length, format, false, Quill.sources.SILENT);
        });
      }
    }

    const lines = quill.scroll.lines();

    // remove old placeholders
    const placeholderEls = editorContainerEl.querySelectorAll('[data-placeholder]');
    placeholderEls.forEach(el=>el.removeAttribute('data-placeholder'))

    const isEmptyContent = isTitle ? lines.length === 3 : lines.length === 1;
    if (isEmptyContent) {
      lines.forEach((line, i) => {
        if (line.domNode.tagName == 'P') {
          const isPlaceholder = isTitle ? i === 2 : i == 0;
          if (isPlaceholder) {
            line.domNode.setAttribute('data-placeholder', 'The page content...');
          }
        }
      });
    }
  }

  function toolbarPrompt($el: HTMLElement, text, onEnter) {
    let $input = $el.querySelector('.prompt_input') as HTMLInputElement;
    let $close = $el.querySelector('.close') as HTMLElement;
    $input.value = '';
    $input.setAttribute('placeholder', text);
    $input.onkeydown = (e) => {
      let key = e.which || e.keyCode;
      if (key == 27) {
        toolbarPromptHide($el);
      } else if (key == 13) {
        let value = $input.value;
        if (value) {
          onEnter && onEnter(value);
          e.preventDefault();
        }
        toolbarPromptHide($el);
      }
    };
    $input.onblur = () => {
      toolbarPromptHide($el);
    };
    $close.onclick = () => {
      toolbarPromptHide($el);
    };
    $el.style.display = '';
    $el.classList.add('tooltip_prompt');
    $input.focus();
  }

  function toolbarPromptHide($el: HTMLElement) {
    let $input = $el.querySelector('.prompt_input') as HTMLInputElement;
    let $close = $el.querySelector('.close') as HTMLElement;
    $input.onkeydown = null;
    $input.onblur = null;
    $close.onclick = null;
    $el.style.display = '';
    $el.classList.remove('tooltip_prompt');
    quill.focus();
  }

  function updatePhoto(file, callback) {
    if (file.type == 'image/jpg' || file.type == 'image/jpeg') {
      return loadImage(
        file,
        (canvas) => {
          if (canvas.type === 'error') {
            callback(file);
          } else {
            if (canvas.toBlob) {
              canvas.toBlob(function (file) {
                callback(file);
              }, file.type);
            } else {
              var dataurl = canvas.toDataURL(file.type);
              var file_data = {
                type: file.type,
                base64_data: dataurl.split(',')[1],
              };
              callback(uploadDataToBlob(file_data));
            }
          }
        },
        {
          canvas: true,
          orientation: true,
        }
      );
    }
    callback(file);
  }

  tooltip.$bold_button.onclick = (e) => {
    console.log('$bold_button.onclick');

    let input = e.target as HTMLElement;
    let active = input.classList.contains('active');
    e.preventDefault();
    console.log('$bold_button.onclick', !active);
    quill.format('bold', !active);
    console.log('$bold_button.onclick', quill.getSelection(true));

    quill.updateSelection(Quill.sources.API);
    // let range = quill.getSelection(true);
    // toolbarUpdate(range); ///????????
  };

  tooltip.$italic_button.onclick = (e) => {
    let input = e.target as HTMLElement;
    let active = input.classList.contains('active');
    e.preventDefault();
    quill.format('italic', !active);
    quill.updateSelection(Quill.sources.API);
    // let range = quill.getSelection(true);
    // toolbarUpdate(range);
  };

  tooltip.$link_button.onclick = (e) => {
    let input = e.target as HTMLElement;
    let active = input.classList.contains('active');
    e.preventDefault();
    var range = quill.getSelection(true);
    if (active) {
      let links = quill.scroll.descendants(LinkBlot, range.index, range.length);
      links.forEach((link) => {
        let index = link.offset(quill.scroll);
        let length = link.length();
        quill.formatText(index, length, 'link', false);
      });
      toolbarUpdate(range, quill, tooltip);
    } else {
      toolbarPrompt(tooltip.$tl_tooltip, 'Paste or type a link...', function (value) {
        value = value.trim();
        if (
          value.substr(0, 1) != '#' &&
          value.substr(0, 1) != '/' &&
          value.substr(0, 7) != 'http://' &&
          value.substr(0, 8) != 'https://' &&
          value.substr(0, 5) != 'tg://' &&
          value.substr(0, 7) != 'mailto:'
        ) {
          if (value.indexOf('@') > 0) {
            value = 'mailto:' + value;
          } else {
            value = 'http://' + value;
          }
        }
        quill.focus();
        quill.format('link', value);
        toolbarUpdate(range, quill, tooltip);
      });
    }
  };

  tooltip.$header_button.onclick = (e) => {
    let input = e.target as HTMLElement;
    let active = input.classList.contains('active');
    e.preventDefault();

    let range = quill.getSelection(true);
    quill.format('blockHeader', !active);
    let blots = quill.scroll.descendants(HeaderBlot, range.index, range.length);

    blots.forEach((blot) => {
      let index = blot.offset(quill.scroll);
      let length = blot.length();
      quill.formatText(
        index,
        length,
        {
          bold: false,
          italic: false,
          code: false,
        },
        Quill.sources.SILENT
      );
    });
    quill.updateSelection(Quill.sources.API);
    // toolbarUpdate(range);
  };

  tooltip.$subheader_button.onclick = (e) => {
    let input = e.target as HTMLElement;
    let active = input.classList.contains('active');
    e.preventDefault();
    let range = quill.getSelection(true);
    quill.format('blockSubheader', !active);
    let blots = quill.scroll.descendants(SubheaderBlot, range.index, range.length);
    blots.forEach((blot) => {
      let index = blot.offset(quill.scroll);
      let length = blot.length();
      quill.formatText(
        index,
        length,
        {
          bold: false,
          italic: false,
          code: false,
        },
        Quill.sources.SILENT
      );
    });
    quill.updateSelection(Quill.sources.API);
    // toolbarUpdate(range);
  };

  tooltip.$quote_button.onclick = (e) => {
    let input = e.target as HTMLElement;
    let active = input.classList.contains('active');
    let pullquote = input.classList.contains('pullquote');
    e.preventDefault();
    let range = quill.getSelection(true);
    if (active) {
      quill.format('blockPullquote', !pullquote);
    } else {
      quill.format('blockBlockquote', true);
    }
    quill.updateSelection(Quill.sources.API);
    // toolbarUpdate(range);
  };

  tooltip.$strikeButton.onclick = (e) => {
    let input = e.target as HTMLElement;
    let active = input.classList.contains('active');
    e.preventDefault();
    quill.format('strike', !active);

    quill.updateSelection(Quill.sources.API);
  };

  tooltip.$image_button.onclick = () => {
    let fileInput = quill.container.querySelector('input.ql-image[type=file][data-status=ready]') as HTMLInputElement;
    if (fileInput == null) {
      fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute(
        'accept',
        browser.safari_mobile ? 'image/gif, image/jpeg, image/jpg, image/png' : 'image/gif, image/jpeg, image/jpg, image/png, video/mp4'
      );
      fileInput.classList.add('ql-image');
      fileInput.addEventListener('change', () => {
        if (fileInput && fileInput.files != null && fileInput.files[0] != null) {
          var file = fileInput.files[0];

          const fileSizeLimitCallback = function () {
            showError('File too big (up to 5 MB allowed)');
          };

          const fileSizeLimit = 5 * 1024 * 1024;
          updatePhoto(file, (file) => {
            if (file.size > fileSizeLimit) {
              return fileSizeLimitCallback && fileSizeLimitCallback();
            }
            var reader = new FileReader();
            reader.onload = function (e) {
              if (e && e.target !== null) {
                let figure_value = getFigureValueByUrl(e.target['result']);
                if (figure_value) {
                  let range = quill.getSelection(true);
                  quill.updateContents(
                    new Delta().retain(range.index).delete(range.length).insert({ blockFigure: figure_value }),
                    Quill.sources.USER
                  );
                } else {
                  showError('Invalid file format');
                }
                fileInput.value = '';
                fileInput.setAttribute('data-status', 'ready');
              }
            };
            reader.readAsDataURL(file);
          });
        }
      });
      quill.container.appendChild(fileInput);
    }
    fileInput.setAttribute('data-status', 'busy');
    fileInput.click();
  };

  tooltip.$embed_button.onclick = (e) => {
    // toolbarPrompt($tl_blocks, 'Paste a YouTube, Vimeo or Twitter link, and press Enter', function(value) {
    //   let figure_value = getFigureValueByUrl(value);
    //   let insert = figure_value ? {blockFigure: figure_value} : value + '\n';
    //   let range = quill.getSelection(true);
    //   quill.updateContents(new Delta()
    //     .retain(range.index)
    //     .delete(range.length)
    //     .insert(insert)
    //   , Quill.sources.USER);
    //   quill.focus();
    //   blocksUpdatePosition(quill.getSelection());
    // });
    let range = quill.getSelection(true);
    let [line] = quill.scroll.line(range.index);
    const node = line.domNode as HTMLElement;
    if (line) {
      let value = node.textContent;
      if (!value) {
        node.setAttribute('data-placeholder', 'Paste a YouTube, Vimeo or Twitter link, and press Enter');
        node.classList.add('placeholder_once', 'empty');
        tooltip.hideBlocksTooltip();
      }
    }
  };

  window.addEventListener('scroll resize', () => {
    tooltip.tooltipUpdatePosition(tooltip.$tl_tooltip, null, tooltip.formatTTOptions, quill);
    tooltip.tooltipUpdatePosition(tooltip.$tl_link_tooltip, null, tooltip.linkTTOptions, quill);
  });

  return quill;
}

export function toolbarUpdate(range, quill: Quill, tooltip: EditorTooltipComponent) {
  let formats = range == null ? {} : quill.getFormat(range);

  let in_author = !!formats['blockDescription'];
  let in_header = !!(formats['blockHeader'] || formats['blockSubheader']);
  let in_code = !!formats['code-block'];

  tooltip.$bold_button.classList.toggle('active', !!formats['bold']);
  tooltip.$bold_button.classList.toggle('disabled', in_author || in_header || in_code);
  tooltip.$italic_button.classList.toggle('active', !!formats['italic']);
  tooltip.$italic_button.classList.toggle('disabled', in_author || in_header || in_code);
  tooltip.$header_button.classList.toggle('active', !!formats['blockHeader']);
  tooltip.$header_button.classList.toggle('disabled', in_author);
  tooltip.$subheader_button.classList.toggle('active', !!formats['blockSubheader']);
  tooltip.$subheader_button.classList.toggle('disabled', in_author);
  tooltip.$quote_button.classList.toggle('active', !!(formats['blockBlockquote'] || formats['blockPullquote']));
  tooltip.$quote_button.classList.toggle('pullquote', !!formats['blockPullquote']);
  tooltip.$quote_button.classList.toggle('disabled', in_author);
  tooltip.$strikeButton.classList.toggle('active', !!formats['strike']);
  tooltip.$strikeButton.classList.toggle('disabled', in_author);

  if (range != null) {
    let links = quill.scroll.descendants(LinkBlot, range.index, range.length);
    tooltip.$link_button.classList.toggle('active', !!links.length);
  } else {
    tooltip.$link_button.classList.toggle('active', false);
  }
  tooltip.$link_button.classList.toggle('disabled', in_code);
}

export function checkOncePlaceholder() {
  const placeholder_once = document.querySelector('.placeholder_once');
  if (placeholder_once !== null) {
    placeholder_once.removeAttribute('data-placeholder');
    placeholder_once.classList.remove('placeholder_once', 'empty');
  }
}

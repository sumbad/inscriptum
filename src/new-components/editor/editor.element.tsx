import { EG, useEffect, useState } from '@web-companions/fc';
import { TypeConstructor } from '@web-companions/fc/common.model';
import { render } from 'lit-html';
import Quill from 'quill/core';
import Delta from 'quill-delta';
import { useLitRef } from 'hooks/useLitRef';
import { FigureBlot } from 'components/editor/editor/FigureBlot';
import { checkOncePlaceholder, initQuillEditor, toolbarUpdate } from './utils';
import { Blot } from 'parchment/dist/src/blot/abstract/blot';
import Block from 'quill/blots/block';
import { BlockquoteBlot } from 'components/editor/editor/BlockquoteBlot';
import { FieldBlot } from 'components/editor/editor/FieldBlot';
import { PullquoteBlot } from 'components/editor/editor/PullquoteBlot';
import { TitleBlot } from 'components/editor/editor/TitleBlot';
import { isEdit } from 'components/editor/editor/utils';
import { CodeBlock } from 'quill/modules/syntax';
import { ListItem } from 'quill/formats/list';
import { EditorTooltipComponent } from '../../components/editor/editor/tooltip';

const define = (_n: string) => EditorTooltipComponent;
const EditorTooltipElement = define('inscriptum-editor-tooltip');

export const editorElement = EG({
  props: {
    content: {
      type: {} as TypeConstructor<Delta | undefined>,
    },
    textChangeCb: {
      type: {} as TypeConstructor<(changes: Delta, newContent: Delta) => void>,
      default: () => {},
    },
    isTitle: Boolean,
  },
  render,
})(function (props) {
  const [rafId, setRafId] = useState(0);

  const editorContainerEl = useLitRef();
  const articleContainerEl = useLitRef();
  const tooltipContainerEl = useLitRef<EditorTooltipComponent>();

  useEffect(() => {
    cancelAnimationFrame(rafId);
    setRafId(
      requestAnimationFrame(() => {
        const tooltip = tooltipContainerEl.current;
        const articleEl = articleContainerEl.current;

        if (editorContainerEl.current != null && articleEl != null && tooltip?.$bold_button != null) {
          const quill = initQuillEditor(tooltip, editorContainerEl.current, props.isTitle);

          // quill.focus();
          tooltip.hideLinkTooltip(quill);
          tooltip.hideFormatTooltip(quill);
          tooltip.hideBlocksTooltip();

          // this.quill.disable();
          quill.setContents(props.content);
          quill.history.clear();
          quill.enable();

          function checkFigureBlots(range) {
            let [embed] = (quill.scroll.descendant(FigureBlot, range.index) as Blot[]) as FigureBlot[];
            let embeds = quill.scroll.descendants(FigureBlot, 0, quill.scroll.length()) as FigureBlot[];
            embeds.forEach((blot) => {
              if (embed !== blot) {
                blot.blur();
              }
            });
            if (embed) {
              embed.focus();
              tooltip?.hideFormatTooltip(quill);
              tooltip?.hideBlocksTooltip();
            }
          }

          quill.on(Quill.events.EDITOR_CHANGE, function (eventType, range) {
            if (eventType !== Quill.events.SELECTION_CHANGE) return;
            if (!quill.isEnabled()) return;
            if (range == null) return;
            checkFigureBlots(range);

            let [block, offset] = quill.scroll.descendant(Block, range.index);
            if (range.length === 0) {
              tooltip.hideFormatTooltip(quill);
              if (
                block != null &&
                !(block instanceof FieldBlot) &&
                !(block instanceof BlockquoteBlot) &&
                !(block instanceof PullquoteBlot) &&
                !(block instanceof CodeBlock) &&
                !(block instanceof ListItem) &&
                block.domNode.textContent === ''
              ) {
                tooltip.showBlocksTooltip(range, isEdit(), quill);
              } else {
                tooltip.hideBlocksTooltip();
              }
            } else {
              if (block != null && !(block instanceof TitleBlot)) {
                tooltip.showFormatTooltip(range, quill, isEdit());
                toolbarUpdate(range, quill, tooltip);
              } else {
                tooltip.hideFormatTooltip(quill);
              }
              tooltip.hideBlocksTooltip();
            }
            // toolbarUpdate(range);
            let formats = quill.getFormat(range);
            articleEl.classList.toggle('title_focused', !!(formats['blockTitle'] || formats['blockDescription']));
            checkOncePlaceholder();
          });

          quill.on(Quill.events.TEXT_CHANGE, (changes) => props.textChangeCb(changes, quill.getContents()));
        }
      })
    );

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [editorContainerEl.current, tooltipContainerEl.current, props.content, props.isTitle]);

  return (
    <>
      <style>{require('./style.scss')}</style>
      <div class="tl_page_wrap">
        <div class="tl_page">
          <section ref={articleContainerEl.ref()} class="tl_article tl_article_edit">
            <article ref={editorContainerEl.ref()} id="_tl_editor" class="tl_article_content"></article>
          </section>
        </div>
      </div>
      <EditorTooltipElement ref={tooltipContainerEl.ref()}></EditorTooltipElement>
    </>
  );
});

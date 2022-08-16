import { render } from 'lit-html2';
import { ref, createRef, Ref } from 'lit-html2/directives/ref.js';
import { EG, p } from '@web-companions/gfc';

import 'vanilla-colorful/hex-color-picker.js';

import { iconLoadNode } from './iconLoad.node';
import { iconEraseNode } from './iconErase.node';
import { iconSaveNode } from './iconSave.node';
import { iconClearNode } from './iconClear.node';
import { clearMargin, getMarginById, saveMarginById } from 'new-components/margin/margin.service';
import { Margin } from 'models/margin.model';
import { MarginElementMode } from 'new-components/margin/margin.element';
import { SketchPad } from './SketchPad';
import { iconPencilNote } from './iconPencil.note';
import { iconPaletteNote } from './iconPalette.note';
import { iconToolsNote } from './iconTools.note';
import { iconSettingsNote } from './iconSettings.note';
import { iconArrowBackUpNote } from './iconArrowBackUp.note';
import { css } from '@web-companions/h';

const IconLoadNode = iconLoadNode();
const IconSaveNode = iconSaveNode();
const IconEraseNode = iconEraseNode();
const IconClearNode = iconClearNode();
const IconPencilNote = iconPencilNote();
const IconPaletteNote = iconPaletteNote();
const IconToolsNote = iconToolsNote();
const IconSettingsNote = iconSettingsNote();
const IconArrowBackUpNote = iconArrowBackUpNote();

export const sketchPadPanElement = EG({
  props: {
    data: p.req<Margin>(),
    mode: p.opt<MarginElementMode>(), // need only to rerender this element
  },
})(function* (props) {
  const frameRef: Ref<HTMLDivElement> = createRef();
  const canvasRef: Ref<HTMLCanvasElement> = createRef();

  let ctx: CanvasRenderingContext2D | null;

  let margin: Margin = props.data;
  let mode = props.mode;
  let sketchPad: SketchPad | undefined;
  let ratio = Math.max(window.devicePixelRatio || 1, 1);
  let height = margin.options?.height ?? 0;
  let width = margin.options?.width ?? 0;

  let globalAlpha = 1;
  let penSize = 1.2;
  let penColor = '#878787';
  let backgroundColor = '#f0eade';

  // Adjust canvas coordinate space taking into account pixel ratio,
  // to make it look crisp on mobile devices.
  // This also causes canvas to be cleared.
  const adjustCanvas = () => {
    const frame = frameRef.value;
    const canvas = canvasRef.value;

    if (frame == null || canvas == null) {
      throw new Error('Can not find a canvas element!');
    }

    ctx = canvas.getContext('2d');

    if (ctx == null) {
      throw new Error('Can not find a canvas context!');
    }

    const sourceWidth = width;
    const sourceHeight = height;

    height = Math.max(frame.getBoundingClientRect().height, window.innerHeight, sourceHeight);
    width = Math.max(frame.getBoundingClientRect().width, sourceWidth);

    canvas.height = height;
    canvas.width = width;
    canvas.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    frame.style.height = `${height}px`;
    this.style.height = `${height}px`;

    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    ratio = Math.max(window.devicePixelRatio || 1, 1);

    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    ctx.scale(ratio, ratio);

    if (sketchPad == null) {
      sketchPad = new SketchPad(canvas);
      sketchPad.penColor = penColor;
      sketchPad.penSize = penSize;
    }
  };

  const updateCanvasContent = async (isRestore = true) => {
    if (sketchPad != null) {
      sketchPad.setMode('pencil');

      if (margin?.imgBase64 != null && margin?.options != null) {
        const origOpt = margin.options;
        const dataURL = `${origOpt.type},${margin.imgBase64}`;

        sketchPad.context.globalAlpha = globalAlpha;

        await sketchPad.fromDataURL(dataURL, {
          height: origOpt.height,
          width: origOpt.width,
          ratio,
        });
      } else {
        sketchPad.clear();
      }

      sketchPad.context.globalAlpha = 1;

      if (isRestore) {
        sketchPad.restore();
      } else {
        sketchPad.reset();
      }
    }
  };

  const save = () => {
    if (sketchPad == null || sketchPad.isEmpty) {
      return alert('Please draw something.');
    }
    if (margin?.id != null) {
      saveMarginById(margin.id, sketchPad.toDataURL(), {
        height,
        width,
        ratio,
      });
    }
  };

  const load = () => {
    if (margin.id != null) {
      getMarginById(margin.id);
    }
    if (sketchPad != null) {
      sketchPad.clear();
    }
    if (ctx != null) {
      ctx.font = '26px sans-serif';
      ctx.fillStyle = '#CCCCCC';
      ctx.fillText('loading...', 50, 100);
    }
  };

  function erase() {
    if (sketchPad != null) {
      sketchPad.setMode('erase');
    }
  }

  const clear = () => {
    clearMargin(margin);
  };

  function setAlpha(event: InputEvent) {
    if (event?.currentTarget != null && sketchPad != null) {
      const currentTarget = event.currentTarget as HTMLInputElement;

      globalAlpha = Number(currentTarget.value);
    }
  }

  function undo() {
    if (sketchPad != null) {
      sketchPad.undoDraw();
    }
  }

  const setColor = (event: CustomEvent) => {
    if (sketchPad != null) {
      sketchPad.penColor = event.detail.value;
      sketchPad.setMode('pencil');

      this.next();
    }
  };

  const setWight = (event: InputEvent) => {
    if (sketchPad != null && event?.currentTarget != null) {
      const currentTarget = event.currentTarget as HTMLInputElement;

      penSize = Number(currentTarget.value);
      sketchPad.penSize = penSize;
    }
  };

  const setPencil = () => {
    if (sketchPad != null) {
      sketchPad.setMode('pencil');
    }
  };

  window.onresize = () => {
    adjustCanvas();
    updateCanvasContent();
  };

  // the first loading
  requestAnimationFrame(() => {
    adjustCanvas();
    updateCanvasContent();
  });

  try {
    while (true) {
      if (!Object.is(margin, props.data)) {
        margin = props.data;
        updateCanvasContent(false);
      }

      if (mode !== props.mode) {
        // for fullscreen will work window.onresize
        if (props.mode != 'full' && mode != 'full') {
          adjustCanvas();
          updateCanvasContent();
        }

        mode = props.mode;
      }

      props = yield render(
        <>
          <div
            ref={ref(frameRef)}
            class="sketch-pad_frame"
            style={css`
              background-color: ${mode === 'full' ? backgroundColor : backgroundColor + '30'};
            `}
          >
            <canvas ref={ref(canvasRef)} class="signature-pad"></canvas>
          </div>

          <div
            style={css`
              display: flex;
              flex-direction: column;
              position: sticky;
              top: 20px;
              width: 60px;
              margin-left: ${mode === 'expand' ? '-70px' : 0};
            `}
          >
            <div
              class="fab-container fab-container_main"
              style={css`
                margin-top: 1rem;
              `}
            >
              <div class="fab-container fab-container_vertical">
                <button class="fab-button fab-button_empty" onclick={updateCanvasContent}>
                  <div class="sub-button">
                    <input type="range" value={globalAlpha} min="0" max="1" step="0.01" oninput={setAlpha} />
                    <div class="sub-button__back">
                      <div
                        style={css`
                          width: 100%;
                          height: 20px;
                          background: linear-gradient(to right, rgba(255, 128, 0, 0), ${penColor});
                        `}
                      ></div>
                    </div>
                  </div>
                </button>
                <button class="fab-button" onclick={clear}>
                  <IconClearNode></IconClearNode>
                </button>
                <button class="fab-button" onclick={load}>
                  <IconLoadNode></IconLoadNode>
                </button>
                <button class="fab-button fab-button_lg">
                  <IconSettingsNote></IconSettingsNote>
                </button>
              </div>

              <div class="fab-container fab-container_vertical">
                <button
                  class="fab-button fab-button_empty"
                  style={css`
                    bottom: -7px;
                    width: 20px;
                    height: 20px;
                  `}
                >
                  <div class="sub-button">
                    <input type="range" value={penSize} min="0.5" max="10" step="0.5" oninput={setWight} />
                  </div>
                </button>
                <button class="fab-button" onclick={erase}>
                  <IconEraseNode></IconEraseNode>
                </button>
                <button class="fab-button" onclick={setPencil}>
                  <IconPencilNote></IconPencilNote>
                </button>
                <button class="fab-button fab-button_lg">
                  <IconToolsNote></IconToolsNote>
                </button>
              </div>

              <div class="fab-container fab-container_vertical">
                <hex-color-picker
                  class="fab-button_static"
                  id={`${margin.id}_colorPicker`}
                  name="colorPicker"
                  style={css`
                    cursor: pointer;
                  `}
                  value={penColor}
                  oncolor-changed={setColor}
                />
              </div>

              <div class="fab-container fab-container_vertical">
                <button class="fab-button fab-button_lg fab-button_static">
                  <IconPaletteNote></IconPaletteNote>
                </button>
              </div>
            </div>
            <button
              class="fab-button"
              onclick={save}
              style={css`
                margin-top: 0.7rem;
              `}
            >
              <IconSaveNode></IconSaveNode>
            </button>

            <button
              class="fab-button"
              onclick={undo}
              style={css`
                margin-top: 0.7rem;
              `}
            >
              <IconArrowBackUpNote></IconArrowBackUpNote>
            </button>
          </div>
        </>,
        this // TODO: this.attachShadow({ mode: 'open' })
      );
    }
  } finally {
    sketchPad?.destroy();
  }
});

import { render } from 'lit-html2';
import { ref, createRef, Ref } from 'lit-html2/directives/ref.js';
import { EG, p } from '@web-companions/gfc';

import 'vanilla-colorful/hex-color-picker.js';

import { css } from 'utils/common';
import { iconLoadNode } from './iconLoad.node';
import { iconEraseNode } from './iconErase.node';
import { iconSaveNode } from './iconSave.node';
import { iconClearNode } from './iconClear.node';
import { getMarginById, saveMarginById } from 'new-components/margin/margin.service';
import { Margin } from 'models/margin.model';
import { MarginElementMode } from 'new-components/margin/margin.element';
import { SketchPad } from './SketchPad';
import { iconPencilNote } from './iconPencil.note';
import { iconPaletteNote } from './iconPalette.note';
import { iconToolsNote } from './iconTools.note';
import { iconSettingsNote } from './iconSettings.note';

const IconLoadNode = iconLoadNode();
const IconSaveNode = iconSaveNode();
const IconEraseNode = iconEraseNode();
const IconClearNode = iconClearNode();
const IconPencilNote = iconPencilNote();
const IconPaletteNote = iconPaletteNote();
const IconToolsNote = iconToolsNote();
const IconSettingsNote = iconSettingsNote();

export const sketchPadPanElement = EG({
  props: {
    data: p.req<Margin>(),
    mode: p.opt<MarginElementMode>(), // need only to rerender this element
  },
})(function* (this: HTMLElement & { next(): Promise<void> }, props) {

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
  let color = '#000000';

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
      sketchPad.penSize = penSize;
    }
  };

  const updateCanvasContent = async (isRestore = true) => {
    if (sketchPad != null) {
      sketchPad.context.globalCompositeOperation = 'source-over'; // default value

      if (margin?.imgBase64 != null && margin?.options != null) {
        const origOpt = margin.options;
        const dataURL = `${origOpt.type},${margin.imgBase64}`;

        sketchPad.context.globalAlpha = globalAlpha;

        await sketchPad.fromDataURL(dataURL, {
          height: origOpt.height,
          width: origOpt.width,
          ratio,
        });
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
    if (ctx != null) {
      ctx.globalCompositeOperation = 'destination-out';
    }
  }

  function clear() {
    if (sketchPad != null) {
      sketchPad.clear();
    }
  }

  function setAlpha(event: InputEvent) {
    if (event?.currentTarget != null && sketchPad != null) {
      const currentTarget = event.currentTarget as HTMLInputElement;

      globalAlpha = Number(currentTarget.value);
    }
  }

  const setColor = (event: CustomEvent) => {
    if (sketchPad != null) {
      sketchPad.penColor = event.detail.value;

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
    if (ctx != null) {
      ctx.globalCompositeOperation = 'source-over';
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
            background-color: ${mode === 'full' ? 'white' : 'transparent'};
          `}
        >
          <canvas ref={ref(canvasRef)} class="signature-pad"></canvas>
        </div>

        <div class="fab-container fab-container_main">
          <div class="fab-container fab-container_vertical">
            <hex-color-picker
              id={`${margin.id}_colorPicker`}
              name="colorPicker"
              style={css`
                cursor: pointer;
              `}
              value={color}
              oncolor-changed={setColor}
            />
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
            <button class="fab-button fab-button_empty" onclick={updateCanvasContent}>
              <div class="sub-button">
                <input type="range" value={globalAlpha} min="0" max="1" step="0.01" oninput={setAlpha} />
                <div class="sub-button__back">
                  <div
                    style={css`
                      width: 100%;
                      height: 20px;
                      background: linear-gradient(to right, rgba(255, 128, 0, 0), ${color});
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
            <button class="fab-button" onclick={save}>
              <IconSaveNode></IconSaveNode>
            </button>
            <button class="fab-button fab-button_lg">
              <IconSettingsNote></IconSettingsNote>
            </button>
          </div>

          <button class="fab-button fab-button_lg">
            <IconPaletteNote></IconPaletteNote>
          </button>
        </div>
      </>,
      this // TODO: this.attachShadow({ mode: 'open' })
    );
  }
});

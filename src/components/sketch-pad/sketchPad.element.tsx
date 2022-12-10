import { render } from 'lit-html2';
import { ref, createRef, Ref } from 'lit-html2/directives/ref';
import SignaturePad from 'signature_pad' 

import { EG, p } from '@web-companions/gfc';
import { iconLoadNode } from './iconLoad.node';
import { iconEraseNode } from './iconErase.node';
import { iconSaveNode } from './iconSave.node';
import { iconClearNode } from './iconClear.node';
import { iconWightNode } from './iconWight.node';
import { getMarginById, saveMarginById } from 'components/margin/margin.service';
import { Margin } from 'models/margin.model';
import { MarginElementMode } from 'components/margin/margin.element';
import { css } from '@web-companions/h';

const IconLoadNode = iconLoadNode();
const IconSaveNode = iconSaveNode();
const IconEraseNode = iconEraseNode();
const IconClearNode = iconClearNode();
const IconWightNode = iconWightNode();

export const sketchPadElement = EG({
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
  let signaturePad: SignaturePad | undefined;
  let ratio = Math.max(window.devicePixelRatio || 1, 1);
  let height = margin.options?.height ?? 0;
  let width = margin.options?.width ?? 0;

  let globalAlpha = 1;
  let color = '#000000';

  // Adjust canvas coordinate space taking into account pixel ratio,
  // to make it look crisp on mobile devices.
  // This also causes canvas to be cleared.
  const resizeCanvas = () => {
    const frame = frameRef.value;
    const canvas = canvasRef.value;

    if (frame == null || canvas == null) {
      throw new Error('Can not find a canvas element!');
    }

    ctx = canvas.getContext('2d');

    const sourceWidth = width;
    const sourceHeight = height;
    let sourceDataURL: string | null = null;

    if (signaturePad == null) {
      signaturePad = new SignaturePad(canvas, {
        penColor: color,
        minDistance: 1,
        // TODO: check below code
        // onBegin: () => {
        //   if (ctx != null) {
        //     ctx.globalAlpha = 1;
        //   }
        // },
      });
    } else {
      sourceDataURL = signaturePad.toDataURL();
      signaturePad.clear();
    }

    height = Math.max(frame.getBoundingClientRect().height, window.innerHeight, sourceHeight);
    width = Math.max(frame.getBoundingClientRect().width, sourceWidth);

    canvas.height = height;
    canvas.width = width;
    canvas.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    frame.style.height = `${height}px`;
    this.style.height = `${height}px`;

    if (canvas != null && ctx != null) {
      // When zoomed out to less than 100%, for some very strange reason,
      // some browsers report devicePixelRatio as less than 1
      // and only part of the canvas is cleared then.
      ratio = Math.max(window.devicePixelRatio || 1, 1);

      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      ctx.scale(ratio, ratio);
    }

    if (signaturePad != null && sourceDataURL != null) {
      signaturePad.fromDataURL(sourceDataURL, {
        height: sourceHeight,
        width: sourceWidth,
        ratio,
      });
    }
  };

  const draw = () => {
    if (ctx != null) {
      ctx.globalCompositeOperation = 'source-over';
    }
  };

  const save = () => {
    if (signaturePad == null || signaturePad.isEmpty()) {
      return alert('Please provide a signature first.');
    }

    if (margin?.id != null) {
      saveMarginById(margin.id, signaturePad.toDataURL(), {
        height,
        width,
        ratio,
      });
    }
  };

  const updateCanvasContent = () => {
    if (ctx != null && signaturePad != null && margin?.imgBase64 != null && margin?.options != null) {
      console.log(ctx.globalCompositeOperation);
      ctx.globalAlpha = globalAlpha;
      ctx.globalCompositeOperation = 'source-over'; // default value

      const data = signaturePad.toData();
      signaturePad.clear();

      const origOpt = margin.options;
      const dataURL = `${origOpt.type},${margin.imgBase64}`;

      signaturePad.fromDataURL(dataURL, {
        height: origOpt.height,
        width: origOpt.width,
        ratio,
      });

      signaturePad.fromData(data);
    }
  };

  const load = () => {
    if (margin.id != null) {
      getMarginById(margin.id);
    }

    if (signaturePad != null) {
      signaturePad.clear();
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
    if (signaturePad != null) {
      signaturePad.clear();
    }
  }

  function setWight(minWidth: number, maxWidth: number) {
    return () => {
      if (signaturePad != null) {
        signaturePad.minWidth = minWidth;
        signaturePad.maxWidth = maxWidth;

        console.log(minWidth, maxWidth);
      }
    };
  }

  const setColor = (event: InputEvent) => {
    if (event?.currentTarget != null && signaturePad != null) {
      const currentTarget = event.currentTarget as HTMLInputElement;
      color = currentTarget.value;

      signaturePad.penColor = color;
      this.next();
    }
  };

  const setAlpha = (event: InputEvent) => {
    if (event?.currentTarget != null) {
      const currentTarget = event.currentTarget as HTMLInputElement;

      globalAlpha = Number(currentTarget.value);
    }
  };

  // TODO: clear after destroy
  window.onresize = resizeCanvas;

  // the first loading
  requestAnimationFrame(() => {
    resizeCanvas();
    updateCanvasContent();
  });

  while (true) {
    if (margin !== props.data) {
      margin = props.data;
      updateCanvasContent();
    }

    if (mode !== props.mode) {
      resizeCanvas();
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
          <div class="fab-container">
            <button class="fab-button">
              <input
                type="color"
                id={`${margin.id}_colorPicker`}
                name="colorPicker"
                style={css`
                  cursor: pointer;
                `}
                value={color}
                oninput={setColor}
              />
            </button>
          </div>
          <div class="fab-container fab-container_vertical">
            <button class="fab-button" onclick={setWight(6, 8)}>
              <IconWightNode strokeWidth="6"></IconWightNode>
            </button>
            <button class="fab-button" onclick={setWight(2.5, 4)}>
              <IconWightNode strokeWidth="4"></IconWightNode>
            </button>
            <button class="fab-button" onclick={setWight(0.3, 1)}>
              <IconWightNode strokeWidth="1"></IconWightNode>
            </button>
            <button class="fab-button fab-button_lg" onclick={setWight(0.5, 2.5)}>
              <IconWightNode strokeWidth="2"></IconWightNode>
            </button>
          </div>
          <div class="fab-container fab-container_vertical">
            <button class="fab-button" onclick={clear}>
              <IconClearNode></IconClearNode>
            </button>
            <button class="fab-button fab-button_lg" onclick={erase}>
              <IconEraseNode></IconEraseNode>
            </button>
          </div>
          <div class="fab-container fab-container_vertical">
            <button class="fab-button" onclick={updateCanvasContent}>
              <div class="alpha-setter">
                <input type="range" value={globalAlpha} min="0" max="1" step="0.01" oninput={setAlpha} />
                <div class="alpha-setter__back">
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
            <button class="fab-button" onclick={load}>
              <IconLoadNode></IconLoadNode>
            </button>
            <button class="fab-button fab-button_lg" onclick={save}>
              <IconSaveNode></IconSaveNode>
            </button>
          </div>
          <button class="fab-button fab-button_lg" onclick={draw}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-pencil"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
            </svg>
          </button>
        </div>
      </>,
      this // TODO: this.attachShadow({ mode: 'open' })
    );
  }
});

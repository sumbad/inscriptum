import { render } from 'lit-html2';
import { ref, createRef, Ref } from 'lit-html2/directives/ref';
import SignaturePad from 'signature_pad';

import { EG, p } from '@web-companions/gfc';
import { css } from 'utils/common';
import { iconLoadNode } from './iconLoad.node';
import { iconEraseNode } from './iconErase.node';
import { iconSaveNode } from './iconSave.node';
import { iconClearNode } from './iconClear.node';
import { iconWightNode } from './iconWight.node';
import { saveMarginById } from 'services/margin.service';
import { Margin, MarginOptions } from 'models/margin.model';

const IconLoadNode = iconLoadNode();
const IconSaveNode = iconSaveNode();
const IconEraseNode = iconEraseNode();
const IconClearNode = iconClearNode();
const IconWightNode = iconWightNode();

export const sketchPadElement = EG({
  props: {
    data: p.req<Margin>(),
  },
})(function* (this: HTMLElement & { next(): Promise<void> }, props) {
  const canvasRef: Ref<HTMLCanvasElement> = createRef();

  let data: Margin = props.data;
  let signaturePad: SignaturePad;
  let options: Omit<MarginOptions, 'type'>;

  const draw = () => {
    const canvasWrapper = this;
    const canvas = canvasRef.value;

    if (canvasWrapper == null || canvas == null) {
      console.warn('Can not find a canvas element!');
      return;
    }

    const ctx = canvas.getContext('2d');

    if (signaturePad == null) {
      // When zoomed out to less than 100%, for some very strange reason,
      // some browsers report devicePixelRatio as less than 1
      // and only part of the canvas is cleared then.
      const ratio = Math.max(window.devicePixelRatio || 1, 1);

      let height = canvasWrapper.getBoundingClientRect().height;
      height = height > window.innerHeight ? height : window.innerHeight;
      const width = canvasWrapper.getBoundingClientRect().width;

      canvas.height = height;
      canvas.width = width;
      canvas.style.height = `${height}px`;
      canvas.style.width = `${width}px`;

      this.style.height = `${height}px`;

      options = {
        height,
        width,
        ratio,
      };

      signaturePad = new SignaturePad(canvas, {
        backgroundColor: 'rgb(255, 255, 255)', // necessary for saving image as JPEG; can be removed is only saving as PNG or SVG
        // throttle: 1,
        minDistance: 1,
      });

      // Adjust canvas coordinate space taking into account pixel ratio,
      // to make it look crisp on mobile devices.
      // This also causes canvas to be cleared.
      function resizeCanvas() {
        if (canvas != null) {
          // When zoomed out to less than 100%, for some very strange reason,
          // some browsers report devicePixelRatio as less than 1
          // and only part of the canvas is cleared then.
          var ratio = Math.max(window.devicePixelRatio || 1, 1);
          canvas.width = canvas.offsetWidth * ratio;
          canvas.height = canvas.offsetHeight * ratio;
          canvas.getContext('2d')?.scale(ratio, ratio);
        }
      }

      window.onresize = resizeCanvas;
      resizeCanvas();

      this.next();
    } else if (ctx != null) {
      console.log(ctx.globalCompositeOperation);
      ctx.globalCompositeOperation = 'source-over'; // default value
    }
  };

  const save = () => {
    if (signaturePad == null || signaturePad.isEmpty()) {
      return alert('Please provide a signature first.');
    }

    if (data?.id != null && options != null) {
      saveMarginById(data.id, signaturePad.toDataURL(), options);
    }
  };

  const load = () => {
    if (signaturePad != null && options != null && data?.imgBase64 != null && data?.options != null) {
      const origOpt = data.options;
      const dataURL = `${origOpt.type},${data.imgBase64}`;

      if (options.width < origOpt.width) {
        signaturePad.fromDataURL(dataURL, {
          height: (origOpt.height * options.width) / origOpt.width,
          width: options.width,
          ratio: options.ratio,
        });
      } else {
        signaturePad.fromDataURL(dataURL, {
          height: origOpt.height,
          width: origOpt.width,
          ratio: options.ratio,
        });
      }
    }
  };

  function erase() {
    const canvasWrapper = this;
    const canvas = canvasRef.value;

    if (canvasWrapper == null || canvas == null) {
      console.warn('Can not find a canvas element!');
      return;
    }

    const ctx = canvas.getContext('2d');

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

  function setColor(event: InputEvent) {
    if (event?.currentTarget != null && signaturePad != null) {
      const currentTarget = event.currentTarget as HTMLInputElement;
      console.log(currentTarget.value);
      signaturePad.penColor = currentTarget.value;
    }
  }

  // the first load
  load();

  while (true) {
    if (data !== props.data) {
      data = props.data;
      load();
    }

    props = yield render(
      <>
        <canvas ref={ref(canvasRef)} id="signature-pad" class="signature-pad"></canvas>
        <div
          class="fab-container fab-container_main"
        >
          <button class="fab-button">
            <input
              type="color"
              id={`${data.id}_colorPicker`}
              name="colorPicker"
              style={css`
                cursor: pointer;
              `}
              onchange={setColor}
            />
          </button>
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

import SignaturePad from 'signature_pad';
import { EG, useCallback, useEffect, useReducer, useState } from '@web-companions/fc';
import { MarginAction } from './margin.action';
import { MarginOptions } from 'models/margin.model';
import { css } from 'utils/common';
import { getMarginById, saveMarginById } from '../../services/margin.service';
import { iconEraseNode } from './iconErase.node';
import { iconLoadNode } from './iconLoad.node';
import { iconSaveNode } from './iconSave.node';
import { initialState, margin$, MarginState, reducer } from './margin.state';
import { render } from 'lit-html';
import { useLitRef } from 'hooks/useLitRef';
import { iconClearNode } from './iconClear.node';
import { iconWightNode } from './iconWight.node';

const IconLoadNode = iconLoadNode();
const IconSaveNode = iconSaveNode();
const IconEraseNode = iconEraseNode();
const IconClearNode = iconClearNode();
const IconWightNode = iconWightNode();

export const marginElement = EG({
  props: {
    marginId: String,
    pageId: String,
  },
  render,
  shadow: {
    mode: 'open',
  },
})(function (this: HTMLElement, props) {
  // TODO: fix types for useReducer
  const [state, dispatch]: [MarginState, (action: MarginAction) => void] = useReducer(reducer, initialState) as any;

  const canvasEl = useLitRef<HTMLCanvasElement>();
  const [options, setOptions] = useState<Omit<MarginOptions, 'type'> | null>();
  const [signaturePad, setSignaturePad] = useState<SignaturePad | null>();

  useEffect(() => {
    const sub = margin$(props.marginId).subscribe((action) => dispatch(action as any));

    if (props.marginId != null) {
      getMarginById(props.marginId);
    }

    return () => {
      sub.unsubscribe();
    };
  }, [props.marginId]);

  useEffect(() => {
    load();
  }, [signaturePad]);

  const draw = useCallback(() => {
    const canvasWrapper = this;
    const canvas = canvasEl.current;

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

      setOptions({
        height,
        width,
        ratio,
      });

      const signaturePad = new SignaturePad(canvas, {
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

      setSignaturePad(signaturePad);
    } else if (ctx != null) {
      console.log(ctx.globalCompositeOperation);
      ctx.globalCompositeOperation = 'source-over'; // default value
    }
  }, [signaturePad, canvasEl]);

  const save = useCallback(() => {
    if (signaturePad == null || signaturePad.isEmpty()) {
      return alert('Please provide a signature first.');
    }

    if (state.data?.id != null && options != null) {
      saveMarginById(state.data.id, signaturePad.toDataURL(), options);
    }
  }, [signaturePad]);

  const load = useCallback(() => {
    if (signaturePad != null && options != null && state.data?.imgBase64 != null && state.data?.options != null) {
      const origOpt = state.data.options;
      const dataURL = `${origOpt.type},${state.data.imgBase64}`;

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
  }, [signaturePad]);

  const erase = useCallback(() => {
    const canvasWrapper = this;
    const canvas = canvasEl.current;

    if (canvasWrapper == null || canvas == null) {
      console.warn('Can not find a canvas element!');
      return;
    }

    const ctx = canvas.getContext('2d');

    if (ctx != null) {
      ctx.globalCompositeOperation = 'destination-out';
    }
  }, [signaturePad]);

  const clear = useCallback(() => {
    if (signaturePad != null) {
      signaturePad.clear();
    }
  }, [signaturePad]);

  const wight = useCallback(
    (minWidth: number, maxWidth: number) => () => {
      if (signaturePad != null) {
        signaturePad.minWidth = minWidth;
        signaturePad.maxWidth = maxWidth;

        console.log(minWidth, maxWidth);
      }
    },
    [signaturePad]
  );

  const setColor = useCallback(
    (event: InputEvent) => {
      if (event?.currentTarget != null && signaturePad != null) {
        const currentTarget = event.currentTarget as HTMLInputElement;
        console.log(currentTarget.value);
        signaturePad.penColor = currentTarget.value;
      }
    },
    [signaturePad]
  );

  return (
    <>
      <style>{require('./margin.scss')}</style>

      <canvas ref={canvasEl.ref()} id="signature-pad" class="signature-pad"></canvas>

      <div
        class="fab-container fab-container_horizontal"
        style={css`
          display: inherit;
          bottom: 0;
          margin: 1em;
          right: 0;
          position: absolute;
        `}
      >
        <button class="fab-button">
          <input
            type="color"
            id={`${props.pageId}_colorPicker`}
            name="colorPicker"
            style={css`
              cursor: pointer;
            `}
            onchange={setColor}
          />
        </button>
        <div class="fab-container fab-container_vertical">
          <button class="fab-button" onclick={wight(6, 8)}>
            <IconWightNode strokeWidth="6"></IconWightNode>
          </button>
          <button class="fab-button" onclick={wight(2.5, 4)}>
            <IconWightNode strokeWidth="4"></IconWightNode>
          </button>
          <button class="fab-button" onclick={wight(0.3, 1)}>
            <IconWightNode strokeWidth="1"></IconWightNode>
          </button>
          <button class="fab-button fab-button_lg" onclick={wight(0.5, 2.5)}>
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
    </>
  );
});

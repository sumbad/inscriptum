import { EG, useCallback, useEffect, useReducer, useState } from '@web-companions/fc';
import { useLitRef } from 'hooks/useLitRef';
import { render } from 'lit-html';
import { MarginOptions } from 'models/margin.model';
import SignaturePad from 'signature_pad';
import { getMarginById, saveMarginById } from '../../services/margin.service';
import { iconLoadNode } from './iconLoad.node';
import { MarginAction } from './margin.action';
import { initialState, margin$, MarginState, reducer } from './margin.state';
import { iconSaveNode } from './iconSave.node';

const LoadIconNode = iconLoadNode();
const IconSaveNode = iconSaveNode();

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

  const startDraw = useCallback(() => {
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    const ratio = Math.max(window.devicePixelRatio || 1, 1);

    const canvasWrapper = this; //canvasWrapperEl.current;
    const canvas = canvasEl.current;

    if (canvasWrapper != null && canvas != null) {
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

        // minWidth: 0.1,
        // maxWidth: 1,
      });

      setSignaturePad(signaturePad);

      // Adjust canvas coordinate space taking into account pixel ratio,
      // to make it look crisp on mobile devices.
      // This also causes canvas to be cleared.
      function resizeCanvas() {
        if (canvas != null) {
          canvas.width = canvas.offsetWidth * ratio;
          canvas.height = canvas.offsetHeight * ratio;
          canvas.getContext('2d')?.scale(ratio, ratio);
        }
      }

      window.onresize = resizeCanvas;
      resizeCanvas();
    }
  }, []);

  const save = useCallback(() => {
    if (signaturePad != null && state.data?.id != null && options != null) {
      saveMarginById(state.data.id, signaturePad.toDataURL(), options);
    }
  });

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
  });

  return (
    <>
      <style>{require('./margin.scss')}</style>
      <canvas ref={canvasEl.ref()} id="signature-pad" class="signature-pad"></canvas>
      <div class="fab-container">
        <button class="fab-buttons" tooltip="save" onclick={save}>
          <IconSaveNode></IconSaveNode>
        </button>
        <button class="fab-buttons" tooltip="load" onclick={load}>
          <LoadIconNode></LoadIconNode>
        </button>
        <button class="fab-buttons" onclick={startDraw}>
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
      {/* <button id="save-png">Save as PNG</button>
          <button id="save-jpeg">Save as JPEG</button>
          <button id="save-svg">Save as SVG</button>
          <button id="draw">Draw</button>
          <button id="erase">Erase</button>
          <button id="clear">Clear</button> */}
    </>
  );
});

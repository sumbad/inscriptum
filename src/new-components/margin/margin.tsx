import { EG, useCallback, useEffect, useRef } from '@web-companions/fc';
import { useLitRef } from 'hooks/useLitRef';
import { useSubjectService } from 'hooks/useSubjectService';
import { render } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { DraftSubjectService } from 'services/DraftSubject.service';
import SignaturePad from 'signature_pad';

const css = String.raw;

export const marginElement = EG({
  render,
  shadow: {
    mode: 'open',
  },
})(function (this: HTMLElement, props) {
  const canvasEl = useLitRef<HTMLCanvasElement>();
  // const canvasWrapperEl = useLitRef<HTMLDivElement>();

  const startDraw = useCallback(() => {
    //   requestAnimationFrame(() => {
    const canvasWrapper = this; //canvasWrapperEl.current;
    const canvas = canvasEl.current;
    if (canvasWrapper != null && canvas != null) {
      let height = canvasWrapper.getBoundingClientRect().height;
      height = height > window.innerHeight ? height : window.innerHeight;
      const width = canvasWrapper.getBoundingClientRect().width;

      console.log(1111, height, width);
      console.log(2222, window.innerHeight);

      canvas.height = height;
      canvas.width = width;
      canvas.style.height = `${height}px`;
      canvas.style.width = `${width}px`;

      const signaturePad = new SignaturePad(canvas, {
        backgroundColor: 'rgb(255, 255, 255)', // necessary for saving image as JPEG; can be removed is only saving as PNG or SVG
        // throttle: 1,
        minDistance: 1,

        // minWidth: 0.1,
        // maxWidth: 1,
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
    }
    //   });
  }, []);

  return (
    <>
      <style>{require('./margin.scss')}</style>
      {/* <div
        class="wrapper"
        style={css`
          position: relative;
          width: 100%;
          user-select: none;
          display: flex;
          flex-direction: row;
          border-left: solid 1px hsl(240deg 1% 83%);
        `}
        ref={canvasWrapperEl.ref()}
      > */}
      <canvas
        ref={canvasEl.ref()}
        // style={css`
        //   position: absolute;
        //   left: 0;
        //   top: 0;
        //   width: 400px;
        //   height: 200px;
        //   background-color: white;
        // `}
        id="signature-pad"
        class="signature-pad"
      ></canvas>
      <div class="fab-container">
        {/* <button class="fab-buttons" tooltip="change color">
        +
      </button> */}
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
      {/* </div> */}
    </>
  );
});

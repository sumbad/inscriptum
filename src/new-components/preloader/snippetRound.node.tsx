import { NG } from '@web-companions/gfc';
import { renderNode } from 'utils/nodeRender';
import { ref, createRef, Ref } from 'lit-html2/directives/ref.js';
import { svg } from 'lit-html2';
import { uuidv4 } from 'utils/common';
import { setStyle } from '@web-companions/h';

export const snippetRoundNode = NG(function* () {
  const elRef: Ref<HTMLDivElement> = createRef();
  const uuid = uuidv4();
  const stroke = `url(#${uuid})`;

  requestAnimationFrame(() => {
    setStyle(require('./snippetRound.scss'), elRef.value!);
  });

  while (true) {
    yield renderNode(
      <div ref={ref(elRef)}>
        <div class="um-spinner-round">
          {svg/*html*/ `
            <svg class="circular" viewBox="25 25 50 50">
              <defs>
                <linearGradient x1="100%" y1="10%" x2="35%" y2="100%" id=${uuid}>
                  <stop class="um-spinner-round__linear-gradient-stop" offset="0%"></stop>
                  <stop class="um-spinner-round__linear-gradient-stop" stop-opacity="0.001" offset="100%"></stop>
                </linearGradient>
              </defs>
              <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="1" stroke=${stroke} stroke-miterlimit="10" />
            </svg>
        `}
        </div>
      </div>,
      this
    );
  }
});

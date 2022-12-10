import { NG } from '@web-companions/gfc';
import { svg } from 'lit-html2';
import { renderNode } from 'utils/nodeRender';

export const iconWightNode = NG(function* (props: { strokeWidth?: string } = { strokeWidth: '1' }) {
  while (true) {
    props = yield renderNode(
      svg/*html*/ `
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="icon icon-tabler icon-tabler-ripple" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        stroke-width=${props.strokeWidth} 
        stroke="currentColor" 
        fill="none" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 12c3 -2 6 -2 9 0s6 2 9 0"></path>
      </svg>
    `,
      this
    );
  }
});

import { NG } from '@web-companions/fc';
import { svg } from 'lit-html';
import { nodeRender } from 'utils/directives';

export const iconNewMarginNode = NG({ render: nodeRender })(() => {
  return svg/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-writing" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z"></path>
      <path d="M16 7h4"></path>
      <path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3"></path>
    </svg>
  `;
});

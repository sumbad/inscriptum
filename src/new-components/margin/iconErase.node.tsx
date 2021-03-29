import { NG } from '@web-companions/fc';
import { svg } from 'lit-html';
import { nodeRender } from 'utils/directives';

export const iconEraseNode = NG({ render: nodeRender })(() => {
  return svg/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eraser" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9"></path>
      <line x1="18" y1="12.3" x2="11.7" y2="6"></line>
    </svg>
  `;
});

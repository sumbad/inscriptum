import { NG } from '@web-companions/gfc';
import { svg } from 'lit-html2';
import { renderNode } from 'utils/nodeRender';

export const iconLoadNode = NG(function* () {
  while (true) {
    yield renderNode(
      svg/*html*/ `
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
        <line x1="12" y1="11" x2="12" y2="17"></line>
        <polyline points="9 14 12 17 15 14"></polyline>
      </svg>
    `,
      this
    );
  }
});

import { NG } from '@web-companions/gfc';
import { svg } from 'lit-html2';
import { renderNode } from 'utils/nodeRender';

export const saveIconNode = NG(function* () {
  while (true) {
    yield renderNode(
      svg/*html*/ `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
          <circle cx="12" cy="14" r="2"></circle>
          <polyline points="14 4 14 8 8 8 8 4"></polyline>
        </svg>
      `,
      this
    );
  }
});

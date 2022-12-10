import { NG } from '@web-companions/gfc';
import { svg } from 'lit-html2';
import { renderNode } from 'utils/nodeRender';

export const iconMenuNode = NG(function* () {
  while (true) {
    yield renderNode(
      svg/*html*/ `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="38" height="38" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>      
      `,
      this
    );
  }
});

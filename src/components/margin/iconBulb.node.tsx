import { NG } from '@web-companions/gfc';
import { svg } from 'lit-html2';
import { renderNode } from 'utils/nodeRender';

// FIXME: default properties not work. E.g. props: { isOn?: boolean } = {isOn: true}
export const iconBulbNode = NG(function* (props: { isOn?: boolean }) {
  const svgBulbOn = svg/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulb" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path>
      <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path>
      <line x1="9.7" y1="17" x2="14.3" y2="17"></line>
    </svg>
`;

  const svgBulbOff = svg/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulb-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path>
      <line x1="9.7" y1="17" x2="14.3" y2="17"></line>
    </svg>
`;

  while (true) {
    let isOn = props.isOn ?? false;

    props = yield renderNode(isOn ? svgBulbOn : svgBulbOff, this);
  }
});

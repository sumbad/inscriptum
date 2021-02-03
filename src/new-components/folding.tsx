import { EG, useCallback, useState } from '@web-companions/fc';
import { TypeConstructor } from '@web-companions/fc/common.model';
import { render, svg } from 'lit-html';
import { Page } from 'models/page.model';

/**
 * TODO: make from this kind components common checkbox component with different views
 */

const css = String.raw;

const renderStyled = (t: [string, any], c: ShadowRoot) => {
  // Only compose styles once
  if (c['adoptedStyleSheets']?.length == 0) {
    const sheet = new CSSStyleSheet();
    sheet['replaceSync'](t[0]);
    c['adoptedStyleSheets'] = [sheet];
  }

  render(t[1], c);
};

export const foldingElement = EG({
  props: {
    page: {} as TypeConstructor<Page>,
    foldPage: {} as TypeConstructor<(pageId: string, flag: boolean) => void>,
  },
  shadow: {
    mode: 'open',
  },
  render: renderStyled,
})(function (props) {
  const [isFolded, setIsFolded] = useState(props.page.isFolded);

  const onClick = useCallback(() => {
    setIsFolded((_) => !_);

    props.foldPage(props.page.id, !isFolded);
  }, [isFolded, setIsFolded, props]);

  return [
    css`
      :host {
        bottom: 0;
        margin-right: 1em;
        right: 0px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      button {
        cursor: pointer;
        border: none;
        background-color: transparent;
      }
      button:focus {
        outline: 0;
      }
      .icon-tabler {
        stroke: #bbb;
        transition: 0.2s;
      }
      .icon-tabler:hover {
        stroke: #333;
      }
    `,
    <button onclick={onClick}>
      {svg/*html*/ `
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-left"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="0.5"
          stroke="#9e9e9e"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points=${isFolded ? '6 9 12 15 18 9' : '15 6 9 12 15 18'} />
        </svg>        
        `}
    </button>,
  ];
});

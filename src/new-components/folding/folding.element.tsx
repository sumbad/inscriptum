import { EG, p } from '@web-companions/gfc';
import { css, setStyle } from '@web-companions/h';
import { render, svg } from 'lit-html2';

const style = css`
  :host {
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    position: absolute;
    right: 100%;
    font-family: var(--font-family);
  }
  button,
  label {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  button:focus {
    outline: 0;
  }
  .icon-tabler,
  label {
    stroke: var(--border-color);
    color: var(--border-color);
    transition: 0.2s;
  }

  :host(:hover) .icon-tabler {
    stroke: var(--dark-grey);
  }
  :host(:hover) label {
    color: var(--dark-grey);
  }
`;

/**
 * TODO: make from this kind components common checkbox component with different views
 */
export const foldingElement = EG({
  props: {
    label: p.req<string>(),
    value: p.req<string>(),
    isFolded: p.req<boolean>(),
    change: p.req<(value: string, isFolded: boolean) => void>(),
  },
})(function* (props) {
  const $ = this.attachShadow({ mode: 'open' });
  let state = props;

  setStyle(style, $);

  const onClick = () => {
    props.change(props.value, !state.isFolded);
  };

  while (true) {
    if (!Object.is(props, state)) {
      state = props;
    }

    props = yield render(
      <>
        <label for={state.value}>{state.label}</label>
        <button id={state.value} onclick={onClick}>
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
            <polyline points=${state.isFolded ? '9 6 15 12 9 18' : '6 9 12 15 18 9'} />
          </svg>        
        `}
        </button>
      </>,
      $
    );
  }
});

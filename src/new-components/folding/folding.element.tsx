import { EG, useCallback, useEffect, useState } from '@web-companions/fc';
import { TypeConstructor } from '@web-companions/fc/common.model';
import { render, svg } from 'lit-html';

/**
 * TODO: make from this kind components common checkbox component with different views
 */

const css = String.raw;

export const foldingElement = EG({
  props: {
    label: String,
    value: String,
    isFolded: Boolean,
    change: {} as TypeConstructor<(value: string, isFolded: boolean) => void>,
  },
  shadow: {
    mode: 'open',
  },
  render,
})(function (this: HTMLElement, props) {
  const [isFolded, setIsFolded] = useState(props.isFolded);

  const onClick = useCallback(() => {
    setIsFolded((_) => !_);

    props.change(props.value, !isFolded);
  }, [isFolded, setIsFolded, props]);

  useEffect(() => {
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

    const c = this?.shadowRoot;
    if (c != null && c['adoptedStyleSheets'] != null) {
      const sheet = new CSSStyleSheet();
      sheet['replaceSync'](style);
      c['adoptedStyleSheets'] = [sheet];
    }
  }, []);
  

  return (
    <>
      <label for={props.value}>{props.label}</label>
      <button id={props.value} onclick={onClick}>
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
            <polyline points=${isFolded ? '9 6 15 12 9 18' : '6 9 12 15 18 9'} />
          </svg>        
        `}
      </button>
    </>
  );
});

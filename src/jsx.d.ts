
interface HTMLGlobalAttributes {
  children?: any;
  class?: string;
  style?: string;
  [x: string]: string | number | boolean | object | void | undefined; 
}

type HTMLElementTagNameMapJSX = {
  [P in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[P]> | HTMLGlobalAttributes
}

declare namespace JSX {
  interface IntrinsicElements extends HTMLElementTagNameMapJSX {
    [elemName: string]: Partial<HTMLElement> | HTMLGlobalAttributes;
  }
}

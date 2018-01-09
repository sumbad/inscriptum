import * as hyperHTML from 'hyperhtml';



export class BaseComponent extends HTMLElement {
  private _template: any;
  private _style: string;
  private _content: any;

  private _shadowRoot: any;

  constructor(template, style: string = '', shadow = false, mode: 'open' | 'closed' = 'open') {
    super();
    try {
      this._template = template;
      this._style = style;
    } catch (error) {
      console.warn('Can not find a template!');
    }

    this._content = this.appendChild(document.createElement('div'));

    if (shadow) {
      this._shadowRoot = this.attachShadow({ mode });
      this._shadowRoot.appendChild(hyperHTML.wire() `<style>${this._style}</style>`);
      this._shadowRoot.appendChild(this._content);
    } else {
      this.appendChild(hyperHTML.wire() `<style>${this._style}</style>`);
      this._content = this.appendChild(document.createElement('div'));
    }

  }


  /**
   * LIFECYCLE
   * Создание компонента
   */
  connectedCallback(initialPropsList: string[]): void {
    this._initialProps(initialPropsList);
    this.render();
  }


  /**
   * Инициализация
   * @param props атрибуты для инициализации
   */
  _initialProps(props: string[]): void {
    if (typeof props !== 'undefined')
      props.forEach(prop => {
        const propAttr = this.getAttribute(prop);
        if (typeof propAttr !== 'undefined' && propAttr !== null) {
          this[prop] = propAttr;
        }
      });
  }


  /**
   * Функция рендеринга компонента
   */
  render(scope: any = this): void {
    let config = { scope, tag: hyperHTML.bind(this._content) };
    this._template(config);
  }

}
import { bind, wire } from 'hyperhtml/esm';


export class BaseComponent extends HTMLElement {
  private html: any;
  protected wire = wire;
  protected props: { [x: string]: string } = {};

  private _template: any;
  private _style: string;


  constructor(template, style: string = '', shadow = false, mode: 'open' | 'closed' = 'open') {
    super();
    try {
      this._template = template;
      this._style = style;
    } catch (error) {
      console.warn('Can not find a template!');
    }

    // this.content = this.appendChild(document.createElement('div'));


    if (shadow) {
      this.html = bind(
        this.attachShadow({ mode })
      );
      // this.root = this.attachShadow({ mode });
      // this._shadowRoot.appendChild(hyperHTML.wire() `<style>${this._style}</style>`);
      // this._shadowRoot.appendChild(this.content);
    } else {
      this.html = bind(this);
      // this.appendChild(hyperHTML.wire() `<style>${this._style}</style>`);
      // this.content = this.appendChild(document.createElement('div'));
    }


    if (this._style && this._style !== '') {
      this._style = wire() `<style>${this._style}</style>`;
    }

  }


  /**
   * LIFECYCLE
   * Создание компонента
   */
  connectedCallback(initialPropsList: string[]): void {
    // console.log(22222222222222, this)

    this._initialProps(initialPropsList);
    this.render();
  }


  /**
   * LIFECYCLE
   * Отслеживаемые параметры
   * изменения в данных атрибутах будут непосредственно отслеживаться компонентом
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && this.props[name] !== newValue) {
      this.props[name] = newValue;
      this.render();
    }
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
          this.props[prop] = propAttr;
        }
      });
  }


  /**
   * Функция рендеринга компонента
   */
  render(scope: any = this): void {
    const config = { scope, tag: wire(this) };

    this.html`${this._style}<div>${this._template(config)}</div>`;
  }

}


export function Define(nameTag: string) {
  return (originalConstructor: new (...args) => any) => {
    customElements.define(nameTag, originalConstructor);
  };
}


import { bind, wire } from 'hyperhtml/esm';
import { Subscription } from 'rxjs';



/**
 * Основной компонент
 */
export abstract class UmWebComponent extends HTMLElement {
  private html: any;
  protected wire = wire;
  protected props: { [x: string]: string } = {};

  protected _template: (html, scope) => any;
  protected _style: string;
  private _subscriptions: Subscription[] = [];
  protected set sub(subscription: Subscription){
    this._subscriptions.push(subscription);
  }


  constructor(
    templateFunction: (html, scope) => any,
    staticStyle: string = '',
    shadow = false,
    mode: 'open' | 'closed' = 'open'
  ) {
    super();
    try {
      this._template = templateFunction;
      this._style = staticStyle;
    } catch (error) {
      console.warn('Can not find a template!');
    }

    if (shadow) {
      this.html = bind(this.attachShadow({ mode }));
    } else {
      this.html = bind(this);
    }

    if (this._style && this._style !== '') {
      this._style = wire() `<style>${this._style}</style>`;
    }
  }


  /**
   * LIFECYCLE
   * Создание компонента
   */
  connectedCallback(initialPropsList: string[] = []): void {
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
   * LIFECYCLE
   * Remove Custom element from page
   */
  disconnectedCallback() {
    this._subscriptions.forEach(s=>s.unsubscribe());
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
   * 
   * @param scope область видимости в темплейте (this по умолчанию)
   */
  render(scope: any = this): void {
    this.html`${this._style}${this._template(wire(this), scope)}`;
  }

}


/**
 * Директива определения Custom Element
 */
export function Define(nameTag: string) {
  return (originalConstructor: new (...args) => any) => {
    customElements.define(nameTag, originalConstructor);
  };
}


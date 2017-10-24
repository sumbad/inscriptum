import * as hyperHTML from 'hyperhtml';
import Tools from "utils/tools";



/**
 * Web components
 * Компонент spinner - используется в прелоадерах.
 * 
 * API
 * @param width - размер спиннера в px (необязательное свойство, по умолчанию цвет 100px)
 * @param --ispui-color__spinner-round - переменная цвета в css, задается в стилях темы (необязательное свойство, по умолчанию цвет #E44592)
 */
export class SpinnerRound extends HTMLElement {
  private _template: any;
  private _style: any;
  public $style: any;
  private _shadowRoot: any;
  /*** id svg элемента*/
  private _id;
  /*** размер спиннера в px */
  private _widthSpinner = 100;

  constructor() {
    super();
    this._id = Tools.uuidv4();

    try {
      this._template = require('./spinner-round.component.html');
      this._style = require('./spinner-round.component.scss');
    } catch (error) {
      console.warn('Can not find the EditorComponent template!');
    }



    // this._shadowRoot = this.attachShadow({ mode: 'open' });
  }


  set width(newWidth) {
    if (this._widthSpinner !== newWidth && typeof newWidth !== 'undefined' && Number(newWidth) !== NaN) {
      this._widthSpinner = newWidth;
      this._render();
    }
  }
  get width() {
    return this._widthSpinner;
  }


  /**
   * LIFECYCLE
   * Отслеживаемые параметры
   * изменения в данных атрибутах будут непосредственно отслеживаться компонентом
   */
  static get observedAttributes() { return ['width']; }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case 'width':
          this.width = newValue;
          break;
      }
    }
  }


  /**
   * LIFECYCLE
   * Создание компонента
   */
  connectedCallback(): void {
    // this._initialProps(['width']);

    this.$style = hyperHTML.wire() `<style>${this._style}</style>`;


    // this._shadowContent = document.createElement('div');
    // this._shadowStyle = document.createElement('style');
    // this._shadowStyle.textContent = this._style;

    // this._shadowRoot.appendChild(this._shadowStyle);
    // this._shadowRoot.appendChild(this._shadowContent);



    // this.innerHTML = '<style>' + this._css + '</style>' + eval('`' + this._html + '`');

    // this._$spinnerWrappre = this.querySelector('.isp-spinner-round');

    this._render();
  }


  // /**
  //  * Инициализация
  //  * @param props атрибуты для инициализации
  //  */
  // _initialProps(props: string[]): void {
  //   props.forEach(prop => {
  //     const propAttr = this.getAttribute(prop);
  //     if (typeof propAttr !== 'undefined' && propAttr !== null) {
  //       this[prop] = propAttr;
  //     }
  //   });
  // }


  /**
   * Функция рендеринга компонента
   */
  _render(): void {
    this._template(this, hyperHTML.bind(this));
    // if (typeof this._$spinnerWrappre !== 'undefined') {
    //   this._$spinnerWrappre.style.width = `${this.width}px`;
    // }
  }
}

import * as hyperHTML from 'hyperhtml';
import Tools from "utils/tools";
import { BaseComponent } from 'components/base.component';

let template = require('./spinner-round.component.html');
let style = require('./spinner-round.component.scss');


/**
 * Компонент spinner - используется в прелоадерах.
 * 
 * API
 * @param width - размер спиннера в px (необязательное свойство, по умолчанию цвет 100px)
 * @param --ispui-color__spinner-round - переменная цвета в css, задается в стилях темы (необязательное свойство, по умолчанию цвет #E44592)
 */
export class SpinnerRound extends BaseComponent {

  // private _content: any;
  // private _root: any;
  /*** id svg элемента*/
  public uuid;
  /*** размер спиннера в px */
  private _widthSpinner = 30;

  set width(newWidth) {
    if (this._widthSpinner !== newWidth && typeof newWidth !== 'undefined' && Number(newWidth) !== NaN) {
      this._widthSpinner = newWidth;
      this.render();
    }
  }
  get width() {
    return this._widthSpinner;
  }


  constructor() {
    super(template, style, true);
    this.uuid = Tools.uuidv4();

    // try {
    //   this._template = require('./spinner-round.component.html');
    //   this._style = require('./spinner-round.component.scss');
    // } catch (error) {
    //   console.warn('Can not find the EditorComponent template!');
    // }

    // this._root = this.attachShadow({ mode: 'open' });
    // this._root.appendChild(hyperHTML.wire() `<style>${this._style}</style>`);
    // this._content = this._root.appendChild(document.createElement('div'));
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
  connectedCallback() {
    super.connectedCallback(['width']);
  }


}

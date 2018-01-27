import hyperHTML from 'hyperhtml/esm';
import Tools from "utils/tools";
import { Define, UmWebComponent } from "components/um-web.component";

import template from './template';



/**
 * Компонент spinner - используется в прелоадерах
 * 
 * API
 * @param width - размер спиннера в px (необязательное свойство, по умолчанию цвет 100px)
 * @param --um-spinner-round - переменная основного цвета
 */
@Define('um-spinner-round')
export class SpinnerRound extends UmWebComponent {
  static get observedAttributes() { return ['width']; }
  /*** id svg элемента*/
  public uuid;
  /*** размер спиннера в px */
  private _widthSpinner = '30px';

  // set width(newWidth) {
  //   if (this._widthSpinner !== newWidth && typeof newWidth !== 'undefined' && Number(newWidth) !== NaN) {
  //     this._widthSpinner = newWidth;
  //     this.render();
  //   }
  // }
  // get width() {
  //   return `${this._widthSpinner}px`;
  // }


  constructor() {
    super(template, require('./style.scss'), true);
    this.uuid = Tools.uuidv4();
  }

}

import * as hyperHTML from 'hyperhtml';
import 'whatwg-fetch';

import { BaseComponent, Define } from 'components/base.component';

const template = require('./template.html');



@Define('um-preloader')
export class PreloaderComponent extends BaseComponent {
  constructor() {
    super(template);
  }
}
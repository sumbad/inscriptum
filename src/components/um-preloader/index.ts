import { Define, UmWebComponent } from 'components/um-web.component';
import './um-spinner-round';

import template from './template';



@Define('um-preloader')
export class PreloaderComponent extends UmWebComponent {
  showSpinner: boolean = true;
  loaderClass: string = '';
  static attributes = ['loading'];
  static get observedAttributes() { return this.attributes; }


  constructor() {
    super(
      template,
      require('./style.scss'),
      true
    );
  }


  render() {
    this.loaderClass = 'um-preloader__loader_fixed';
    let loading = true;

    const info = { some: 'data' };
    const rendering = () => super.render({
      loading,
      loaderClass: this.loaderClass,
      showSpinner: this.showSpinner,
    });

    if (this.props.loading === 'true') {
      loading = true;
      this.showSpinner = true;
    } else {
      this.showSpinner = false;
      setTimeout(() => {
        loading = false;
        rendering();
      }, 600);
    }

    rendering();
  }

}
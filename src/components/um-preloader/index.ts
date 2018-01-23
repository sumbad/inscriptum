import { BaseComponent, Define } from 'components/base.component';
import '../um-spinner-round';


@Define('um-preloader')
export class PreloaderComponent extends BaseComponent {
  loaderClass: string = '';
  static attributes = ['loading'];
  static get observedAttributes() { return this.attributes; }


  constructor() {
    super(
      require('./template.html'),
      require('./style.scss'),
      true
    );
  }


  render() {
    const loading = (this.props.loading === 'true');

    const info = {some: 'data'};
    const rendering = () => super.render({
      loading,
      loaderClass: this.loaderClass
    });

    if (loading && this.loaderClass === '') {
      this.loaderClass = 'um-preloader__loader_fixed';
    } else if (!loading && this.loaderClass !== '') {
      setTimeout(() => {
        this.loaderClass = '';
        rendering();
      }, 500);
    }

    rendering();
  }

}
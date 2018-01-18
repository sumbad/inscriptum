import { BaseComponent, Define } from 'components/base.component';
// import style from './style';



@Define('um-preloader')
export class PreloaderComponent extends BaseComponent {
  loading: string;
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
    const loading = (this.loading === 'true');

    super.render({
      loading
    });
  }
}
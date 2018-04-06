import { Define, UmWebComponent } from 'components/um-web.component';

import { PreloaderService } from '../um-preloader/service';
import template from './template';
import { Router } from 'router';
import Tools from 'utils/tools';


@Define('inscriptum-conference')
export class ConferenceComponent extends UmWebComponent {
  public routerView: any = '';
  public isPreloader = true;

  constructor(public saying) {
    super(template);

    this.routing();
  }
  

  routing() {
    const html = this.wire();
    console.log(22222);

    const conference = async (ctx, next) => {
      console.log(1111111)
      this.routerView = html`<div>2222</div>`;
      this.render();
    };

    const presentation = async (ctx, next) => {
      await Tools.importWebComponent('inscriptum-presentation', 'conference/presentation');
      this.routerView = html`<inscriptum-presentation></inscriptum-presentation>`;
      this.render();
    };


    const router = [
      // {
      //   path: 'presentation/:id',
      //   callback: presentation
      // },
      // {
      //   path: '/conference/:id',
      //   callback: conference
      // },
      {
        path: '*',
        callback: conference
      },
    ];

    Router.routing(router);
  }


  render() {
    super.render({
      isPreloader: this.isPreloader,
      routerView: this.routerView,
      handleClick: this.handleClick.bind(this)
    });
  }



  handleClick(ev) {
    // this.isPreloader = !this.isPreloader;
  }

}
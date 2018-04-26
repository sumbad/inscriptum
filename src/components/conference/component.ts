import { Define, UmWebComponent } from 'components/um-web.component';
import Tools from 'utils/tools';

import template from './template';
import { conferenceRouter } from './router';



@Define('inscriptum-conference')
export class ConferenceComponent extends UmWebComponent {
  public routerView: any = '';
  public isPreloader = true;

  constructor() {
    super(template);
  }


  connectedCallback() {
    const html = this.wire();

    this.sub = conferenceRouter.goConference.subscribe((d: { ctx, next }) => {
      this.routerView = html`<div>2222</div>`;
      this.render();
      d.ctx.handled = true;
    });

    this.sub = conferenceRouter.goPresentation.subscribe(async (d: { ctx, next }) => {
      await Tools.importWebComponent('inscriptum-presentation', 'conference/presentation');
      this.routerView = html`<inscriptum-presentation></inscriptum-presentation>`;
      this.render();
      d.ctx.handled = true;
    });

    super.connectedCallback();
  }


  render() {
    super.render({
      isPreloader: this.isPreloader,
      routerView: this.routerView,
    });
  }

}
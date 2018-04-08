import { Define, UmWebComponent } from 'components/um-web.component';
import Tools from 'utils/tools';

import { conferenceService, conferenceTemplate } from '.';



@Define('inscriptum-conference')
export class ConferenceComponent extends UmWebComponent {
  public routerView: any = '';
  public isPreloader = true;

  constructor() {
    super(conferenceTemplate);
  }


  connectedCallback() {
    const html = this.wire();

    this.sub = conferenceService.goConference.subscribe((d: { ctx, next }) => {
      this.routerView = html`<div>2222</div>`;
      this.render();
      d.ctx.handled = true;
    });

    this.sub = conferenceService.goPresentation.subscribe(async (d: { ctx, next }) => {
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
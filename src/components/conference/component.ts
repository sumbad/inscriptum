import { Define, UmWebComponent } from 'components/um-web.component';
import Tools from 'utils/tools';

import template from './template';
import { conferenceRouter } from '../../app/notepad/routes/conference.router';



@Define('inscriptum-conference')
export class ConferenceComponent extends UmWebComponent {
  public routerView: any = '';
  public isPreloader = true;

  constructor() {
    super(template);
  }


  connectedCallback() {
    const html = this.wire();

    this.sub = conferenceRouter.$routeConference.subscribe((d: { ctx, next }) => {
      this.routerView = html`<a href=${conferenceRouter.rootPath + '/presentation/webcomponents-common'}>Web Components</a>`;
      this.render();
      d.ctx.handled = true;
    });

    this.sub = conferenceRouter.$routePresentation.subscribe(async (d: { ctx, next }) => {
      await Tools.importWebComponent('inscriptum-presentation', 'conference/presentation');
      this.routerView = html`<inscriptum-presentation data-name=${d.ctx.params.id}></inscriptum-presentation>`;
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
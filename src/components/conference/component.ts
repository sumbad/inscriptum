import { Define, UmWebComponent } from 'components/um-web.component';
import Tools from 'utils/tools';
import { conferenceRouter } from './router';
import template from './template';

const style = require('./styles/style.scss');



@Define('inscriptum-conference')
export class ConferenceComponent extends UmWebComponent {
  logo: any;
  triggerNav: any;
  navigation: any;
  projectsContainer: any;
  public routerView: any = '';
  public isPreloader = true;

  constructor() {
    super(template, style);
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
      this.routerView = html`<inscriptum-presentation data-name="webcomponents-common"></inscriptum-presentation>`;
      this.render();
      d.ctx.handled = true;
    });

    super.connectedCallback();


    this.projectsContainer = this.querySelector('.cd-projects-container');
		this.navigation = this.querySelector('.cd-primary-nav');
		this.triggerNav = this.querySelector('.cd-nav-trigger');
		this.logo = this.querySelector('.cd-logo');
  }


  render() {
    super.render({
      isPreloader: this.isPreloader,
      routerView: this.routerView,
    });
  }

}
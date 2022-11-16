import './style.inject.scss';
import { RootRoute } from './routes/notepad.route';
import { noticeModule } from 'modules/notice.module';
import hub from 'hub';
import { globalErrorHandle } from 'utils/error.util';
import { footerElement } from 'new-components/footer/footer.element';

const FooterConstructor = footerElement('inscriptum-footer');

const mainElement = document.querySelector('main');

if (mainElement) {
  mainElement.after(new FooterConstructor());

  new RootRoute(mainElement);
}

noticeModule();

hub.$.subscribe((action) => {
  globalErrorHandle(action);
});

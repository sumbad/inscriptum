import './style.inject.scss';
import 'components/um-preloader';
import { RootRoute } from './routes/$';
import { noticeModule } from 'modules/notice.module';
import hub from 'hub';
import { globalErrorHandle } from 'utils/error.util';

const mainElement = document.querySelector('main');

new RootRoute(mainElement!);

noticeModule();

hub.$.subscribe((action) => {
  globalErrorHandle(action);
});

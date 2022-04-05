import './style.inject.scss';
import 'components/um-preloader';
import { RootRoute } from './routes/$';
import { noticeModule } from 'modules/notice.module';

const mainElement = document.querySelector('main');

new RootRoute(mainElement!);

noticeModule();
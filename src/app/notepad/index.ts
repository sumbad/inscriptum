import './style.inject.scss';
import 'components/um-preloader';
import { RootRoute } from './routes/$';

const mainElement = document.querySelector('main');

new RootRoute(mainElement!);

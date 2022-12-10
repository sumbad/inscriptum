import './style.scss';
import { footerElement } from 'components/footer/footer.element';

// TODO:
// 1. Check auth and show a link to draft for author.
// 2. Show special menu (home button, etc.).

const FooterConstructor = footerElement('inscriptum-footer');
document.body.appendChild(new FooterConstructor());

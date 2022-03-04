import './main.scss';
import { injectHtmlTemplate } from './ts/services';
import { addNavbar } from './ts/navbar';

addNavbar();
injectHtmlTemplate('about.html', 'main');
injectHtmlTemplate('footer.html', 'footer');
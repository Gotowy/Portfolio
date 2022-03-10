import './main.scss';
import { injectHtmlTemplate } from './ts/services';
import { addNavbar } from './ts/navbar';
import { Icon, iconList, createIconList } from './ts/about';

addNavbar();
injectHtmlTemplate('about.html', 'main');
injectHtmlTemplate('footer.html', 'footer');

createIconList(iconList, Icon);
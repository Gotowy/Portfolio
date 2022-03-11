import './main.scss';
import { injectHtmlTemplate } from './ts/services';
import { addNavbar } from './ts/navbar';
import { Icon, createIconList } from './ts/about';
const iconList = require("./json/icons.json");

addNavbar();
injectHtmlTemplate('about.html', 'main');
injectHtmlTemplate('footer.html', 'footer');

createIconList(iconList, Icon);
import { injectHtmlTemplate, addClass, removeClass } from './services';

export const addNavbar = (): void => {
    injectHtmlTemplate('navbar.html', '.navbar');
    document.querySelectorAll('.navBtn').forEach((item: Element): void => {
        const value = item.getAttribute('value');
        item.addEventListener('click', () => {
            injectHtmlTemplate(`${value}.html`, 'main');
            removeClass('active', '.contentBtn[class*="active"]');
            addClass('active', `.contentBtn[value="${value}"]`);
        });
    });
    addClass('color', '.name');
}
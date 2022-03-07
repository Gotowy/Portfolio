import { injectHtmlTemplate, addClass, removeClass, scroll } from './services';

export const addNavbar = (): void => {
    injectHtmlTemplate('navbar.html', '.navbar');
    const homeButton: HTMLDivElement = document.querySelector('.home-btn') as HTMLDivElement;
    const contentButtons: NodeListOf<HTMLLIElement> = document.querySelectorAll('.content-btn');

    homeButton?.addEventListener('click', () => {    
        removeClass('yellow', '.name');
        addClass('yellow', '.name');
        
        removeClass('visible', '.title');
        addClass('visible', '.title');
        
        removeClass('shade', '.bg');      
        addClass('shade', '.bg');

        removeClass('active', '.content-btn[class*="active"]');
        scroll('.bg');
    })

    contentButtons?.forEach((item: Element): void => {
        const value = item.getAttribute('value');
        item.addEventListener('click', () => {
            injectHtmlTemplate(`${value}.html`, 'main');
            removeClass('active', '.content-btn[class*="active"]');
            addClass('active', `.content-btn[value="${value}"]`);
            scroll('main');
        });
    });
}
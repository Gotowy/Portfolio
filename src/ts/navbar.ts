import { injectHtmlTemplate, addClass, removeClass, scroll,  listenerCallback } from './services';
import { createIconList } from './about'
const iconList = require("../json/icons.json");

export const addNavbar = (): void => {
    injectHtmlTemplate('navbar.html', '.navbar');
    
    const homeButton: HTMLDivElement = document.querySelector('.home-btn') as HTMLDivElement;
    homeButton?.addEventListener('click', () => {    
        removeClass('yellow', '.name');
        addClass('yellow', '.name');
        
        removeClass('visible', '.title');
        addClass('visible', '.title');
        
        removeClass('shade', '.bg');      
        addClass('shade', '.bg');

        removeClass('active', '.content-btn[class*="active"]');
        removeClass('displayed', '.navmenu');
        removeClass('displayed', '.blocker');
        scroll('.bg');
    })

    const blocker: HTMLSpanElement = document.querySelector('.blocker') as HTMLSpanElement;
    blocker?.addEventListener('click', () => {
        removeClass('displayed', '.navmenu');
        removeClass('displayed', '.blocker');
    });

    const hamburger: HTMLSpanElement = document.querySelector('.hamburger') as HTMLSpanElement;
    hamburger?.addEventListener('click', () => {
        const navmenu: HTMLUListElement = document.querySelector('.navmenu') as HTMLUListElement;
        navmenu?.classList.toggle('displayed');
        blocker?.classList.toggle('displayed');
    });

    const contentButtons: NodeListOf<HTMLLIElement> = document.querySelectorAll('.content-btn');
    contentButtons?.forEach((item: Element): void => {
        item.addEventListener('click', () => {
            listenerCallback(item, '.content-btn', 'main');
            removeClass('displayed', '.navmenu');
            removeClass('displayed', '.blocker');
            scroll('main');
            if (item.getAttribute('value') === "projects") {
                const projects: NodeListOf<HTMLLIElement> = document.querySelectorAll('.project') as NodeListOf<HTMLLIElement>;
                projects?.forEach((project: Element): void => {
                    project.addEventListener('click', () => {
                        listenerCallback(project, '.project', '.project-details');
                        scroll('.projects h2');    
                    });
                })
                injectHtmlTemplate('projects/portfolio.html', '.project-details');
            }
            if (item.getAttribute('value') === "about") createIconList(iconList); 
        });
    });
}
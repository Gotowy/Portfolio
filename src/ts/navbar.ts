import { injectHtmlTemplate, addClass, removeClass, scroll,  listenerCallback } from './services';
import { Icon, createIconList } from './about'
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
        scroll('.bg');
    })

    const hamburger: HTMLSpanElement = document.querySelector('.hamburger') as HTMLSpanElement;
    hamburger?.addEventListener('click', () => { addClass('displayed', '.content-btn'); });

    const contentButtons: NodeListOf<HTMLLIElement> = document.querySelectorAll('.content-btn');
    contentButtons?.forEach((item: Element): void => {
        item.addEventListener('click', () => {
            listenerCallback(item, '.content-btn', 'main');
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
            if (item.getAttribute('value') === "about") createIconList(iconList, Icon); 
        });
    });
}
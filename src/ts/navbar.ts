export const addNavbar = (): void => {
    const navbarTemplate: string = require('../html/navbar.html').default;
    const navContainer: HTMLElement = document.querySelector('.navbar') as HTMLElement;
    const contentContainer: HTMLElement = document.querySelector('.content') as HTMLElement;
    const showContent = (item: Element): void => {
        const sectionTemplate: string = require(`../html/${item.id}.html`).default;
        item.addEventListener('click', () => {
            contentContainer.innerHTML = sectionTemplate;
        })
    }
    
    navContainer.innerHTML = navbarTemplate;
    navContainer.querySelectorAll('.navBtn').forEach(showContent);
}

export const addNameColor = (): void => {
    const nameContainer: HTMLDivElement = document.querySelector('.name') as HTMLDivElement;
    setTimeout(() => nameContainer.classList.add('color'), 0);
}
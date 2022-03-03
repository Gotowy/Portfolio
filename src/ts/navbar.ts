export const addNavbar = (): void => {
    const navbar: string = require('../html/navbar.html').default;
    const projectDetails: HTMLDivElement = document.querySelector('.navbar') as HTMLDivElement;
    projectDetails.innerHTML = navbar;
    console.log('tu navbar, odbiór');
}

export const injectHtmlTemplate = (templateFileName: `${string}.html`, cssSelector: string) => {
    const container: HTMLElement = document.querySelector(cssSelector) as HTMLElement;
    const template: string = require(`../html/${templateFileName}`).default;
    container.innerHTML = template;
}

export const addClass = (className: string, cssSelector: string): void => {
    const container: HTMLElement = document.querySelector(cssSelector) as HTMLElement;
    setTimeout(() => container?.classList.add(className), 0);
}

export const removeClass = (className: string, cssSelector: string): void => {
    const container: HTMLElement = document.querySelector(cssSelector) as HTMLElement;
    container?.classList.remove(className);
}
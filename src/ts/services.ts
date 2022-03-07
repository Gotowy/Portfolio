export const injectHtmlTemplate = (templateFileName: `${string}.html`, cssSelector: string) => {
    const container: HTMLElement = document.querySelector(cssSelector) as HTMLElement;
    const template: string = require(`../html/${templateFileName}`).default;
    if (container && template) container.innerHTML = template;
}

export const addClass = (className: string, cssSelector: string): void => {
    const element: HTMLElement = document.querySelector(cssSelector) as HTMLElement;
    setTimeout(() => element?.classList.add(className), 0);
}

export const removeClass = (className: string, cssSelector: string): void => {
    const element: HTMLElement = document.querySelector(cssSelector) as HTMLElement;
    element?.classList.remove(className);
}

export const scroll = (cssSelector: string): void => {
    const element: HTMLElement = document.querySelector(cssSelector) as HTMLElement;
    element?.scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
}
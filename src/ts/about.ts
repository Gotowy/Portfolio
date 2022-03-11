import { IconPattern } from './interfaces';

export class Icon implements IconPattern {
    element: string;
    constructor(public name: string, public description: string) {
        this.element = `<li><span class="iconify" data-icon="${this.name}"></span><p>&nbsp;${this.description}</p></li>`;
    }
}

export const createIconList = (iconList: IconPattern[], Icon: any): void => { 
    const iconsString = iconList.reduce((list, iconJson) => { 
        const icon: IconPattern = new Icon(iconJson.name, iconJson.description);
        return `${list}${icon.element}`; 
    }, ``);
    const container: HTMLElement = document.querySelector('.icon-list') as HTMLElement;
    container.innerHTML = iconsString;
}

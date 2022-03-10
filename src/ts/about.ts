export const iconList = [
    {"name": "vscode-icons:file-type-html", "description": "HTML5"},
    {"name": "vscode-icons:file-type-css", "description": "CSS3"},
    {"name": "logos:sass", "description": "Sass"},
    {"name": "vscode-icons:file-type-js-official", "description": "JavaScript"},
    {"name": "vscode-icons:file-type-typescript-official", "description": "TypesScript"},
    {"name": "vscode-icons:file-type-reactjs", "description": "React"},
    {"name": "logos:redux", "description": "Redux"},
    {"name": "logos:git-icon", "description": "Gi"},
    {"name": "akar-icons:github-fill", "description": "Github"},
    {"name": "logos:webpack", "description": "Webpack"},
    {"name": "vscode-icons:file-type-json2", "description": "JSON"},
    {"name": "fluent:window-dev-tools-24-filled", "description": "DevTools"},
    {"name": "vscode-icons:file-type-vscode2", "description": "VS Code"},
    {"name": "logos:bash-icon", "description": "Bash"}
];

export class Icon {
    constructor(private name: string, private description: string) {
        this.name = name;
        this.description = description;
    }
    
    returnElement() { return `<li><span class="iconify" data-icon="${this.name}"></span><p>&nbsp;${this.description}</p></li>` };
}

export const createIconList = (iconList: {name: string, description: string}[], Icon: any): void => { 
    const lol = iconList.reduce((list, icon) => { return list + new Icon(icon.name, icon.description).returnElement();}, '');
    const container: HTMLElement = document.querySelector('.technologies ul') as HTMLElement;
    container.innerHTML = lol;
}

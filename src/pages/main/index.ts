import Page from "../../core/templates/page";

class MainPage extends Page{
    static TextObject = {
        MainTitle: 'Main Page',
        MainSubtitle: 'Some text, which u can see only on main-page'
    }

    constructor(id:string) {
       super(id);
    }

    protected createSubtitle(text: string) {
        const subtitle = document.createElement('p');
        subtitle.innerText = text;
        return subtitle;
    }

    render() {
        const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
        const subtitle = this.createSubtitle(MainPage.TextObject.MainSubtitle);
        this.container.append(title);
        this.container.append(subtitle);
        return this.container;
    }
}

export default MainPage;

import MainPage from "../main";
import SettingsPage from "../settings";
import Page from "../../core/templates/page"
import Header from "../../core/templates/components/header";

export const enum PageIds {
    MainPage =     "main-page",
    SettingsPage = "settings-page"
}

class App {
    private static container: HTMLElement = document.body;
    private initialPage: MainPage;
    private header: Header;
    private static defaultPageId: string = "current-page"

    constructor() {
        this.initialPage = new MainPage('main-page');
        this.header = new Header('header','header-container ');
    }

    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page: Page | null = null;
        

        if (idPage === PageIds.MainPage){
            page = new MainPage(idPage);
        } else if(idPage === PageIds.SettingsPage) {
            page = new SettingsPage(idPage);
        }

        if (page){
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML);
        }
    }

    private enableRoutChange(){
        window.addEventListener('hashchange', () =>{
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash)
        })
    }

    run() {
        App.container.append(this.header.render());
        App.renderNewPage('main-page');
        this.enableRoutChange();
    }
}

export default App;

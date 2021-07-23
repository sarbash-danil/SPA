import Component from "./components";
import { PageIds } from "../../../../pages/app";

const Buttons = [
    {
        id: PageIds.MainPage,
        text: 'Main page',
    },
    {
        id: PageIds.SettingsPage,
        text: 'Settings page',
    },
]


class Header extends Component {
    constructor(tagName: string, className: string) {   
        super(tagName, className);
    }

    renderPageButtons() {
        const pageButtons = document.createElement('div');
        Buttons.forEach((button)=>{
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.text;
            pageButtons.append(buttonHTML);     
        })
        this.container.append(pageButtons)
    }

    render() {
        this.renderPageButtons();
       return this.container;
    }
}
export default Header;

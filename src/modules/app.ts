import ElementCreator from "./util/element-creator";
import Footer from "./view/footer/footer";
import Header from "./view/header/header";
import Main from "./view/main/main";

export interface ViewType {
  elementCreator: ElementCreator;
  getHTMLElement(): HTMLElement | null;
}

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const footerView: ViewType = new Footer();
    const headerView: ViewType = new Header();
    const mainView: ViewType = new Main();

    document.body.append(headerView.getHTMLElement() as Node);
    document.body.append(mainView.getHTMLElement() as Node);
    document.body.append(footerView.getHTMLElement() as Node);
  }
}

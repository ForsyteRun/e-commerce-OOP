import FooterView, { ViewType } from "./view/footer/footer";
import HeaderView from "./view/header/header";
import MainView from "./view/main/main";

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const footerView: ViewType = new FooterView();
    const headerView: ViewType = new HeaderView();
    const mainView: ViewType = new MainView();

    document.body.append(headerView.getHTMLElement() as Node);
    document.body.append(mainView.getHTMLElement() as Node);
    document.body.append(footerView.getHTMLElement() as Node);
  }
}

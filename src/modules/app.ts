import ElementCreator from './util/element-creator';
import Footer from './view/footer/footer';
import Header from './view/header/header';
import Home from './view/main/home/home';
import Main from './view/main/main';

export interface ViewType {
  elementCreator: ElementCreator;
  getHTMLElement(): HTMLElement | null;
}

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const footerView: Footer = new Footer();
    const headerView: Header = new Header(new Main());
    const mainView: Main = new Main();

    mainView.setContent(new Home());

    document.body.append(headerView.getHTMLElement() as Node);
    document.body.append(mainView.getHTMLElement() as Node);
    document.body.append(footerView.getHTMLElement() as Node);
  }
}

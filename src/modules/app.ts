import ElementCreator from './util/element-creator';
import Footer from './view/footer/footer';
import Header from './view/header/header';
import Home from './view/main/home/home';
import Main from './view/main/main';

// TODO: remove in types.ts
export interface ViewType {
  elementCreator: ElementCreator;
  getHTMLElement(): HTMLElement | null;
}

export default class App {
  constructor() {
    this.createView();
  }

  private createView(): void {
    const headerView: Header = new Header(new Main());
    const mainView: Main = new Main();
    const footerView: Footer = new Footer();

    mainView.setContent(new Home());

    // TODo: должны быть видны только необходимые методы и свойства
    document.body.append(
      headerView.getHTMLElement() as Node,
      mainView.getHTMLElement() as Node,
      footerView.getHTMLElement() as Node,
    );
  }
}

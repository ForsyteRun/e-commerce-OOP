import { ElementCreatorType } from "./util/element-creator";
import View, { CSSClassesEnum, TextEnum } from "./view/view";

export interface ViewType {
  elementCreator: ElementCreatorType;
  getHTMLElement(): HTMLElement | null;
}

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const footerView: ViewType = new View({
      tag: "footer",
      className: CSSClassesEnum.footer,
      textContent: TextEnum.footerText,
      callback: () => null,
    });
    const headerView: ViewType = new View({
      tag: "header",
      className: CSSClassesEnum.header,
      textContent: TextEnum.headerText,
      callback: () => null,
    });
    const mainView: ViewType = new View({
      tag: "main",
      className: CSSClassesEnum.main,
      textContent: TextEnum.mainText,
      callback: () => null,
    });

    document.body.append(headerView.getHTMLElement() as Node);
    document.body.append(mainView.getHTMLElement() as Node);
    document.body.append(footerView.getHTMLElement() as Node);
  }
}

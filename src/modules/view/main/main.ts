import ElementCreator, { ElementCreatorType, ElementParams } from "../../util/element-creator";

export interface CSSClassesType {
  MAIN: "main";
}

const CSSClasses: CSSClassesType = {
  MAIN: "main",
};

const TEXT = "Good morning Main!";

export default class MainView {
  elementCreator: ElementCreatorType;

  constructor() {
    this.elementCreator = this.createView();
  }

  getHTMLElement(): HTMLElement | null {
    return this.elementCreator.getElement();
  }

  createView(): ElementCreatorType {
    const params: ElementParams = {
      tag: "main",
      className: [CSSClasses.MAIN],
      textContent: TEXT,
      callback: () => null,
    };

    const elementCreator: ElementCreatorType = new ElementCreator(params);
    return elementCreator;
  }
}

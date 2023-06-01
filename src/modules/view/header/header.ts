import ElementCreator, { ElementCreatorType, ElementParams } from "../../util/element-creator";

export interface CSSClassesType {
  HEADER: "header";
}

const CSSClasses: CSSClassesType = {
  HEADER: "header",
};

const TEXT = "Good morning Header!";

export default class HeaderView {
  elementCreator: ElementCreatorType;

  constructor() {
    this.elementCreator = this.createView();
  }

  getHTMLElement(): HTMLElement | null {
    return this.elementCreator.getElement();
  }

  createView(): ElementCreatorType {
    const params: ElementParams = {
      tag: "header",
      className: [CSSClasses.HEADER],
      textContent: TEXT,
      callback: () => null,
    };

    const elementCreator: ElementCreatorType = new ElementCreator(params);
    return elementCreator;
  }
}

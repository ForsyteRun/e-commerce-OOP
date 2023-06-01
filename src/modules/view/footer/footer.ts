import ElementCreator, { ElementCreatorType, ElementParams } from "../../util/element-creator";

export interface CSSClassesType {
  FOOTER: "footer";
}

export interface ViewType {
  elementCreator: ElementCreatorType;
  getHTMLElement(): HTMLElement | null;
}

const CSSClasses: CSSClassesType = {
  FOOTER: "footer",
};

const TEXT = "Good morning Footer!";

export default class FooterView {
  elementCreator: ElementCreatorType;

  constructor() {
    this.elementCreator = this.createView();
  }

  getHTMLElement(): HTMLElement | null {
    return this.elementCreator.getElement();
  }

  createView(): ElementCreatorType {
    const params: ElementParams = {
      tag: "footer",
      className: [CSSClasses.FOOTER],
      textContent: TEXT,
      callback: () => null,
    };

    const elementCreator: ElementCreatorType = new ElementCreator(params);
    return elementCreator;
  }
}

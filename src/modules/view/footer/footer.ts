import ElementCreator, { ElementCreatorType, ElementParams } from "../../util/element-creator";

export const enum CSSClassesEnum {
  header = "header",
  main = "main",
  footer = "footer",
}

export const enum TextEnum {
  headerText = "Good morning Header!",
  mainText = "Good morning Main!",
  footerText = "Good morning Footer!",
}

export interface ViewType {
  elementCreator: ElementCreatorType;
  getHTMLElement(): HTMLElement | null;
}

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
      className: [CSSClassesEnum.footer],
      textContent: TextEnum.footerText,
      callback: () => null,
    };

    const elementCreator: ElementCreatorType = new ElementCreator(params);
    return elementCreator;
  }
}

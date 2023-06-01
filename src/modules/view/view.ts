import ElementCreator, { ElementCreatorType, ElementParams } from "../util/element-creator";

export const enum CSSClassesEnum {
  header = "header",
  main = "main",
  footer = "footer",
}

export const enum TextEnum {
  headerText = "Good morning Header!",
  mainText = "Good morning Main!",
  footerText = "Good morning Foo999ter!",
}

export default class View {
  elementCreator: ElementCreatorType;

  constructor(nodeParams: ElementParams) {
    this.elementCreator = this.createView(nodeParams);
  }

  getHTMLElement(): HTMLElement | null {
    return this.elementCreator.getElement();
  }

  createView({ tag, className, textContent, callback = () => null }: ElementParams): ElementCreatorType {
    const data: ElementParams = {
      tag: tag,
      className: className,
      textContent: textContent,
      callback: callback,
    };

    const elementCreator: ElementCreatorType = new ElementCreator(data);
    return elementCreator;
  }
}

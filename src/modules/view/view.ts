import ElementCreator, { ElementParams } from "../util/element-creator";

export const enum TagEnum {
  header = "header",
  nav = "nav",
  main = "main",
  footer = "footer",
  link = "a",
  section = "section",
  input = "input",
  div = "div",
  button = "button",
}

export const enum CSSClassesEnum {
  header = "header",
  nav = "nav",
  main = "main",
  footer = "footer",
  link = "nav-link",
  linkSelected = "link__selected",
  HOME = "home",
  cards = "cards",
  CONTAINER = "container",
  input = "input",
  CARD = "card",
  FIELD = "card__field",
  BUTTON = "card__button",
}

export const enum TextEnum {
  headerText = "",
  mainText = " ",
  footerText = " ",
  BTN_TEXT = "подробнее..",
}

export const enum LinkNameEnum {
  main = "главная",
  products = "продукты",
}

export default class View {
  elementCreator: ElementCreator;

  constructor(nodeParams: ElementParams) {
    this.elementCreator = this.createView(nodeParams);
  }

  getHTMLElement(): HTMLElement | null {
    return this.elementCreator.getElement();
  }

  createView({ tag, className, textContent, callback = () => null }: ElementParams): ElementCreator {
    const data: ElementParams = {
      tag: tag,
      className: className,
      textContent: textContent,
      callback: callback,
    };

    const elementCreator: ElementCreator = new ElementCreator(data);
    return elementCreator;
  }
}

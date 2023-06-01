import ElementCreator, { ElementCreatorType, ElementParams } from "../../util/element-creator";
import View, { CSSClassesEnum, TagEnum, TextEnum } from "../view";

export default class Header extends View {
  constructor() {
    const data: ElementParams = {
      tag: TagEnum.header,
      className: CSSClassesEnum.header,
      textContent: TextEnum.headerText,
      callback: () => null,
    };

    super(data);

    this.configureView();
  }

  configureView() {
    const data: ElementParams = {
      tag: TagEnum.nav,
      className: CSSClassesEnum.nav,
      textContent: "",
      callback: () => null,
    };

    const elementCreator: ElementCreatorType = new ElementCreator(data);

    this.elementCreator.addInnerElement(elementCreator);
  }
}

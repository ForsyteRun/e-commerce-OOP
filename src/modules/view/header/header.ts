import { ElementParams } from "../../util/element-creator";
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
  }
}

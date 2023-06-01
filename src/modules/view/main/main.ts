import { ElementParams } from "../../util/element-creator";
import View, { CSSClassesEnum, TagEnum, TextEnum } from "../view";

export default class Main extends View {
  constructor() {
    const data: ElementParams = {
      tag: TagEnum.main,
      className: CSSClassesEnum.main,
      textContent: TextEnum.mainText,
      callback: () => null,
    };

    super(data);
  }
}

import { ElementParams } from "../../../util/element-creator";
import View, { CSSClassesEnum, TagEnum } from "../../view";

export const enum FieldText {
  FIELD_TEXT_ONE = "поле для ввoдa1",
  FIELD_TEXT_TWO = "поле для ввoдa2",
}

export default class Home extends View {
  constructor() {
    const data: ElementParams = {
      tag: TagEnum.section,
      className: CSSClassesEnum.HOME,
      textContent: "",
      callback: () => null,
    };

    super(data);
  }

  configureView() {}
}

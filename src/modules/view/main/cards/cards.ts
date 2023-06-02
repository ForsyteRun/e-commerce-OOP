import { ElementParams } from "../../../util/element-creator";
import View, { CSSClassesEnum, TagEnum } from "../../view";

export default class Cards extends View {
  constructor() {
    const data: ElementParams = {
      tag: TagEnum.section,
      className: CSSClassesEnum.cards,
      textContent: "",
      callback: () => null,
    };

    super(data);

    this.configureView();
  }

  configureView() {}
}

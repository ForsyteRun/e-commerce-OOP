import { ElementParams } from "../../../util/element-creator";
import InputFieldCreator from "../../../util/input-field/input-field";
import View, { CSSClassesEnum, TagEnum } from "../../view";

export const enum FieldText {
  FIELD_TEXT_ONE = "поле для ввoдa1",
  FIELD_TEXT_TWO = "поле для ввoдa2",
}

export default class Home extends View {
  firstfield: string;
  secondfield: string;

  constructor() {
    const data: ElementParams = {
      tag: TagEnum.section,
      className: CSSClassesEnum.HOME,
      textContent: "",
      callback: () => null,
    };

    super(data);

    this.firstfield = "";
    this.secondfield = "";

    this.configureView();
  }

  configureView() {
    const paramsFirstInput: ElementParams = {
      tag: TagEnum.input,
      className: CSSClassesEnum.input,
      textContent: FieldText.FIELD_TEXT_ONE,
      callback: (event: Event) => this.keyupHandler(event, this.firstfield),
    };

    let inputCreator = new InputFieldCreator(paramsFirstInput);
    this.elementCreator.addInnerElement(inputCreator);

    const paramsSecondInput: ElementParams = {
      tag: TagEnum.input,
      className: CSSClassesEnum.input,
      textContent: FieldText.FIELD_TEXT_TWO,
      callback: (event: Event) => this.keyupHandler(event, this.secondfield),
    };

    inputCreator = new InputFieldCreator(paramsSecondInput);
    this.elementCreator.addInnerElement(inputCreator);
  }

  keyupHandler(event: Event, fieldName: string): any {
    if (event.target instanceof HTMLInputElement) {
      //@ts-ignore
      this[fieldName] = event.target.value;
    }
  }
}

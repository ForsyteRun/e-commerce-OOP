import { CSSClassesEnum } from "../../view/view";
import ElementCreator, { ElementParams } from "../element-creator";

export default class InputFieldCreator extends ElementCreator {
  inputElement: any;
  labelElement: any;

  createElement(param: ElementParams): void {
    this.element = document.createElement("div");
    this.setCSSClasses(CSSClassesEnum.CONTAINER);
    this.setCSSClasses(param.className);
    this.setCallback(param.callback);

    this.inputElement = document.createElement("input");

    this.labelElement = document.createElement("label");

    this.setTextContent(param.textContent);
  }

  setTextContent(textContent: string): void {
    this.labelElement.textContent = textContent;
  }

  setCallback(callback: (event: Event) => HTMLElement | null): void {
    this.element?.addEventListener("keyup", (event: Event) => callback(event));
  }
}

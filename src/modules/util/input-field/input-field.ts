import { CSSClassesEnum, ElementParams } from '../../../types';
import ElementCreator from '../element-creator';

export default class InputFieldCreator extends ElementCreator {
  inputElement: HTMLInputElement | undefined;

  labelElement: HTMLLabelElement | undefined;

  // TODO:destruction
  // TODO:method dopuska
  createElement(param: ElementParams): void {
    this.element = document.createElement('div');
    this.setCSSClasses(CSSClassesEnum.CONTAINER);
    this.setCSSClasses(param.className);

    this.setCallback(param.callback);

    this.inputElement = document.createElement('input');
    this.labelElement = document.createElement('label');

    this.setTextContent(param.textContent);

    this.element.append(this.labelElement, this.inputElement);
  }

  public setTextContent(text: string): void {
    if (this.labelElement) {
      this.labelElement.textContent = text;
    }
  }

  public setCallback(callback: (event: Event) => HTMLElement | null): void {
    this.element?.addEventListener('keyup', (event: Event) => callback(event));
    console.log(222);
  }
}

import { CSSClassesEnum, ElementParams } from '../../../types';
import ElementCreator from '../element-creator';

export default class InputFieldCreator extends ElementCreator {
  inputElement: HTMLInputElement | undefined;

  labelElement: HTMLLabelElement | undefined;

  createElement(param: ElementParams): void {
    this.element = document.createElement('div');
    this.element.classList.add(CSSClassesEnum.CONTAINER);
    this.element.classList.add(param.className);

    this.setCallback(param.callback);

    this.inputElement = document.createElement('input');
    this.labelElement = document.createElement('label');

    this.setTextContent(param.textContent);

    this.element.append(this.labelElement, this.inputElement);
  }

  public setTextContent(textContent: string): void {
    if (this.labelElement) {
      this.labelElement.textContent = textContent;
    }
  }

  public setCallback(callback: (event: Event) => HTMLElement | null): void {
    this.element?.addEventListener('keyup', (event: Event) => callback(event));
  }
}

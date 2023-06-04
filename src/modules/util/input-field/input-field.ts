import { CSSClassesEnum } from '../../view/view';
import ElementCreator, { ElementParams } from '../element-creator';

export default class InputFieldCreator extends ElementCreator {
  inputElement: any;

  labelElement: any;

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

  setTextContent(textContent: string) {
    this.labelElement.textContent = textContent;
  }

  setCallback(callback: (event: Event) => HTMLElement | null): void {
    this.element?.addEventListener('keyup', (event: Event) => callback(event));
  }
}

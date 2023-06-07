import { ElementParams } from '../../types';

export default class ElementCreator {
  element: HTMLElement | null = null;

  constructor(param: ElementParams) {
    this.createElement(param);
  }

  // TODO:методы доступа
  // TODO:деструктуризация
  protected createElement(param: ElementParams): void {
    this.element = document.createElement(param.tag);
    this.setCSSClasses(param.className);
    this.setTextContent(param.textContent);
    this.setCallback(param.callback);
  }

  addInnerElement(elem: HTMLElement | ElementCreator): void {
    if (elem instanceof ElementCreator) {
      this.element?.append(elem.getElement() as Node);
    } else {
      this.element?.append(elem as Node);
    }
  }

  setCSSClasses(cssClasses: string): void {
    this.element?.classList.add(cssClasses);
  }

  setTextContent(textContent: string): void {
    if (this.element) {
      this.element.textContent = textContent;
    }
  }

  setCallback(callback: (event: Event) => HTMLElement | null): void {
    if (typeof callback === 'function') {
      this.element?.addEventListener('click', (event: Event) => callback(event));
    }
  }

  getElement(): HTMLElement | null {
    return this.element;
  }
}

export interface ElementParams {
  tag: string;
  className: Array<string>;
  textContent: string;
  callback: (event: Event) => HTMLElement | null;
}

export default class ElementCreator {
  element: HTMLElement | null;

  constructor(param: ElementParams) {
    this.element = null;
    this.createElement(param);
  }

  createElement(param: ElementParams): void {
    this.element = document.createElement(param.tag);
    this.setCSSClasses(param.className);
    this.setTextContent(param.textContent);
    this.setCallback(param.callback);
  }

  getElement(): HTMLElement | null {
    return this.element;
  }

  setCSSClasses(cssClasses: Array<string>): void {
    cssClasses.forEach((el: string) => this.element?.classList.add(el));
  }

  setTextContent(textContent: string): void {
    if (this.element) {
      this.element.textContent = textContent;
    }
  }

  setCallback(callback: (event: Event) => void): void {
    this.element?.addEventListener("click", (event: Event) => callback(event));
  }
}

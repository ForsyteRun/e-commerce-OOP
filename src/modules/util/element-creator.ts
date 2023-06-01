export interface ElementParams {
  tag: string;
  className: string;
  textContent: string;
  callback: (event: Event) => HTMLElement | null;
}

export interface ElementCreatorType {
  element: HTMLElement | null;
  createElement(param: ElementParams): void;
  getElement: () => HTMLElement | null;
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

  setCSSClasses(cssClasses: string): void {
    this.element?.classList.add(cssClasses);
  }

  setTextContent(textContent: string): void {
    if (this.element) {
      this.element.textContent = textContent;
    }
  }

  setCallback(callback: (event: Event) => HTMLElement | null): void {
    this.element?.addEventListener("click", (event: Event) => callback(event));
  }
}

interface ElementParams {
  tag: string;
  className: Array<string>;
  textContent: string;
  callback: () => HTMLElement;
}

type ElementType = HTMLElement | null;

export default class ElementCreator {
  element: ElementType;

  constructor(param: ElementParams) {
    this.element = null;
    this.createElement(param);
  }

  createElement(param: ElementParams) {
    this.element = document.createElement(param.tag);
  }
}

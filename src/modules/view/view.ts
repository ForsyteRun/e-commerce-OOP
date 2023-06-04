import ElementCreator, { ElementParams } from '../util/element-creator';

export default class View {
  elementCreator: ElementCreator;

  constructor(nodeParams: ElementParams) {
    this.elementCreator = this.createView(nodeParams);
  }

  getHTMLElement(): HTMLElement | null {
    return this.elementCreator.getElement();
  }

  createView({ tag, className, textContent, callback = () => null }: ElementParams): ElementCreator {
    const data: ElementParams = {
      tag,
      className,
      textContent,
      callback,
    };

    const elementCreator: ElementCreator = new ElementCreator(data);
    return elementCreator;
  }
}

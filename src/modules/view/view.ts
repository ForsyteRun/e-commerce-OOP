import { ElementParams } from '../../types';
import ElementCreator from '../util/element-creator';

export default abstract class View {
  protected elementCreator: ElementCreator;

  constructor(params: ElementParams) {
    this.elementCreator = this.createView(params);
  }

  getHTMLElement(): HTMLElement | null {
    return this.elementCreator.getElement();
  }

  // TODO:callback null or function, not return null
  private createView({ tag, className, textContent, callback }: ElementParams): ElementCreator {
    const data: ElementParams = {
      tag,
      className,
      textContent,
      callback,
    };

    return new ElementCreator(data);
  }
}

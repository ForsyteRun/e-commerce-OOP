import { CSSClassesEnum, ElementParams, TagEnum, TextEnum } from '../../../types';
import View from '../view';

export default class Main extends View {
  constructor() {
    const data: ElementParams = {
      tag: TagEnum.main,
      className: CSSClassesEnum.main,
      textContent: TextEnum.mainText,
      callback: () => null,
    };

    super(data);
  }

  setContent(view: View): void {
    const element: HTMLElement | null = view.getHTMLElement();
    const currentElement: HTMLElement | null = this.elementCreator.getElement();

    while (currentElement?.firstElementChild) {
      currentElement?.firstElementChild.remove();
    }

    this.elementCreator.addInnerElement(element as HTMLElement);
  }
}

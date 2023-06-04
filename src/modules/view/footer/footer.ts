import { CSSClassesEnum, ElementParams, TagEnum, TextEnum } from '../../../types';
import View from '../view';

export default class Footer extends View {
  constructor() {
    const data: ElementParams = {
      tag: TagEnum.footer,
      className: CSSClassesEnum.footer,
      textContent: TextEnum.footerText,
      callback: () => null,
    };

    super(data);
  }
}

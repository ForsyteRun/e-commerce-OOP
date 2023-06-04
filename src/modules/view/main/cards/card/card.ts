import { CardInfoType } from '../../../../../data/data';
import { CSSClassesEnum, TagEnum, TextEnum } from '../../../../../types';
import ElementCreator, { ElementParams } from '../../../../util/element-creator';
import View from '../../../view';

export default class Card extends View {
  constructor(card: CardInfoType) {
    const data: ElementParams = {
      tag: TagEnum.div,
      className: CSSClassesEnum.CARD,
      textContent: '',
      callback: () => null,
    };

    super(data);

    this.configureView(card);
  }

  configureView(card: CardInfoType) {
    const labelData: ElementParams = {
      tag: TagEnum.section,
      className: CSSClassesEnum.FIELD,
      textContent: card.name,
      callback: () => null,
    };

    const labelCreator: ElementCreator = new ElementCreator(labelData);

    const buttonData: ElementParams = {
      tag: TagEnum.button,
      className: CSSClassesEnum.BUTTON,
      textContent: TextEnum.BTN_TEXT,
      callback: () => null,
    };

    const buttonCreator: ElementCreator = new ElementCreator(buttonData);

    this.elementCreator.addInnerElement(labelCreator);
    this.elementCreator.addInnerElement(buttonCreator);
  }
}

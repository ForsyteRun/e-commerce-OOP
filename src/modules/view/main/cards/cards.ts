import { CardInfoType, cardsInfo } from '../../../../data/data';
import { ElementParams } from '../../../util/element-creator';
import View, { CSSClassesEnum, TagEnum } from '../../view';
import Card from './card/card';

export default class Cards extends View {
  constructor() {
    const data: ElementParams = {
      tag: TagEnum.section,
      className: CSSClassesEnum.cards,
      textContent: '',
      callback: () => null,
    };

    super(data);

    this.configureView();
  }

  configureView() {
    cardsInfo.forEach((card: CardInfoType) => {
      const cardView = new Card(card);

      this.elementCreator.addInnerElement(cardView.getHTMLElement() as HTMLElement);
    });
  }
}

const fb = (a: number, b: number) => {
  return a + b;
};

fb(2, 4);

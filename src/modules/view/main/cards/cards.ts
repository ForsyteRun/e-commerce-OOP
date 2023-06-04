import { CardInfoType, cardsInfo } from '../../../../data/data';
import { CSSClassesEnum, ElementParams, TagEnum } from '../../../../types';
import View from '../../view';
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

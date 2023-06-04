import { CSSClassesEnum, ElementParams, LinkNameEnum, TagEnum, TextEnum } from '../../../types';
import ElementCreator from '../../util/element-creator';
import Cards from '../main/cards/cards';
import Home from '../main/home/home';
import Main from '../main/main';
import View from '../view';
import LinkView from './link/link-view';

export interface PagesType {
  name: string;
  callback: () => void;
}

export default class Header extends View {
  start_page_number: number;

  linkElements: Array<LinkView> = [];

  constructor(mainComponent: Main) {
    const data: ElementParams = {
      tag: TagEnum.header,
      className: CSSClassesEnum.header,
      textContent: TextEnum.headerText,
      callback: () => null,
    };
    super(data);
    this.linkElements = [];
    this.start_page_number = 0;
    this.configureView(mainComponent);
  }

  configureView(mainComponent: Main): void {
    const data: ElementParams = {
      tag: TagEnum.nav,
      className: CSSClassesEnum.nav,
      textContent: '',
      callback: () => null,
    };

    const elementNav: ElementCreator = new ElementCreator(data);

    this.elementCreator.addInnerElement(elementNav);

    const pages = this.getPages(mainComponent);

    pages.forEach((page: PagesType, index: number) => {
      const createLink: LinkView = new LinkView(page, this.linkElements);
      elementNav.addInnerElement(createLink.getHTMLElement() as HTMLElement);

      this.linkElements.push(createLink);

      if (index === this.start_page_number) {
        page.callback();
        createLink.setSelectedStatus();
      }
    });
  }

  getPages(mainComponent: Main): PagesType[] {
    const homeView = new Home();
    const cardsView = new Cards();

    const pages: PagesType[] = [
      {
        name: LinkNameEnum.main,
        callback: () => mainComponent.setContent(homeView),
      },
      {
        name: LinkNameEnum.products,
        callback: () => mainComponent.setContent(cardsView),
      },
    ];

    return pages;
  }
}

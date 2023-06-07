import { CSSClassesEnum, ElementParams, LinkNameEnum, TagEnum, TextEnum } from '../../../types';
import ElementCreator from '../../util/element-creator';
import Cards from '../main/cards/cards';
import Home from '../main/home/home';
import Main from '../main/main';
import View from '../view';
import LinkView from './link/link-view';

// TODO:to types
export interface PagesType {
  name: string;
  callback: () => void; // TODO: null
}

export default class Header extends View {
  START_PAGE_INDEX = 0;

  linkElements: Array<LinkView> = [];

  constructor(mainComponent: Main) {
    const headerParams: ElementParams = {
      tag: TagEnum.header,
      className: CSSClassesEnum.header,
      textContent: TextEnum.headerText,
      callback: () => null,
    };
    super(headerParams);
    this.configureView(mainComponent);
  }

  configureView(mainComponent: Main): void {
    const navParams: ElementParams = {
      tag: TagEnum.nav,
      className: CSSClassesEnum.nav,
      textContent: '',
      callback: () => null, // TODO:null
    };

    const elementNav: ElementCreator = new ElementCreator(navParams);

    this.elementCreator.addInnerElement(elementNav);

    const pages = this.getPages(mainComponent);

    pages.forEach((page: PagesType, index: number) => {
      const createLink: LinkView = new LinkView(page, this.linkElements);
      elementNav.addInnerElement(createLink.getHTMLElement() as HTMLElement);

      this.linkElements.push(createLink);

      if (index === this.START_PAGE_INDEX) {
        // page.callback(); // todo:NEED?
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

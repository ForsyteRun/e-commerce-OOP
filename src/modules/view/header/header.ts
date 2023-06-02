import ElementCreator, { ElementParams } from "../../util/element-creator";
import View, { CSSClassesEnum, LinkNameEnum, TagEnum, TextEnum } from "../view";
import LinkView from "./link/link-view";

export default class Header extends View {
  start_page_number: number;
  linkElements: Array<LinkView> = [];

  constructor() {
    const data: ElementParams = {
      tag: TagEnum.header,
      className: CSSClassesEnum.header,
      textContent: TextEnum.headerText,
      callback: () => null,
    };
    super(data);
    this.linkElements = [];
    this.start_page_number = 0;
    this.configureView();
  }

  configureView() {
    const data: ElementParams = {
      tag: TagEnum.nav,
      className: CSSClassesEnum.nav,
      textContent: "",
      callback: () => null,
    };

    const elementNav: ElementCreator = new ElementCreator(data);

    this.elementCreator.addInnerElement(elementNav);

    interface PagesType {
      name: string;
      callback: () => void;
    }

    const pages: PagesType[] = [
      {
        name: LinkNameEnum.main,
        callback: () => {
          console.log(111);
        },
      },
      {
        name: LinkNameEnum.products,
        callback: () => {
          console.log(111);
        },
      },
    ];

    pages.forEach((page: PagesType, index: number) => {
      const createLink: LinkView = new LinkView(page.name, this.linkElements);
      elementNav.addInnerElement(createLink.getHTMLElement() as HTMLElement);

      this.linkElements.push(createLink);

      if (index === this.start_page_number) {
        createLink.setSelectedStatus();
      }
    });
  }
}

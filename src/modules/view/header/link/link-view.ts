import { CSSClassesEnum, ElementParams, TagEnum } from '../../../../types';
import View from '../../view';
import { PagesType } from '../header';

export default class LinkView extends View {
  linkElements: Array<LinkView>;

  constructor(Pages: PagesType, linkElements: Array<LinkView>) {
    const data: ElementParams = {
      tag: TagEnum.link,
      className: CSSClassesEnum.link,
      textContent: Pages.name,
      // @ts-ignore
      callback: Pages.callback,
    };
    super(data);

    this.linkElements = linkElements;
    this.configureView();
  }

  setSelectedStatus() {
    this.linkElements.forEach((link: LinkView) => link.setNotSelectedStatus());

    const element: HTMLElement | null = this.elementCreator.getElement();
    element?.classList.add(CSSClassesEnum.linkSelected);
  }

  setNotSelectedStatus() {
    const element: HTMLElement | null = this.elementCreator.getElement();
    element?.classList.remove(CSSClassesEnum.linkSelected);
  }

  configureView() {
    const element: HTMLElement | null = this.elementCreator.getElement();
    element?.addEventListener('click', this.setSelectedStatus.bind(this));
  }
}

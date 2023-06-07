import { CSSClassesEnum, ElementParams, TagEnum } from '../../../../types';
import View from '../../view';
import { PagesType } from '../header';

export default class LinkView extends View {
  linkElements: Array<LinkView>;

  constructor(page: PagesType, linkElements: Array<LinkView>) {
    const linkParams: ElementParams = {
      tag: TagEnum.link,
      className: CSSClassesEnum.link,
      textContent: page.name,
      callback: () => null,
    };
    super(linkParams);

    this.linkElements = linkElements;
    this.configureView();
  }

  setSelectedStatus(): void {
    this.linkElements.forEach((link: LinkView) => link.setNotSelectedStatus());

    const element: HTMLElement | null = this.elementCreator.getElement();
    element?.classList.add(CSSClassesEnum.linkSelected);
  }

  setNotSelectedStatus(): void {
    const element: HTMLElement | null = this.elementCreator.getElement();
    element?.classList.remove(CSSClassesEnum.linkSelected);
  }

  configureView(): void {
    const element: HTMLElement | null = this.elementCreator.getElement();
    element?.addEventListener('click', this.setSelectedStatus.bind(this));
  }
}

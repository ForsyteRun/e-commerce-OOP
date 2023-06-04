import { ElementParams } from '../../../util/element-creator';
import View, { CSSClassesEnum, TagEnum } from '../../view';
import { PagesType } from '../header';

export default class LinkView extends View {
  linkElements: Array<LinkView>;

  constructor(PagesType: PagesType, linkElements: Array<LinkView>) {
    const data: ElementParams = {
      tag: TagEnum.link,
      className: CSSClassesEnum.link,
      textContent: PagesType.name,
      // @ts-ignore
      callback: PagesType.callback,
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

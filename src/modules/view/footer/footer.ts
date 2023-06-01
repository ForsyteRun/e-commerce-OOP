import ElementCreator, { ElementParams } from "../../util/element-creator";

export interface CSSClassesType {
  FOOTER: "footer";
}

interface ResultObjType {
  element: HTMLElement | null;
}

const CSSClasses: CSSClassesType = {
  FOOTER: "footer",
};

const TEXT = "Good morning Footer!";

export default class FooterView {
  elementCreator: ResultObjType;

  constructor() {
    this.elementCreator = this.createView();
  }

  createView(): ResultObjType {
    const params: ElementParams = {
      tag: "footer",
      className: [CSSClasses.FOOTER],
      textContent: TEXT,
      callback: () => null,
    };

    const elementCreator: ResultObjType = new ElementCreator(params);
    return elementCreator;
  }
}

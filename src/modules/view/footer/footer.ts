export interface CSSClassesType {
  FOOTER: "footer";
}

const CSSClasses: CSSClassesType = {
  FOOTER: "footer",
};

const TEXT = "Good morning Footer!";

export default class FooterView {
  constructor() {}

  createView(): HTMLElement {
    const element: HTMLElement = document.createElement("footer");

    element.textContent = TEXT;
    element.classList.add(CSSClasses.FOOTER);
    return element;
  }
}

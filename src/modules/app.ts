import FooterView, { FooterViewType } from "./view/footer/footer";

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const footerView: FooterViewType = new FooterView();

    document.body.append(footerView.getHTMLElement() as Node);
  }
}

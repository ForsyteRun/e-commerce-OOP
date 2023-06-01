// import ElementCreator, { ElementCreatorType, ElementParams } from "../../util/element-creator";
// import { CSSClassesEnum, TextEnum } from "../footer/footer";

// export default class MainView {
//   elementCreator: ElementCreatorType;

//   constructor() {
//     this.elementCreator = this.createView();
//   }

//   getHTMLElement(): HTMLElement | null {
//     return this.elementCreator.getElement();
//   }

//   createView(): ElementCreatorType {
//     const params: ElementParams = {
//       tag: "main",
//       className: [CSSClassesEnum.main],
//       textContent: TextEnum.mainText,
//       callback: () => null,
//     };

//     const elementCreator: ElementCreatorType = new ElementCreator(params);
//     return elementCreator;
//   }
// }

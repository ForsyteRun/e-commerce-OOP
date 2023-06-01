// import ElementCreator, { ElementCreatorType, ElementParams } from "../../util/element-creator";

// export default class Footer extends View {
//   elementCreator: ElementCreatorType;

//   constructor() {
//     this.elementCreator = this.createView();
//   }

//   getHTMLElement(): HTMLElement | null {
//     return this.elementCreator.getElement();
//   }

//   createView(): ElementCreatorType {
//     const params: ElementParams = {
//       tag: "footer",
//       className: [CSSClassesEnum.footer],
//       textContent: TextEnum.footerText,
//       callback: () => null,
//     };

//     const elementCreator: ElementCreatorType = new ElementCreator(params);
//     return elementCreator;
//   }
// }

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("../view");
class Main extends view_1.default {
    constructor() {
        const data = {
            tag: "main",
            className: "main",
            textContent: " ",
            callback: () => null,
        };
        super(data);
    }
    setContent(view) {
        const element = view.getHTMLElement();
        const currentElement = this.elementCreator.getElement();
        while (currentElement === null || currentElement === void 0 ? void 0 : currentElement.firstElementChild) {
            currentElement === null || currentElement === void 0 ? void 0 : currentElement.firstElementChild.remove();
        }
        this.elementCreator.addInnerElement(element);
    }
}
exports.default = Main;

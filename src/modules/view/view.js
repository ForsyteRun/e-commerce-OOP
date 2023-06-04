"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_creator_1 = require("../util/element-creator");
class View {
    constructor(nodeParams) {
        this.elementCreator = this.createView(nodeParams);
    }
    getHTMLElement() {
        return this.elementCreator.getElement();
    }
    createView({ tag, className, textContent, callback = () => null }) {
        const data = {
            tag,
            className,
            textContent,
            callback,
        };
        const elementCreator = new element_creator_1.default(data);
        return elementCreator;
    }
}
exports.default = View;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_creator_1 = require("../../../../util/element-creator");
const view_1 = require("../../../view");
class Card extends view_1.default {
    constructor(card) {
        const data = {
            tag: "div",
            className: "card",
            textContent: '',
            callback: () => null,
        };
        super(data);
        this.configureView(card);
    }
    configureView(card) {
        const labelData = {
            tag: "section",
            className: "card__field",
            textContent: card.name,
            callback: () => null,
        };
        const labelCreator = new element_creator_1.default(labelData);
        const buttonData = {
            tag: "button",
            className: "card__button",
            textContent: "\u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435..",
            callback: () => null,
        };
        const buttonCreator = new element_creator_1.default(buttonData);
        this.elementCreator.addInnerElement(labelCreator);
        this.elementCreator.addInnerElement(buttonCreator);
    }
}
exports.default = Card;

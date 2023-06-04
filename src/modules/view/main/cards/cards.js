"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../../../data/data");
const view_1 = require("../../view");
const card_1 = require("./card/card");
class Cards extends view_1.default {
    constructor() {
        const data = {
            tag: "section",
            className: "cards",
            textContent: "",
            callback: () => null,
        };
        super(data);
        this.configureView();
    }
    configureView() {
        data_1.cardsInfo.forEach((card) => {
            const cardView = new card_1.default(card);
            this.elementCreator.addInnerElement(cardView.getHTMLElement());
        });
    }
}
exports.default = Cards;

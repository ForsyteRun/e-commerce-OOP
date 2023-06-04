"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_creator_1 = require("../../util/element-creator");
const cards_1 = require("../main/cards/cards");
const home_1 = require("../main/home/home");
const view_1 = require("../view");
const link_view_1 = require("./link/link-view");
class Header extends view_1.default {
    constructor(mainComponent) {
        const data = {
            tag: "header",
            className: "header",
            textContent: "",
            callback: () => null,
        };
        super(data);
        this.linkElements = [];
        this.linkElements = [];
        this.start_page_number = 0;
        this.configureView(mainComponent);
    }
    configureView(mainComponent) {
        const data = {
            tag: "nav",
            className: "nav",
            textContent: '',
            callback: () => null,
        };
        const elementNav = new element_creator_1.default(data);
        this.elementCreator.addInnerElement(elementNav);
        const pages = this.getPages(mainComponent);
        pages.forEach((page, index) => {
            const createLink = new link_view_1.default(page, this.linkElements);
            elementNav.addInnerElement(createLink.getHTMLElement());
            this.linkElements.push(createLink);
            if (index === this.start_page_number) {
                page.callback();
                createLink.setSelectedStatus();
            }
        });
    }
    getPages(mainComponent) {
        const homeView = new home_1.default();
        const cardsView = new cards_1.default();
        const pages = [
            {
                name: "\u0433\u043B\u0430\u0432\u043D\u0430\u044F",
                callback: () => mainComponent.setContent(homeView),
            },
            {
                name: "\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B",
                callback: () => mainComponent.setContent(cardsView),
            },
        ];
        return pages;
    }
}
exports.default = Header;

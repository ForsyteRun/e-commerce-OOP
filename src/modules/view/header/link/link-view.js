"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("../../view");
class LinkView extends view_1.default {
    constructor(Pages, linkElements) {
        const data = {
            tag: "a",
            className: "nav-link",
            textContent: Pages.name,
            callback: Pages.callback,
        };
        super(data);
        this.linkElements = linkElements;
        this.configureView();
    }
    setSelectedStatus() {
        this.linkElements.forEach((link) => link.setNotSelectedStatus());
        const element = this.elementCreator.getElement();
        element === null || element === void 0 ? void 0 : element.classList.add("link__selected");
    }
    setNotSelectedStatus() {
        const element = this.elementCreator.getElement();
        element === null || element === void 0 ? void 0 : element.classList.remove("link__selected");
    }
    configureView() {
        const element = this.elementCreator.getElement();
        element === null || element === void 0 ? void 0 : element.addEventListener('click', this.setSelectedStatus.bind(this));
    }
}
exports.default = LinkView;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const footer_1 = require("./view/footer/footer");
const header_1 = require("./view/header/header");
const home_1 = require("./view/main/home/home");
const main_1 = require("./view/main/main");
class App {
    constructor() {
        this.createView();
    }
    createView() {
        const footerView = new footer_1.default();
        const headerView = new header_1.default(new main_1.default());
        const mainView = new main_1.default();
        mainView.setContent(new home_1.default());
        document.body.append(headerView.getHTMLElement());
        document.body.append(mainView.getHTMLElement());
        document.body.append(footerView.getHTMLElement());
    }
}
exports.default = App;

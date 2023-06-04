"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("../view");
class Footer extends view_1.default {
    constructor() {
        const data = {
            tag: "footer",
            className: "footer",
            textContent: " ",
            callback: () => null,
        };
        super(data);
    }
}
exports.default = Footer;

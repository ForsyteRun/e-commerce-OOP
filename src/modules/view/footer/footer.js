"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_creator_1 = require("../../util/element-creator");
var CSSClasses = {
    FOOTER: "footer",
};
var TEXT = "Good morning Footer!";
var FooterView = (function () {
    function FooterView() {
        this.elementCreator = this.createView();
    }
    FooterView.prototype.createView = function () {
        var params = {
            tag: "footer",
            className: [CSSClasses.FOOTER],
            textContent: TEXT,
            callback: function () { return null; },
        };
        var elementCreator = new element_creator_1.default(params);
        return elementCreator;
    };
    return FooterView;
}());
exports.default = FooterView;

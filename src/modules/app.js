"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var footer_1 = require("./view/footer/footer");
var App = (function () {
    function App() {
        this.createView();
    }
    App.prototype.createView = function () {
        var footerView = new footer_1.default();
        document.body.append(footerView.getHTMLElement());
    };
    return App;
}());
exports.default = App;

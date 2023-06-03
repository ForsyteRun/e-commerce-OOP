var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import ElementCreator from "../../../../util/element-creator";
import View from "../../../view";
var Card = (function (_super) {
    __extends(Card, _super);
    function Card(card) {
        var _this = this;
        var data = {
            tag: "div",
            className: "card",
            textContent: "",
            callback: function () { return null; },
        };
        _this = _super.call(this, data) || this;
        _this.configureView(card);
        return _this;
    }
    Card.prototype.configureView = function (card) {
        var labelData = {
            tag: "section",
            className: "card__field",
            textContent: card.name,
            callback: function () { return null; },
        };
        var labelCreator = new ElementCreator(labelData);
        var buttonData = {
            tag: "button",
            className: "card__button",
            textContent: "\u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435..",
            callback: function () { return null; },
        };
        var buttonCreator = new ElementCreator(buttonData);
        this.elementCreator.addInnerElement(labelCreator);
        this.elementCreator.addInnerElement(buttonCreator);
    };
    return Card;
}(View));
export default Card;

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
import { cardsInfo } from "../../../../data/data";
import View from "../../view";
import Card from "./card/card";
var Cards = (function (_super) {
    __extends(Cards, _super);
    function Cards() {
        var _this = this;
        var data = {
            tag: "section",
            className: "cards",
            textContent: "",
            callback: function () { return null; },
        };
        _this = _super.call(this, data) || this;
        _this.configureView();
        return _this;
    }
    Cards.prototype.configureView = function () {
        var _this = this;
        cardsInfo.forEach(function (card) {
            var cardView = new Card(card);
            _this.elementCreator.addInnerElement(cardView.getHTMLElement());
        });
    };
    return Cards;
}(View));
export default Cards;

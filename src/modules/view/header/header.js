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
import ElementCreator from "../../util/element-creator";
import View from "../view";
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = this;
        var data = {
            tag: "header",
            className: "header",
            textContent: "Good morning Header!",
            callback: function () { return null; },
        };
        _this = _super.call(this, data) || this;
        _this.configureView();
        return _this;
    }
    Header.prototype.configureView = function () {
        var data = {
            tag: "nav",
            className: "nav",
            textContent: "",
            callback: function () { return null; },
        };
        var elementCreator = new ElementCreator(data);
        this.elementCreator.addInnerElement(elementCreator);
    };
    return Header;
}(View));
export default Header;

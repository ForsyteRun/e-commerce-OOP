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
import LinkView from "./link/link-view";
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = this;
        var data = {
            tag: "header",
            className: "header",
            textContent: "",
            callback: function () { return null; },
        };
        _this = _super.call(this, data) || this;
        _this.linkElements = [];
        _this.linkElements = [];
        _this.start_page_number = 0;
        _this.configureView();
        return _this;
    }
    Header.prototype.configureView = function () {
        var _this = this;
        var data = {
            tag: "nav",
            className: "nav",
            textContent: "",
            callback: function () { return null; },
        };
        var elementNav = new ElementCreator(data);
        this.elementCreator.addInnerElement(elementNav);
        var pages = [
            {
                name: "\u0433\u043B\u0430\u0432\u043D\u0430\u044F",
                callback: function () {
                    console.log(111);
                },
            },
            {
                name: "\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B",
                callback: function () {
                    console.log(111);
                },
            },
        ];
        pages.forEach(function (page, index) {
            var createLink = new LinkView(page.name, _this.linkElements);
            elementNav.addInnerElement(createLink.getHTMLElement());
            _this.linkElements.push(createLink);
            if (index === _this.start_page_number) {
                createLink.setSelectedStatus();
            }
        });
    };
    return Header;
}(View));
export default Header;

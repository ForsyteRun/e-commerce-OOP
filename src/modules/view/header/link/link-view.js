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
import View from "../../view";
var LinkView = (function (_super) {
    __extends(LinkView, _super);
    function LinkView(text, linkElements) {
        var _this = this;
        var data = {
            tag: "a",
            className: "nav-link",
            textContent: text,
            callback: function () { return null; },
        };
        _this = _super.call(this, data) || this;
        _this.linkElements = linkElements;
        return _this;
    }
    LinkView.prototype.setSelectedStatus = function () {
        this.linkElements.forEach(function (link) { return link.setNotSelectedStatus(); });
        var element = this.elementCreator.getElement();
        element === null || element === void 0 ? void 0 : element.classList.add("link__selected");
    };
    LinkView.prototype.setNotSelectedStatus = function () {
        var element = this.elementCreator.getElement();
        element === null || element === void 0 ? void 0 : element.classList.remove("link__selected");
    };
    return LinkView;
}(View));
export default LinkView;

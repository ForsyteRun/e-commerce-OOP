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
export var FieldText;
(function (FieldText) {
    FieldText["FIELD_TEXT_ONE"] = "\u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432o\u0434a1";
    FieldText["FIELD_TEXT_TWO"] = "\u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432o\u0434a2";
})(FieldText || (FieldText = {}));
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var data = {
            tag: "section",
            className: "home",
            textContent: "",
            callback: function () { return null; },
        };
        return _super.call(this, data) || this;
    }
    Home.prototype.configureView = function () { };
    return Home;
}(View));
export default Home;

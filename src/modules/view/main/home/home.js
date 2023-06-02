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
import InputFieldCreator from "../../../util/input-field/input-field";
import View from "../../view";
export var FieldText;
(function (FieldText) {
    FieldText["FIELD_TEXT_ONE"] = "\u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432o\u0434a1";
    FieldText["FIELD_TEXT_TWO"] = "\u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432o\u0434a2";
})(FieldText || (FieldText = {}));
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = this;
        var data = {
            tag: "section",
            className: "home",
            textContent: "",
            callback: function () { return null; },
        };
        _this = _super.call(this, data) || this;
        _this.firstfield = "";
        _this.secondfield = "";
        return _this;
    }
    Home.prototype.configureView = function () {
        var _this = this;
        var paramsFirstInput = {
            tag: "input",
            className: "input",
            textContent: "\u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432o\u0434a1",
            callback: function (event) { return _this.keyupHandler(event, _this.firstfield); },
        };
        var inputCreator = new InputFieldCreator(paramsFirstInput);
        this.elementCreator.addInnerElement(inputCreator);
        var paramsSecondInput = {
            tag: "input",
            className: "input",
            textContent: "\u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432o\u0434a2",
            callback: function (event) { return _this.keyupHandler(event, _this.secondfield); },
        };
        inputCreator = new InputFieldCreator(paramsSecondInput);
        this.elementCreator.addInnerElement(inputCreator);
    };
    Home.prototype.keyupHandler = function (event, fieldName) {
        if (event.target instanceof HTMLInputElement) {
            this[fieldName] = event.target.value;
        }
    };
    return Home;
}(View));
export default Home;

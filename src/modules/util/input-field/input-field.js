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
import ElementCreator from "../element-creator";
var InputFieldCreator = (function (_super) {
    __extends(InputFieldCreator, _super);
    function InputFieldCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputFieldCreator.prototype.createElement = function (param) {
        this.element = document.createElement("div");
        this.element.classList.add("container");
        this.element.classList.add(param.className);
        this.setCallback(param.callback);
        this.inputElement = document.createElement("input");
        this.labelElement = document.createElement("label");
        this.setTextContent(param.textContent);
        this.element.append(this.labelElement, this.inputElement);
    };
    InputFieldCreator.prototype.setTextContent = function (textContent) {
        this.labelElement.textContent = textContent;
    };
    InputFieldCreator.prototype.setCallback = function (callback) {
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.addEventListener("keyup", function (event) { return callback(event); });
    };
    return InputFieldCreator;
}(ElementCreator));
export default InputFieldCreator;

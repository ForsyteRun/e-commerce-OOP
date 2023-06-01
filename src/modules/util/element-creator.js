var ElementCreator = (function () {
    function ElementCreator(param) {
        this.element = null;
        this.createElement(param);
    }
    ElementCreator.prototype.createElement = function (param) {
        this.element = document.createElement(param.tag);
        this.setCSSClasses(param.className);
        this.setTextContent(param.textContent);
        this.setCallback(param.callback);
    };
    ElementCreator.prototype.getElement = function () {
        return this.element;
    };
    ElementCreator.prototype.addInnerElement = function (elem) {
        var _a, _b;
        if (elem instanceof ElementCreator) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.append(elem.getElement());
        }
        else {
            (_b = this.element) === null || _b === void 0 ? void 0 : _b.append(elem);
        }
    };
    ElementCreator.prototype.setCSSClasses = function (cssClasses) {
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.classList.add(cssClasses);
    };
    ElementCreator.prototype.setTextContent = function (textContent) {
        if (this.element) {
            this.element.textContent = textContent;
        }
    };
    ElementCreator.prototype.setCallback = function (callback) {
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) { return callback(event); });
    };
    return ElementCreator;
}());
export default ElementCreator;

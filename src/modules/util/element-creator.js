"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ElementCreator {
    constructor(param) {
        this.element = null;
        this.createElement(param);
    }
    createElement(param) {
        this.element = document.createElement(param.tag);
        this.setCSSClasses(param.className);
        this.setTextContent(param.textContent);
        this.setCallback(param.callback);
    }
    getElement() {
        return this.element;
    }
    addInnerElement(elem) {
        var _a, _b;
        if (elem instanceof ElementCreator) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.append(elem.getElement());
        }
        else {
            (_b = this.element) === null || _b === void 0 ? void 0 : _b.append(elem);
        }
    }
    setCSSClasses(cssClasses) {
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.classList.add(cssClasses);
    }
    setTextContent(textContent) {
        if (this.element) {
            this.element.textContent = textContent;
        }
    }
    setCallback(callback) {
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (event) => callback(event));
    }
}
exports.default = ElementCreator;

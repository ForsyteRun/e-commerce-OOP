"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_creator_1 = require("../element-creator");
class InputFieldCreator extends element_creator_1.default {
    createElement(param) {
        this.element = document.createElement('div');
        this.element.classList.add("container");
        this.element.classList.add(param.className);
        this.setCallback(param.callback);
        this.inputElement = document.createElement('input');
        this.labelElement = document.createElement('label');
        this.setTextContent(param.textContent);
        this.element.append(this.labelElement, this.inputElement);
    }
    setTextContent(textContent) {
        this.labelElement.textContent = textContent;
    }
    setCallback(callback) {
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.addEventListener('keyup', (event) => callback(event));
    }
}
exports.default = InputFieldCreator;

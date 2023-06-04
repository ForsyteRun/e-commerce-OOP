"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldText = void 0;
const input_field_1 = require("../../../util/input-field/input-field");
const view_1 = require("../../view");
var FieldText;
(function (FieldText) {
    FieldText["FIELD_TEXT_ONE"] = "\u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432o\u0434a1";
    FieldText["FIELD_TEXT_TWO"] = "\u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432o\u0434a2";
})(FieldText = exports.FieldText || (exports.FieldText = {}));
class Home extends view_1.default {
    constructor() {
        const data = {
            tag: "section",
            className: "home",
            textContent: "",
            callback: () => null,
        };
        super(data);
        this.firstfield = "";
        this.secondfield = "";
        this.configureView();
    }
    configureView() {
        const paramsFirstInput = {
            tag: "input",
            className: "input",
            textContent: "\u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432o\u0434a1",
            callback: (event) => this.keyupHandler(event, this.firstfield),
        };
        let inputCreator = new input_field_1.default(paramsFirstInput);
        this.elementCreator.addInnerElement(inputCreator);
        const paramsSecondInput = {
            tag: "input",
            className: "input",
            textContent: "\u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432o\u0434a2",
            callback: (event) => this.keyupHandler(event, this.secondfield),
        };
        inputCreator = new input_field_1.default(paramsSecondInput);
        this.elementCreator.addInnerElement(inputCreator);
    }
    keyupHandler(event, fieldName) {
        if (event.target instanceof HTMLInputElement) {
            this[fieldName] = event.target.value;
        }
    }
}
exports.default = Home;

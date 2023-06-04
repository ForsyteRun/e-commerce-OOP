"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./modules/app");
require("./sass/main.scss");
new app_1.default();
const isHTML = (el) => {
    return Boolean(el instanceof HTMLBodyElement && el instanceof HTMLElement);
};
const body = document.querySelector('body');
const head = document.querySelector('head');
console.log(isHTML(body), isHTML(head));
console.log(288787);

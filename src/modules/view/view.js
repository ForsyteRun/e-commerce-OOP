import ElementCreator from "../util/element-creator";
export var TagEnum;
(function (TagEnum) {
    TagEnum["header"] = "header";
    TagEnum["main"] = "main";
    TagEnum["footer"] = "footer";
})(TagEnum || (TagEnum = {}));
export var CSSClassesEnum;
(function (CSSClassesEnum) {
    CSSClassesEnum["header"] = "header";
    CSSClassesEnum["main"] = "main";
    CSSClassesEnum["footer"] = "footer";
})(CSSClassesEnum || (CSSClassesEnum = {}));
export var TextEnum;
(function (TextEnum) {
    TextEnum["headerText"] = "Good morning Header!";
    TextEnum["mainText"] = "Good morning Main!";
    TextEnum["footerText"] = "Good morning Foo999ter!";
})(TextEnum || (TextEnum = {}));
var View = (function () {
    function View(nodeParams) {
        this.elementCreator = this.createView(nodeParams);
    }
    View.prototype.getHTMLElement = function () {
        return this.elementCreator.getElement();
    };
    View.prototype.createView = function (_a) {
        var tag = _a.tag, className = _a.className, textContent = _a.textContent, _b = _a.callback, callback = _b === void 0 ? function () { return null; } : _b;
        var data = {
            tag: tag,
            className: className,
            textContent: textContent,
            callback: callback,
        };
        var elementCreator = new ElementCreator(data);
        return elementCreator;
    };
    return View;
}());
export default View;

import ElementCreator from "../util/element-creator";
export var TagEnum;
(function (TagEnum) {
    TagEnum["header"] = "header";
    TagEnum["nav"] = "nav";
    TagEnum["main"] = "main";
    TagEnum["footer"] = "footer";
    TagEnum["link"] = "a";
    TagEnum["section"] = "section";
    TagEnum["input"] = "input";
})(TagEnum || (TagEnum = {}));
export var CSSClassesEnum;
(function (CSSClassesEnum) {
    CSSClassesEnum["header"] = "header";
    CSSClassesEnum["nav"] = "nav";
    CSSClassesEnum["main"] = "main";
    CSSClassesEnum["footer"] = "footer";
    CSSClassesEnum["link"] = "nav-link";
    CSSClassesEnum["linkSelected"] = "link__selected";
    CSSClassesEnum["HOME"] = "home";
    CSSClassesEnum["CONTAINER"] = "container";
    CSSClassesEnum["input"] = "input";
})(CSSClassesEnum || (CSSClassesEnum = {}));
export var TextEnum;
(function (TextEnum) {
    TextEnum["headerText"] = "";
    TextEnum["mainText"] = " ";
    TextEnum["footerText"] = " ";
})(TextEnum || (TextEnum = {}));
export var LinkNameEnum;
(function (LinkNameEnum) {
    LinkNameEnum["main"] = "\u0433\u043B\u0430\u0432\u043D\u0430\u044F";
    LinkNameEnum["products"] = "\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B";
})(LinkNameEnum || (LinkNameEnum = {}));
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

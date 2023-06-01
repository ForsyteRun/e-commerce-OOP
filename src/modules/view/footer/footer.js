import ElementCreator from "../../util/element-creator";
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
    TextEnum["footerText"] = "Good morning Footer!";
})(TextEnum || (TextEnum = {}));
var FooterView = (function () {
    function FooterView() {
        this.elementCreator = this.createView();
    }
    FooterView.prototype.getHTMLElement = function () {
        return this.elementCreator.getElement();
    };
    FooterView.prototype.createView = function () {
        var params = {
            tag: "footer",
            className: ["footer"],
            textContent: "Good morning Footer!",
            callback: function () { return null; },
        };
        var elementCreator = new ElementCreator(params);
        return elementCreator;
    };
    return FooterView;
}());
export default FooterView;

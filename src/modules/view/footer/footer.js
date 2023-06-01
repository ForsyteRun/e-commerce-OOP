import ElementCreator from "../../util/element-creator";
var CSSClasses = {
    FOOTER: "footer",
};
var TEXT = "Good morning Footer!";
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
            className: [CSSClasses.FOOTER],
            textContent: TEXT,
            callback: function () { return null; },
        };
        var elementCreator = new ElementCreator(params);
        return elementCreator;
    };
    return FooterView;
}());
export default FooterView;

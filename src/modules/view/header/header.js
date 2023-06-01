import ElementCreator from "../../util/element-creator";
var CSSClasses = {
    HEADER: "header",
};
var TEXT = "Good morning Header!";
var HeaderView = (function () {
    function HeaderView() {
        this.elementCreator = this.createView();
    }
    HeaderView.prototype.getHTMLElement = function () {
        return this.elementCreator.getElement();
    };
    HeaderView.prototype.createView = function () {
        var params = {
            tag: "header",
            className: [CSSClasses.HEADER],
            textContent: TEXT,
            callback: function () { return null; },
        };
        var elementCreator = new ElementCreator(params);
        return elementCreator;
    };
    return HeaderView;
}());
export default HeaderView;

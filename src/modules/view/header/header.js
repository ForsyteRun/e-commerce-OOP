import ElementCreator from "../../util/element-creator";
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
            className: ["header"],
            textContent: "Good morning Header!",
            callback: function () { return null; },
        };
        var elementCreator = new ElementCreator(params);
        return elementCreator;
    };
    return HeaderView;
}());
export default HeaderView;

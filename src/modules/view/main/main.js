import ElementCreator from "../../util/element-creator";
var MainView = (function () {
    function MainView() {
        this.elementCreator = this.createView();
    }
    MainView.prototype.getHTMLElement = function () {
        return this.elementCreator.getElement();
    };
    MainView.prototype.createView = function () {
        var params = {
            tag: "main",
            className: ["main"],
            textContent: "Good morning Main!",
            callback: function () { return null; },
        };
        var elementCreator = new ElementCreator(params);
        return elementCreator;
    };
    return MainView;
}());
export default MainView;

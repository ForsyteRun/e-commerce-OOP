import ElementCreator from "../../util/element-creator";
var CSSClasses = {
    MAIN: "main",
};
var TEXT = "Good morning Main!";
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
            className: [CSSClasses.MAIN],
            textContent: TEXT,
            callback: function () { return null; },
        };
        var elementCreator = new ElementCreator(params);
        return elementCreator;
    };
    return MainView;
}());
export default MainView;

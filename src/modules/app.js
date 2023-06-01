import View from "./view/view";
var App = (function () {
    function App() {
        this.createView();
    }
    App.prototype.createView = function () {
        var footerView = new View({
            tag: "footer",
            className: "footer",
            textContent: "Good morning Foo999ter!",
            callback: function () { return null; },
        });
        var headerView = new View({
            tag: "header",
            className: "header",
            textContent: "Good morning Header!",
            callback: function () { return null; },
        });
        var mainView = new View({
            tag: "main",
            className: "main",
            textContent: "Good morning Main!",
            callback: function () { return null; },
        });
        document.body.append(headerView.getHTMLElement());
        document.body.append(mainView.getHTMLElement());
        document.body.append(footerView.getHTMLElement());
    };
    return App;
}());
export default App;

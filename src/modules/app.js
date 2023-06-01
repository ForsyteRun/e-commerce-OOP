import Footer from "./view/footer/footer";
import Header from "./view/header/header";
import Main from "./view/main/main";
var App = (function () {
    function App() {
        this.createView();
    }
    App.prototype.createView = function () {
        var footerView = new Footer();
        var headerView = new Header();
        var mainView = new Main();
        document.body.append(headerView.getHTMLElement());
        document.body.append(mainView.getHTMLElement());
        document.body.append(footerView.getHTMLElement());
    };
    return App;
}());
export default App;

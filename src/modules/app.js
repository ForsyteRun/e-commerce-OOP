import Footer from "./view/footer/footer";
import Header from "./view/header/header";
import Home from "./view/main/home/home";
import Main from "./view/main/main";
var App = (function () {
    function App() {
        this.createView();
    }
    App.prototype.createView = function () {
        var footerView = new Footer();
        var headerView = new Header(new Main());
        var mainView = new Main();
        mainView.setContent(new Home());
        document.body.append(headerView.getHTMLElement());
        document.body.append(mainView.getHTMLElement());
        document.body.append(footerView.getHTMLElement());
    };
    return App;
}());
export default App;

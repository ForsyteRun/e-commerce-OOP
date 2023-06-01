import FooterView from "./view/footer/footer";
import HeaderView from "./view/header/header";
import MainView from "./view/main/main";
var App = (function () {
    function App() {
        this.createView();
    }
    App.prototype.createView = function () {
        var footerView = new FooterView();
        var headerView = new HeaderView();
        var mainView = new MainView();
        document.body.append(headerView.getHTMLElement());
        document.body.append(mainView.getHTMLElement());
        document.body.append(footerView.getHTMLElement());
    };
    return App;
}());
export default App;

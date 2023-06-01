var CSSClasses = {
    FOOTER: "footer",
};
var TEXT = "Good morning Footer!";
var FooterView = (function () {
    function FooterView() {
    }
    FooterView.prototype.createView = function () {
        var element = document.createElement("footer");
        element.textContent = TEXT;
        element.classList.add(CSSClasses.FOOTER);
        return element;
    };
    return FooterView;
}());
export default FooterView;

var Module = (function () {

    var datajs = function (selector) {
        return document.querySelectorAll('[data-js=' + selector + ']');
    };

    var dataSelect = function (attr) {
        var elem = datajs(attr);
        var select = function () {
            this.select();
        };
        for (var i = 0; i < elem.length; i++) {
            var self = elem[i];
            self.onclick = select;
        }
    };

    return {
        dataSelect: dataSelect
    };

})();

// css
.nav ul[data-state=closed] {
    display: none;
}
.nav ul[data-state=open] {
    display: inherit;
}
//

function toggle(elem, A, B){
    elem.setAttribute('data-state', elem.getAttribute('data-state') === A ? B : A);
}
// module declaration
var Module = (function () {

    var _privateFunction = function () {
      // private logic
    };

    var publicFunction = function () {
      // public logic
    };

    // publicly exposed API (revealed)
    return {
        public: publicFunction
    };

})();

// usage
Module.public();

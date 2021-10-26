(function () {
    'use strict';
    var csInterface = new CSInterface();
    csInterface.openURLInDefaultBrowser("http://www.google.com");
    document.getElementById('btn_test').addEventListener('click', function () {
        csInterface.evalScript('sayHello()');
    });
}());
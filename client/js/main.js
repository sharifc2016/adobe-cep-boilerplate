(function () {
    'use strict';
    var csInterface = new CSInterface();
    document.getElementById('btn_test').addEventListener('click', function () {
        // collect data from jsx
        csInterface.evalScript('collectData()', function (result) {
            console.log(result);

            var scpt = 'showData("' + result + '")';
            console.log(scpt);
            // pass data to jsx
            csInterface.evalScript(scpt);
        });
    });
}());
(function () {
    var csInterface = new CSInterface();
    var includeFile = csInterface.getSystemPath(SystemPath.EXTENSION) +
    "/host/include/json2.jsx";
    console.log(includeFile);
    csInterface.evalScript('evalFile("' + includeFile + '")',
        function(res) {
            console.log(res);
        });

    // Set the TextArea with a placeholder Object
    var obj = {
        str: "Snarky Puppy",
        num: 42
    }
    var sampleObj = JSON.stringify(obj);
    $("#textarea1").val(sampleObj);

    // JS to JSX button handler
    $("#sendButton").on('click', function() {
    // Ugly workaround to grab the textarea code and build an Object out of it.
    var obj = eval("(" + $("#textarea1").val() + ")");
    // Use JSON.stringify to massage the object before sending it down to the JSX
    csInterface.evalScript('JSXParseObj(' + JSON.stringify(obj) + ')',
        function(res) {
            console.log(res);
        });
    });


    // JSX to JS button handler
    $("#getButton").on('click', function() {
    // Tell the JSX to send up to the JS an object
    csInterface.evalScript('sendObjectToJS()', function(res) {
        var stringToShow = "In order to use the following object," +
        " you need to JSON.parse() it!\n\n" + res;
        $("#textarea2").val(stringToShow);
        console.log(res);
    });
    });




}());
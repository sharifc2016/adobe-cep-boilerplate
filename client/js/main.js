(function () {
    var csInterface = new CSInterface();
    var extensionId = csInterface.getExtensionID();

    // callback function 
    var CustomCallback = function(evt) {
        console.log("Fired custom!", evt);
    }
    csInterface.addEventListener("com.sharif.boilerplate", CustomCallback);

    document.getElementById('btn_test').addEventListener('click', function () {
        console.log("button clicked");
        
        // event
        var event = new CSEvent();
        event.type = "com.sharif.boilerplate";
        event.scope = "APPLICATION";
        event.appId = csInterface.getApplicationID();
        event.extensionId = extensionId;
        event.data = "1148218467";
        
        // event dispatch
        csInterface.dispatchEvent(event);
        console.log("dispatch", event);
        
    });
}());
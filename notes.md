## multiple extension host settings

```
<ExtensionList>
	<!-- ... -->
	<Extension Id="com.example.HelloWorld.pspanel" Version="7.0.0" />
	<Extension Id="com.example.HelloWorld.dwpanel" Version="7.0.0" />
	<!-- ... -->
</ExtensionList>
<ExecutionEnvironment>
	<HostList>
		<Host Name="DRWV" Version="15.0" />
		<Host Name="PHXS" Version="16.0" />
		<Host Name="PHSP" Version="16.0" />
	</HostList>
</ExecutionEnvironment>
<DispatchInfoList>
	<!-- ... -->
	<Extension Id="com.example.HelloWorld.pspanel">
		<HostList>
			<Host Name="PHXS" />
			<Host Name="PHSP" />
		</HostList>
		<!-- ... -->
	</Extension>
	<Extension Id="com.example.HelloWorld.dwpanel">
		<HostList>
			<Host Name="DRWV" />
		</HostList>
		<!-- ... -->
	</Extension>
	<DispatchInfo>
		<!-- ... -->
	</DispatchInfo>
	<!-- ... -->
</DispatchInfoList>

```

## CSInterface from page 29
csInterface.openURLInDefaultBrowser("http://www.google.com");

#### CEP Versions 32, 33


## event
### explain photoshop event
```
(function () {
    var csInterface = new CSInterface();
    var extensionId = csInterface.getExtensionID();
 
    // callback function 
    var PhotoshopCallbackUnique = function(evt) {
        console.log("Fired!", evt);
    }

    // event listener
    csInterface.addEventListener("com.adobe.PhotoshopJSONCallback" + extensionId,
        PhotoshopCallbackUnique);
    
    document.getElementById('btn_test').addEventListener('click', function () {
        console.log("button clicked");
        
        // event
        var event = new CSEvent();
        // all photoshop
        event.type = "com.adobe.PhotoshopRegisterEvent";
        event.scope = "APPLICATION";
        event.appId = csInterface.getApplicationID();
        event.extensionId = extensionId;

        // duplicate document event number
        event.data = "1148218467";
        
        // event dispatch
        csInterface.dispatchEvent(event);
        console.log("dispatch", event);
        
    });
}());
```

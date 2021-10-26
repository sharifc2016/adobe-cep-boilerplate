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
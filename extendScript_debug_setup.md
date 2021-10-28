## plagins

 - `ExtendScript` by `Ole Henrik Stabell`
 - `ExtendScript Debugger` by `adobe`
 - `ExtendScript Development Pack` by `Il Harper`


### steps
 - open a jsx file
 - open debugger
 - on launch.json add 
 ```
 {
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "extendscript-debug",
            "request": "launch",
            "name": "index debug",
            "program": "${workspaceFolder}/host/index.jsx",
            "stopOnEntry": false
        }
    ]
 }
 ```

 ### keep in mind
 add a config for each jsx file
 ```
{
    "type": "extendscript-debug",
    "request": "launch",
    "name": "index debug",
    "program": "${workspaceFolder}/host/index.jsx",
    "stopOnEntry": false
}
```

 - `"name": "index debug",` change the name
 - `"program": "${workspaceFolder}/host/index.jsx",` change the path

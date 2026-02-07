# Simple Noname Master Server
A simple noname master server for Electron.

## Instructions
+ Download [Electron v22.3.27](https://github.com/electron/electron/releases/tag/v22.3.27) for your operating system.
  + You can download the latest or a previous version of Electron, as long as your system supports it.
+ Download this repository and extract the files into the Electron application directory.
+ Electron application directory examples:

### Windows

```
Electron/
├─ electron.exe
└─ resources/
   └─ app/
       ├─ node_modules/
       ├─ index.html
       ├─ main.js
       ├─ package.json
       └─ server.js
```

### Linux

```
Electron/
├─ electron
└─ resources/
   └─ app/
       ├─ node_modules/
       ├─ index.html
       ├─ main.js
       ├─ package.json
       └─ server.js
```

### macOS

```
Electron/
└─ Electron.app/
   └─ Contents/
      ├─ Resources/
      │   └─ app/
      │       ├─ node_modules/
      │       ├─ index.html
      │       ├─ main.js
      │       ├─ package.json
      │       └─ server.js
      └─ MacOS/
         └─ Electron
```

+ Launch the Electron app. Your system will start listening on the default port 8080.

## Known Issues:
+ Secure WebSocket (WSS) is not supported.
"use strict";

const { app, BrowserWindow } = require("electron");
const { createServer } = require("./master_server.cjs");
const config = require("./config.cjs");

let wsServer;
const ws_port = config.ws_port;

async function startWebSocketServer() {
    wsServer = createServer({
        port: ws_port,
    });

    try {
        await wsServer.start();
        console.log("WebSocket Server started on port ", ws_port);
    }
    catch (e) {
        console.error("WebSocket Server start failed:", e);
    }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 120,
    title: "noname_websocket_server",
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(async () => {
    await startWebSocketServer();
    createWindow();
});

app.on("window-all-closed", async () => {
    if (wsServer) {
        await wsServer.stop();
    }
    app.quit();
});

app.on("activate", () => {
	if (win === null) createWindow();
});

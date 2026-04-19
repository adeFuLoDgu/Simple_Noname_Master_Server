"use strict";

const { app, BrowserWindow } = require("electron");
const path = require("path");

require("./master_server.cjs");

let win;

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

app.on("ready", createWindow);
app.on("window-all-closed", () => app.quit());

app.on("activate", () => {
	if (win === null) createWindow();
});

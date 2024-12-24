import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev } from './util.js';
const createWindow = () => {
    const mainWindow = new BrowserWindow({});
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123');
    }
    else {
        mainWindow.loadFile(path.join(app.getAppPath(), './dist-electron/index.html'));
    }
};
app.on('ready', createWindow);

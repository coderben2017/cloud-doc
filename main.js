const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const devtron = require('devtron')

app.allowRendererProcessReuse = true;

app.on('ready', () => {
  devtron.install()
  
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 750,
    webPreferences: {
      nodeIntegration: true
    }
  })
  
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : 'none')
  mainWindow.webContents.openDevTools()
})

const { app, BrowserWindow } = require('electron')

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hiddenInset',
    vibrancy: 'sidebar',
    webPreferences: {
      nodeIntegration: true
      // allowRunningInsecureContent: process.env.NODE_ENV == 'development',
    }
  })

  if (process.env.NODE_ENV == 'development' && process.env.APP_DEV_URL) {
    win.loadURL(process.env.APP_DEV_URL)
  } else {
    win.loadFile('index.html')
  }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

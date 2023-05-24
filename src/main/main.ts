/* eslint global-require: off, no-console: off, promise/always-return: off */
import { app, BrowserWindow, ipcMain, shell,globalShortcut } from 'electron';
import log from 'electron-log';
import { autoUpdater } from 'electron-updater';
import path from 'path';

import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';




let mainWindow: BrowserWindow | null = null;






ipcMain.on('ipc-escpos-printer-80', async () => {
  console.log('IPC ESCPOS STARTING --------');

  try {               
        
    
    const escpos = require('escpos');   // import lib escpos            
    escpos.USB = require('escpos-usb'); // create usb adapter          
    console.log(escpos.USB.findPrinter()); // for see printer spesification (idVendor & idProduct)
                  
    // register idVendor & idProduct Printer    
    const device = new escpos.USB(4070, 33054); // Printer VSC TM 801    
    const printer = new escpos.Printer(device); // initialize printer       
    
      
    let qrUrl = 'https://github.com/denitiawan';
  
        
    // templating
    device.open(() => {      
        
        // print text
        printer.align('lt').text('');
        printer.align('ct').text('Test Printing');
        printer.align('ct').text('Electron React Boilerplate');
        printer.align('lt').text('');

        printer.align('ct').text('By Deni Setiawan');
        printer.align('ct').text('NexSOFT');                
        printer.align('lt').text('');

        printer.align('ct').text('Feature Support : ');
        printer.align('ct').text('Printout Text');
        printer.align('ct').text('Printout Barcode (CODE39)');
        printer.align('ct').text('Printout QR Code');
        printer.align('ct').text('Cut Papper');
        printer.align('ct').text('Open Cash Drawer');                
        printer.align('lt').text('');        
        
        
        // Print Barcode  
        printer.align('ct').barcode('CODE39', 'CODE39'); 
        printer.align('ct').text('');

               
        // Print QR Code
        printer.align('ct').text('Scan Me').style('B');
        printer.align("ct").qrimage(qrUrl, function (err) { 
          printer.align('ct').text(qrUrl);  
          printer.align('ct').text('17-mei-2023 13:12');
          printer.align('ct').text('');
          printer.align('ct').text('');
        
          // print action
          printer.cut(); 
          printer.cashdraw(2); 
          printer.close(); 
        });
          
        
                
  
      });   

     }
     catch (error) {    
      console.log(error);
    }    
});

ipcMain.on('ipc-escpos-printer-58', async () => {
  console.log('IPC ESCPOS STARTING --------');

  try {               
        
    
    const escpos = require('escpos');   // import lib escpos            
    escpos.USB = require('escpos-usb'); // create usb adapter          
    console.log(escpos.USB.findPrinter()); // for see printer spesification (idVendor & idProduct)
                  
    // register idVendor & idProduct Printer    
    const device = new escpos.USB(2501,22750); // Printer C58BT
    const printer = new escpos.Printer(device); // initialize printer       
    
      
    let qrUrl = 'https://github.com/denitiawan';
  
        
    // templating
    device.open(() => {      
        
        // print text
        printer.align('lt').text('');
        printer.align('ct').text('Test Printing');
        printer.align('ct').text('Electron React Boilerplate');
        printer.align('lt').text('');

        printer.align('ct').text('By Deni Setiawan');
        printer.align('ct').text('NexSOFT');                
        printer.align('lt').text('');

        printer.align('ct').text('Feature Support : ');
        printer.align('ct').text('Printout Text');
        printer.align('ct').text('Printout Barcode (CODE39)');
        printer.align('ct').text('Printout QR Code');
        printer.align('ct').text('Cut Papper');
        printer.align('ct').text('Open Cash Drawer');                
        printer.align('lt').text('');        
        
        
        // Print Barcode  
        printer.align('ct').barcode('CODE39', 'CODE39'); 
        printer.align('ct').text('');

               
        // Print QR Code
        printer.align('ct').text('Scan Me').style('B');
        printer.align("ct").qrimage(qrUrl, function (err) { 
          printer.align('ct').text(qrUrl);  
          printer.align('ct').text('17-mei-2023 13:12');
          printer.align('ct').text('');
          printer.align('ct').text('');
        
          // print action
          printer.cut(); 
          printer.cashdraw(2); 
          printer.close(); 
        });
          
        
                
  
      });   

     }
     catch (error) {    
      console.log(error);
      alert(error)
    }    
});

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};


// AUTO UPDATER ---------------[START]-----
/**
 * flow autoupdate : auto download and auto installed newest version on local
 * - download app in background
 * - notify when download is completed
 * - auto install app when user quit the old app
 * - when user re run the app, app will show the newest feature
 */
class AutoDownloadAndAutoInstallApp {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

// AUTO UPDATER ---------------[END]-----


const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

   // SHORTCUT UNTUK INSPEC ELEMENT [START]
   globalShortcut.register('CommandOrControl+G', function () {
    mainWindow.toggleDevTools();
  })

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  
  new AutoDownloadAndAutoInstallApp();
};




 // AUTO UPDATER ---------------[START]---
 
 /**
   - autoUpdater.checkForUpdates()
   - https://www.electronjs.org/docs/latest/api/auto-updater#autoupdatercheckforupdates
    
    Asks the server whether there is an update. 
    You must call setFeedURL before using this API.
    Note: If an update is available it will be downloaded automatically. 
    Calling autoUpdater.checkForUpdates() twice will download the update two times.        
  */
//  app.on('ready', function () {        
//   autoUpdater.checkForUpdates();
// });




/**
 - autoUpdater.quitAndInstall()
 - https://www.electronjs.org/docs/latest/api/auto-updater#autoupdaterquitandinstall
 Restarts the app and installs the update after it has been downloaded. 
 It should only be called after update-downloaded has been emitted.
 Under the hood calling autoUpdater.quitAndInstall() will close all 
 application windows first, and automatically call app.quit() after all windows 
 have been closed.
 Note: It is not strictly necessary to call this function to apply an update,
 as a successfully downloaded update will always be applied the next time
 the application starts.

 close app and auto install new version
 source : C:\Users\<computername>\AppData\Local\<productname>-updater\pending
 */
// ipcMain.on('quitAndInstall', async () => {
//   console.log("quitAndInstall")
//   autoUpdater.quitAndInstall();
// });


// AUTO UPDATER ---------------[END]-----

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

 
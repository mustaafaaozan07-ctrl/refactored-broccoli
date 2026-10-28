const {app, BrowserWindow, shell} = require('electron');
const path = require('path');
function createWindow(){
 const win = new BrowserWindow({width:1200,height:820,minWidth:800,minHeight:600,backgroundColor:'#0b1020',autoHideMenuBar:true,webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true}});
 win.loadFile(path.join(__dirname,'web','index.html'));
 win.webContents.setWindowOpenHandler(({url})=>{if(url.startsWith('https://')) shell.openExternal(url); return {action:'deny'};});
 win.webContents.on('will-navigate',(event,url)=>{if(!url.startsWith('file://')) event.preventDefault();});
}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});

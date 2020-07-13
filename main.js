const {app,BrowserWindow} = require('electron')

const createWindow = () =>{
    const win = new BrowserWindow({width:600,height:400,alwaysOnTop:true,show:false})
    win.loadFile('./index.html')
    win.setMenu(null)
    win.once('ready-to-show',()=> win.show())

}

app.whenReady().then(()=>{
    createWindow()
})
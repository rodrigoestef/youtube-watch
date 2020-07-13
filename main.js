const {app,BrowserWindow} = require('electron')

const createWindow = () =>{
    const win = new BrowserWindow({width:400,height:200,alwaysOnTop:true,show:false})
    win.loadFile('./index.html')
    win.setMenu(null)
    win.once('ready-to-show',()=> win.show())

}

app.whenReady().then(()=>{
    createWindow()
})
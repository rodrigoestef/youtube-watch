const {app,BrowserWindow} = require('electron')
const path = require('path')

const createWindow = () =>{
    const win = new BrowserWindow({width:400,height:200,alwaysOnTop:true,show:false})
    win.setIcon(path.resolve(__dirname,'icon.png'))
    win.loadFile(path.resolve(__dirname,'index.html'))
    win.setMenu(null)
    win.once('ready-to-show',()=> win.show())

}

app.whenReady().then(()=>{
    createWindow()
})
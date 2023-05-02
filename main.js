const {app,BrowserWindow,Menu }=require("electron")
const url = require("url")
const path= require("path")

let mainWindow

app.on("ready",()=>{
     mainWindow=  new BrowserWindow({
        icon:  'testicondumb.ico'
     });
     //mainWindow.setResizable(false)
     mainWindow.setSize(900,600)
     const template =[{
        label: 'Info',
        submenu:[{
            label: "Show Info",
            click: function loadinfo(){
                    
                let child = new BrowserWindow({
                    icon:'testicondumb.ico'
                })
                
                    child.setMenuBarVisibility(false)
        
                    child.setSize(238, 145);
                    child.setResizable(false)
                    
                    //mainWindow.setResizable(false);
                    child.loadURL(url.format({
                        pathname: path.join(__dirname,"info.html"),
                        protocol: 'file',
                        slashes:true,
                    
                 }))
                }
        }],
        
     }]
     //Aquí termina
     const menu = Menu.buildFromTemplate(template)
     Menu.setApplicationMenu(menu)
     
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,"index.html"),
        protocol: 'file',
        slashes:true,
        

        
    }))
    


    }
    
)


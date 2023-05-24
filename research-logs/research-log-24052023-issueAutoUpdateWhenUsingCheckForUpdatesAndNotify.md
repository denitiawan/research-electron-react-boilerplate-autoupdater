[Back to Research Logs](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/blob/main/research-logs/readme.md)

|Date|Assign|
|--|--|
|24-mei-2023|[Deni Setiawan](https://github.com/denitiawan)|
# Issue autoupdater will installed new application from official electron github

## Autoupdate notification will showing on bottom right when application success installed
![image](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/assets/11941308/9f711398-8153-4390-8543-6c73b9d5dde2)

- modified files
```
--------------------------------
root/package.json
--------------------------------
....
....
"build": {
    "productName": "ElectronUpdater",
    "appId": "org.erb.ElectronUpdater",
    "asar": true,
    "asarUnpack": "**\\*.{node,dll}",
    "files": [
      "dist",
      "node_modules",
      "package.json"
    ],
....
....    

--------------------------------
root/release/app/package.json
--------------------------------
{
  "name": "electron-updater",
  "version": "0.0.2",
  "description": "A foundation for scalable desktop apps",
  
  //"license": "MIT",
  //"author": {
  //  "name": "Electron React Boilerplate Maintainers",
  //  "email": "electronreactboilerplate@gmail.com",
  //  "url": "https://github.com/electron-react-boilerplate"
  //},
  
  "main": "./dist/main/main.js",
....
....
  
--------------------------------
root/src/renderer/index.tsx
--------------------------------  
....
....
    <div>      
      <h1>Electron Updater</h1>            
      <h2>App Version : 0.0.1</h2>
      <br/>    
      <br/>            
      <PrinterComponent />            
      <AutoUpdaterComponent />         
....
....          
```

- build exe 
```
npm run package
```

- install application
```
root/release/build/ElectronUpdater Setup 0.0.2.exe
```
![image](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/assets/11941308/3142e9ea-413f-4410-b6a0-8bff32d2d2bd)


## Issues 
- electron will auto installed new version of application, but the newest version downloaded from official github electron, not from nexus repository server

- my application have name is "ElectronUpdater" but auto updater will installed new app with name "ElectronReact 4.6.0", so in my dekstop will have 2 application
- ![image](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/assets/11941308/f00460be-381a-40aa-8423-83fc8557de2b)


## solution / plan
- how to set url nexus repository as provider on electron
- how to auto download and installed new version on current electron
- learning autoupdater librarry




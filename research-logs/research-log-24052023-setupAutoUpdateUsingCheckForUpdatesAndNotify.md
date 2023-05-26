[Back to Research Logs](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/blob/main/research-logs/readme.md)

|Date|Assign|
|--|--|
|24-mei-2023|[Deni Setiawan](https://github.com/denitiawan)|
|25-mei-2023|[Deni Setiawan](https://github.com/denitiawan)|
# Setup Electron auto update using autoupdater.checkForUpdatesAndNotify()
```
This auto updater using AutoUpdater librarry and using autoupdater.checkForUpdatesAndNotify() function
```

## Overviews
- [Autoupdate Cycle](#autoupdate-cycle)
- [Autoupdate Sequence](#autoupdate-sequence)
- [Requirement](#requirement)
- [Nexus Repository](#nexus-repository)
- [Setup AutoUpdater on Electron Project](#setup-autoUpdater-on-electron-project)

## Autoupdate Cycle
![image](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/assets/11941308/be2de108-537c-4f5a-996f-d1eec127bb6b)

## Autoupdate Sequence
![image](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/assets/11941308/f0984944-25bb-4607-9e96-a7aa7addaa3e)


## Requirement
```
-- Node ----------------
node version : v16.14.2 
npm version  : 8.5.0

-- Electron ------------
Repository  : https://github.com/electron-react-boilerplate/electron-react-boilerplate
version     : v4.6.0 (Latest)

-- Nexus Repository ------
user & password (for create folder, upload file, delete file)
url nexsus download files (this url will using on electron project when download .exe file or the latest version)

-- Librarries ------------
npm i auto-updater@5.3.0

```
## Nexus Repository
### User & URL
```
user         : *****
password     : *****
nexus download url : https://*****
```
### Upload latest version
- build  latest version electron app
- upload files to electron
```
- ElectronAutoUpdate Setup.0.0.2.exe
- ElectronAutoUpdate Setup.0.0.2.exe.blockmap
- ND_VERSION.yml
- latest.yml
```

### Nexus
![image](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/assets/11941308/8aec984a-e8f2-4609-bbde-16f8fa777f2b)
![image](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/assets/11941308/99e3a800-075e-4546-b14b-6cc02a7c433d)


# Setup AutoUpdater on Electron Project
## Install Librarry
- open project
- open terminal
- run this command
```
npm i auto-updater@1.0.2
```

## Setup root/package.json
### Setup URL Nexsus repository
- open `root/package.json` file
- add url nexus on this section
```
    "publish": {
      "provider": "generic",
      "url": "<url nexus repository here>"     
    }
```

### Setup productName & appId
- Setup `productName` 
```
productName : this property for given product name and will showing when build the .exe
```
- Setup `appId` 
```
appId : this property for given product id and must be unique
```
- following example code like this
```
....
....
"build": {
    "productName": "ElectronAutoUpdate",
    "appId": "org.erb.ElectronAutoUpdate",
    ....
    ....
```
- save root/package.json file

## Setup main.ts
- open `root/src/main/main.ts` file
- create class `AutoDownloadAndAutoInstallApp`
```
import { autoUpdater } from 'electron-updater';

class AutoDownloadAndAutoInstallApp {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}
```

- Implement and call `AutoDownloadAndAutoInstallApp` class on `createWindow` initialize
- Put Implementation `AutoDownloadAndAutoInstallApp` class on bottom of line, like this
```
const createWindow = async () => {
  ....
  ....
  ....
  new AutoDownloadAndAutoInstallApp();
};

```
- save file

## Setup root/release/app/package.json
- open `root/release/app/package.json` file
- setup `name` & `version` 
```
{
  "name": "electron-autoupdate",
  "version": "0.0.1",
....  
....
....
```
- save file

## Build application
- build .exe file with this command
```
npm run package
```

## Install Application
- install application from folder `root/release/build/***.exe`

## Electron autoupdate will running
- Download processing
- ![image](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/assets/11941308/b77755cc-7407-4da3-8265-9297be56f4b3)

- Download completed
- ![image](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/assets/11941308/bd763626-722c-464f-b090-9496f080479d)

- Success install and replace old version wiht latest version
- ![image](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/assets/11941308/733cc15c-0d80-4fe6-b1c5-a312d12dbf13)








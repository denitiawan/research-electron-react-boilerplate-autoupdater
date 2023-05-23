[Back to Research Logs](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/blob/main/research-logs/readme.md)

|Date|Assign|
|--|--|
|22-mei-2023|[Deni Setiawan](https://github.com/denitiawan)|
# Working with nexsus repository

### nexus repository url (credentials)
- http://******

### nexus repo account (credentials)
- user : ******
- pass : ******

### folder struktur
```
rnd-nexpos
 window
	archives // backup exe source from latest folder
	latest   // newest exe of application
	temp     // .zip source from latest folder
```

![image](https://github.com/denitiawan/research-electron-react-boilerplate-autoupdater/assets/11941308/8ea43ac9-68ea-4659-89ac-340407a86250)


### rules when upload exe to nexus
- download all files from latest folder
- create new folder inse folder archives with (previous version)
- create .zip file source form latest folder, and upload to tmp folder
- upload new exe file into latest folder

### inside on latesst folder
```
- ND_VERSION.yml
- ElectronReact Setup 0.0.2.exe
- ElectronReact Setup 0.0.2.exe.blockmap
- latest.yml
```

#


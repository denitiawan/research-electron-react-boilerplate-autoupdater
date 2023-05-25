# Nexus Repository (Rules and Tips)
- [Folder Structures](#folder-structures) 
- [Download Files]()
- []()
- []()


## Folder Structures
```
rnd-nexpos/windows/
   archives
     appName-0.0.3-RELEASE
     appName-0.0.2-RELEASE
	 appName-0.0.1-RELEASE
   latest
     appName-0.0.3.exe
	 appName-0.0.3.exe.blockmap
	 ND_VERSION.yml
	 RELEASE.yml
   tmp   
     .appName-0.0.1-RELEASE.zip
	 .appName-0.0.2-RELEASE.zip
```	 
	 
### Archives
```
rnd-nexpos/windows/archives
-------------------------------
this folder contains all files source from latest folder.

```	 

### Latest
```
rnd-nexpos/windows/latest
-------------------------------
this folder contains files :
 - appName-0.0.3.exe : this file from npm run package
 - appName-0.0.3.exe.blockmap : this file from npm run package
 - ND_VERSION.yml : this file manualy created, for backend version
 - RELEASE.yml : this file from npm run package
```	 

### tmp
```
rnd-nexpos/windows/tmp
-------------------------------
this folder contains .zip file source from latest folder
```


## Download Files
```
```

# aio-get-all-files
## Instalation:
With [npm](www.npmjs.com) :
```sh 
npm i aio-get-all-files
```
#
## Test code:
```js
const { getAllFiles, getAllFilesSync, getFiles, getFilesSync, } = require('aio-get-all-files')

// to get Files and subFiles
getAllFiles('path', false, 'extesion', (file) => {
    console.log(file)
})
console.log(getAllFilesSync('path', false, 'extesion'));
getFiles('path', false, '.js', (file) => {
    console.log(file)
})
console.log(getAllFilesSync('path', false, 'extesion'));

// to get Folders and subFolders
getAllFiles('path', true, null, (file) => {
    console.log(file)
})
console.log(getAllFilesSync('path', true));
getFiles('path', true, null, (file) => {
    console.log(file)
})
console.log(getAllFilesSync('path', true));
```

## Code:
### advencedGetAllFiles()
Sample Code :
```javascript
const { advencedGetAllFiles, fileTypes} = require('aio-get-all-files')

advencedGetAllFiles("path", {
    ext: ".EXTENSION", // Note: Always start with point (.)
    allFiles: true,
    type: fileTypes // Something like allTypes, foldersOnly, & fileOnly
}, /*you can field it as Function or Boolean*/)
```
#

## ChangLog:
### 0.0.7-enhanced :
What's new?
#
* Adding advencedGetAllFiles()
* Bugs fixed

### 0.0.71 :
What's new?
#
* Fixing error

### 0.0.72 :
What's new?
#
* Uptade advencedGetAllFiles()

### 0.0.73 :
What's new?
#
* Deleted advencedGetAllFiles()
* adding advencedGetAllFilesSync()
* adding advencedGetAllFiles()
* adding advencedGetAllFilesSync()
* adding getAllFilesWithoutType()
* adding getAllFilesWithoutTypeSync()
* adding getFilesWithoutType()
* adding getFilesWithoutTypeSync()

### 0.0.76 :
What's new?
#
* Uptading advencedGetAllFiles()
* Delete advencedGetAllFilesSync()

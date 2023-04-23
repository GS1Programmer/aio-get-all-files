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

* ### advencedGetAllFiles(directory, optiions{})
    ### Information
    This function makes you easier to get All Files with all advanced tools.
    ### Note: 
    * sync - you can set it as boolean or function(file)
    * type - you must import variable from this package named "fileTypes"
    * allFiles - this mode useful to read files and subFiles
    * ext - sort of "Extension"
    ### Test code:
    ```js
        const { advencedGetAllFiles, fileTypes } = require('aio-get-all-files')

        advencedGetAllFiles('directory', {
            type, // Import the type from fileTypes
            ext, // some extension
            allFiles, // boolean
            sync, // you can filled it as boolean or function
        })
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
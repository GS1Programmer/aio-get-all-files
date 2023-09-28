# **AIO-Get-All-Files**

## Information
#### ***AIO (or All In One) Get All Files***


**AIO Get All Files** its a simple get all files module to get all files path. This package its usefull for build some discord bot, and the others.

This module allow you to get files with a lot method, and make you easier to get all files without making new file to get files.

And thanks to choosing aio-get-all-files for your get all files node.js module.

**This Module Inspired By: <a href="https://github.com/notunderctrl">NotUnderCtrl</a>**
#
## Instalation:
With [npm](www.npmjs.com) :
```sh 
npm i aio-get-all-files
```
#
## Test code:
```js
const aio = require("aio-get-all-files");

// To get all files fast from folder you can do this
const files = aio.getAllFilesSync("FOLDER_PATH", false, ".FILE_EXTENSION");

// To get all folders fast from a folders you can do this
const folders = aio.getAllFilesSync("FOLDER_PATH", true);
```

>Note: For the complete code you can go to oficial <a href="https://youtube.com/@mrgaming_0001">channel</a>

When you run the code from this sample code the logs its like here:
```sh
[
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\file\\aio\\aio.js',
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\file\\aio\\aio2\\aio22.js',
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\file\\is.js',
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\file\\oia\\oia.js'
]
[
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\file',
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\file\\aio',
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\file\\aio\\aio2',
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\file\\oia',
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\folder',
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\folder\\1',
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\folder\\1\\3',
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\folder\\2',
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\folder\\2\\4',
  'D:\\NodeTest Folder\\0Test package\\getAllFiles\\testfolder\\folder\\2\\4\\5'
]
```

#
### NEW UPTADE (0.1.0)
We have new method called `getAllFilesInstant` and `getDataFile`, For the code heres is sample:

```js
const aio = require("aio-get-all-files");

(async () => {
    const data = await aio.getAllFilesInstant("PATH", {
        ext: ".FILE_EXTENSION",
        sync: true, // You can not set it or set it as function, example: `(file) => console.log('file')`
        allFiles: true, // For get all files like `getAllFilesSync`
        fileType: "foldersOnly" // Filter of the object (file/folder) you get.
    }); // return `Promise<Array<String>>|null`

    console.log(await aio.getDataFile(data[0])); // `data[0]` is a String, also you can change it to Path or String
})();
```
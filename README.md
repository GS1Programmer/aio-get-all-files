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
## Code:
```js
const aio = require("aio-get-all-files");

/**
  For method like `getAllFiles`, `getFiles`, `getAllFilesWithoutType`, & `instant`
 */
aio.<METHODS>("PATH", options);
```
## Methods:
### `getAllFiles`:
Returns an array of all files and directories in a given directory.

```js
aio.getAllFiles("PATH", {
    ext, // The file extension to filter by
    sync, // The return of output, like `true` as Array<String> and `false` as Promise<Array<String>>
    foldersOnly // Whether to include only directories or not
});
```
### `getFiles`:
Returns an array of files in a given directory

```js
aio.getFiles("PATH", {
    ext, // The file extension to filter by
    sync, // The return of output, like `true` as Array<String> and `false` as Promise<Array<String>>
    foldersOnly // Whether to include only directories or not
});
```

### `getAllFilesWithoutType`:
Returns an array of all files and directories in a given directory without type information.

```js
aio.getAllFilesWithoutType("PATH", {
    ext, // The file extension to filter by
    sync, // The return of output, like `true` as Array<String> and `false` as Promise<Array<String>>
});
```
#

>Note: For the complete code you can go to oficial <a href="https://youtube.com/@mrgaming_0001">channel</a>

When you run the code from the sample code the logs its like here:
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
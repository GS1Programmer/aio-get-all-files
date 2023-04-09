# aio-get-all-files
## Instalation:
With [npm](www.npmjs.com) :
```sh 
npm i aio-get-all-files
```

## Test code:
```js
const { getAllFiles, getAllFilesSync } = require('aio-get-all-files')

getAllFiles('path', false, '.js', (file) => {
    console.log(file)
})
console.log(getAllFilesSync('path', false, '.js'));
getAllFiles('path', true, null, (file) => {
    console.log(file)
})
console.log(getAllFilesSync('path', true));
```
# aio-get-all-files
## Instalation:
With [npm](www.npmjs.com) :
```sh 
npm i aio-get-all-files
```

## Test code:
```js
const { getAllFiles, getAllFilesSync } = require('./index')

getAllFiles('path', false, '.js', (file) => {
    console.log(file)
})
console.log(getAllFilesSync('path', false, '.js'));
```
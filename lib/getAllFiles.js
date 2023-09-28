const fs = require('fs');
const path = require('path'), _path = path;

let toExport = {};

/**
 * Returns an array of all files and directories in a given directory.
 * 
 * @param {string} directory - The directory to scan.
 * @param {boolean} [foldersOnly=false] - Whether to include only directories or not.
 * @param {string} [ext=''] - The file extension to filter by.
 * @returns {string[]} An array of file and directory paths.
 */
const getAllFilesSync = toExport.getAllFilesSync = (directory, foldersOnly = false, ext) => {
  let fileNames = [];

  const files = fs.readdirSync(directory, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(directory, file.name);

    if (foldersOnly) {
      if (file.isDirectory()) {
        fileNames.push(filePath)

        const subFolder = getAllFilesSync(filePath, true)
        if (subFolder) {
          subFolder.forEach((file) => {
            fileNames.push(file);
          })
        }
      }
    } else {
      if (file.isFile())
      {
        if (ext) {
          if (path.extname(filePath) === ext)
          {
          fileNames.push(filePath);
          }
        } else {
          fileNames.push(filePath)
        }
      }
      
      if (file.isDirectory()) {
        const subFiles = getAllFilesSync(filePath, false, ext);
        subFiles.forEach((file) => {
          fileNames.push(file);
        })
      }
    }    
  }

  return fileNames;
};

/**
 * Returns an array of all files and directories in a given directory.
 * 
 * @param {function} callback - Note: Don't Forget to field the callback
 * @param {string} directory - The directory to scan.
 * @param {boolean} [foldersOnly=false] - Whether to include only directories or not.
 * @param {string} [ext=''] - The file extension to filter by.
 * @returns {string[]} An array of file and directory paths.
 */
const getAllFiles = toExport.getAllFiles = (directory, foldersOnly = false, ext, callback) => {

    let fileNames = [];
  
    const files = fs.readdirSync(directory, { withFileTypes: true });
  
    for (const file of files) {
      const filePath = path.join(directory, file.name);
  
      if (foldersOnly) {
        if (file.isDirectory()) {
          fileNames.push(filePath)
  
          const subFolder = getAllFilesSync(filePath, true)
          if (subFolder) {
            subFolder.forEach((file) => {
              fileNames.push(file);
            })
          }
        }
      } else {
        if (file.isFile())
        {
          if (ext) {
            if (path.extname(filePath) === ext)
            {
            fileNames.push(filePath);
            }
          } else {
            fileNames.push(filePath)
          }
        }
        
        if (file.isDirectory()) {
          const subFiles = getAllFilesSync(filePath, false, ext);
          subFiles.forEach((file) => {
            fileNames.push(file);
          })
        }
      }    
    }
  
    callback(fileNames)
  };

  /**
 * Returns an array of all files and directories in a given directory.
 * 
 * @param {string} directory - The directory to scan.
 * @param {boolean} [foldersOnly=false] - Whether to include only directories or not.
 * @param {string} [ext=''] - The file extension to filter by.
 * @returns {string[]} An array of file and directory paths.
 */
const getFilesSync = toExport.getFilesSync = (directory, foldersOnly = false, ext) => {
    let fileNames = [];

    const files = fs.readdirSync(directory, { withFileTypes: true });

    for (const file of files) {
      const filePath = path.join(directory, file.name);

      if (foldersOnly) {
        if (ext) {
          if (path.extname(filePath) === ext)
          {
          fileNames.push(filePath);
          }
        } else {
          fileNames.push(filePath)
        }
      } else {
        if (file.isFile()) {
          fileNames.push(filePath);
        }
      }
    }

    return fileNames;
  }

  /**
  * Returns an array of all files and directories in a given directory.
  * 
  * @param {Function} callback - Note: Don't Forget to field the callback
  * @param {string} directory - The directory to scan.
  * @param {boolean} [foldersOnly=false] - Whether to include only directories or not.
  * @param {string} [ext=''] - The file extension to filter by.
  * @returns {string[]} An array of file and directory paths.
  */
const getFiles = toExport.getFiles = (directory, foldersOnly = false, ext, callback) => {

    let fileNames = [];

    const files = fs.readdirSync(directory, { withFileTypes: true });

    for (const file of files) {
      const filePath = path.join(directory, file.name);

      if (foldersOnly) {
        if (file.isDirectory()) {
          fileNames.push(filePath);
        }
      } else {
        if (file.isFile()) {
          if (ext) {
            if (path.extname(filePath) === ext)
            {
            fileNames.push(filePath);
            }
          } else {
            fileNames.push(filePath)
          }
        }
      }
    }

    callback(fileNames);
  }

  /**
   * 
   * @param {String} directory 
   * @param {string} [ext = ''] 
   * @param {Function} callback 
   */
const getAllFilesWithoutType = toExport.getAllFilesWithoutType = (directory, ext, callback) => {

    let fileNames = [];

    const folders = getAllFilesSync(directory, true)
    const files = getAllFilesSync(directory, false, ext)

    for (const file of files) {
      fileNames.push(file)
    }
    for (const folder of folders) {
      fileNames.push(folder)
    }

    callback(fileNames);
  }

  /**
   * 
   * @param {String} directory 
   * @param {string} [ext = ''] 
   */
const getAllFilesWithoutTypeSync = toExport.getAllFilesWithoutTypeSync = (directory, ext) => {

    let fileNames = [];

    const folders = getAllFilesSync(directory, true)
    const files = getAllFilesSync(directory, false, ext)

    for (const file of files) {
      fileNames.push(file)
    }
    for (const folder of folders) {
      fileNames.push(folder)
    }

    return fileNames;
  }

  /**
   * 
   * @param {String} directory 
   * @param {string} [ext = ''] 
   */
const getFilesWithoutTypeSync =toExport.getFilesWithoutTypeSync = (directory, ext) => {

    let fileNames = [];

    const folders = getFilesSync(directory, true)
    const files = getFilesSync(directory, false, ext)

    for (const file of files) {
      fileNames.push(file)
    }
    for (const folder of folders) {
      fileNames.push(folder)
    }

    return fileNames;
  }

  /**
   * 
   * @param {String} directory 
   * @param {string} [ext = ''] 
   * @param {Function} callback 
   */
const getFilesWithoutType = toExport.getFilesWithoutType = (directory, ext, callback) => {

    let fileNames = [];

    const folders = getFilesSync(directory, true)
    const files = getFilesSync(directory, false, ext)

    for (const file of files) {
      fileNames.push(file)
    }
    for (const folder of folders) {
      fileNames.push(folder)
    }

    callback(fileNames);
  }

  /**
   * Get Data from any files
   * 
   * @param {String} path 
   * @returns {Promise}
   */
const getDataFile = toExport.getDataFile = async function(path) {
    const fileData = {};

    fileData.path = path = fs.realpathSync(path);
    fileData.fileName = _path.basename(path);
    fileData.extension = _path.extname(path) || ((stat) =>  { if(stat.isFile()) return "." + fileData.fileName.split(".").pop() })(fs.statSync(path));
    fileData.parent = _path.dirname(path);
    fileData.type = ((stat) => {
      if(stat.isFile()) return "file";
      if (stat.isDirectory()) return "folder";
    })(fs.statSync(path));
    fileData.disk = path.replace(/\\/g, '/').split('/')[0] + "\\";

    ((fileData, stat) => {
      fileData.timeCreated = stat.birthtime;
       fileData.timeLastUse = stat.atime;
      fileData.modifyTime = stat.mtime;
    })(fileData, fs.statSync(path));

    return fileData;
  }

  /**
   * Get all files with instant way
   * 
   * @param {String} path - Target Path
   * @param {Object} options
   * @param {String} options.ext - Filter Extension
   * @param {Boolean|Function} options.sync - Its Sync or with callback
   * @param {Boolean} options.allFiles - All files like `getAllFiles` or all files in one folder `getFiles`
   * @param {"foldersOnly"|"filesOnly"|"allType"} options.fileType - Filter if it folderOnly or not
   * @returns {Promise<Array<String>>|null}
   */
const getAllFilesInstant = toExport.getAllFilesInstant = async function(path, options) {
    var sync, ext, allFiles, fileType, callbackFunc;
    let query = "", queryArray = [], isSync = false, isFolder = false, isAllTypes;

    ext = options.ext || ".js";
    sync = options.sync || true;
    allFiles = options.allFiles || true;
    fileType = options.fileType || "allType";

    switch (allFiles) {
      case true:
        queryArray.push("getAllFiles");
      break;
    
      case false:
        queryArray.push("getFiles");
      break;
    }

    switch (fileType) {
      case "foldersOnly":
        isFolder = true;
      break;
    
      case "filesOnly":
        isFolder = false;
      break;
      
      case "allType":
        queryArray.push("WithoutType");
        isAllTypes = true;
        isFolder = false;
      break;
    }

    switch (typeof sync) {
      case 'boolean':
        queryArray.push("Sync");
        isSync = true;
      break;
    
      case 'function':
        isSync = false;
        callbackFunc = sync;
      break;
    }

    var parameter = {};
    switch (isSync) {
      case true:
        if(!isAllTypes) parameter.foldersOnly = isFolder;

        parameter["directory"] = path;
        parameter.ext = ext;

        parameter.runType = 0;
      break;
    
      case false:
        if(!isAllTypes) parameter.foldersOnly = isFolder;

        parameter["directory"] = path;
        parameter.ext = ext;
        parameter.callback = sync;

        parameter.runType = 1;
      break;
    }

    queryArray.forEach((value) => {
      query += value;
    });

    const selectedMethod = toExport[query];
    var out;
    switch(parameter.runType) {
      case 0:
        if(isAllTypes) out = selectedMethod(parameter.directory, parameter.foldersOnly);
        else out = selectedMethod(parameter.directory, parameter.foldersOnly, ext);
      break;

      case 1:
        if(isAllTypes) out = selectedMethod(parameter.directory, parameter.foldersOnly, parameter.callback);
        else out = selectedMethod(parameter.directory, parameter.foldersOnly, ext, parameter.callback);
      break;
    }

    return out;
  }

module.exports = toExport;
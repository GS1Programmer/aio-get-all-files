const fs = require('fs');
const path = require('path');

const util = require('util');

/**
 * Returns an array of all files and directories in a given directory.
 * 
 * @param {string} directory - The directory to scan.
 * @param {boolean} [foldersOnly=false] - Whether to include only directories or not.
 * @param {string} [ext=''] - The file extension to filter by.
 * @returns {string[]} An array of file and directory paths.
 */
const getAllFilesSync = (directory, foldersOnly = false, ext) => {
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
const getAllFiles = (directory, foldersOnly = false, ext, callback) => {

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
  const getFilesSync = (directory, foldersOnly = false, ext) => {
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
  const getFiles = (directory, foldersOnly = false, ext, callback) => {

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
  const getAllFilesWithoutType = (directory, ext, callback) => {

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
  const getAllFilesWithoutTypeSync = (directory, ext) => {

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
  const getFilesWithoutTypeSync = (directory, ext) => {

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
  const getFilesWithoutType = (directory, ext, callback) => {

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

  const fileTypes = {
    'foldersOnly':'foldersOnly',
    'filesOnly':'filesOnly',
    'allTypes':'allTypes'
  }

  const Options = {
    type: String,
    ext: String,
    allFiles: Boolean,
  }

  /**
   * Returns an array of all files and directories in a given directory.
   * 
   * ### note: 
   * * type - you must import variable from this package named "fileTypes"
   * * allFiles - this mode useful to read files and subFiles
   * * ext - sort of "Extension"
   * * sync - you can field it as Function or Boolean
   * 
   * @param {String} directory 
   * @param {Options} param1 
   * @param {Boolean|Function} sync 
   * @returns 
   */
  const advencedGetAllFiles = (directory, { 
    type,
    ext,
    allFiles
  }, sync) => {
    let fileNames = [];
    if(allFiles)
    {
      if (type === fileTypes.foldersOnly) {
        const folders = getAllFilesSync(directory, true)
        for (const folder of folders) {
          fileNames.push(folder)
        }
      } else if (type === fileTypes.filesOnly) {
        const files = getAllFilesSync(directory, false, ext)
        for (const file of files) {
          fileNames.push(file)
        }
      } else if (type === fileTypes.allTypes) {
        const allFiles = getAllFilesWithoutTypeSync(directory, ext)
        for (const files of allFiles) {
          fileNames.push(files)
        }
      } else {
        throw new TypeError(`Type named '${type}' is not exist on fileTypes`)
      }
    } else {
      if (type === fileTypes.foldersOnly) {
        const folders = getFilesSync(directory, true)
        for (const folder of folders) {
          fileNames.push(folder)
        }
      } else if (type === fileTypes.filesOnly) {
        const files = getFilesSync(directory, false, ext)
        for (const file of files) {
          fileNames.push(file)
        }
      } else if (type === fileTypes.allTypes) {
        const allFiles = getFilesWithoutTypeSync(directory, ext)
        for (const files of allFiles) {
          fileNames.push(files)
        }
      } else {
        throw new TypeError(`Type named '${type}' is not exist on fileTypes`)
      }
    }

   if(util.isFunction(sync)) {
    sync(fileNames)
   } else if(util.isBoolean(sync)) {
    if(sync)
    {
      return fileNames;
    }
   }
  }

module.exports = {
    getAllFiles,
    getAllFilesSync,
    getFiles,
    getFilesSync,
    getAllFilesWithoutType,
    getAllFilesWithoutTypeSync,
    getFilesWithoutType,
    getFilesWithoutTypeSync,
    advencedGetAllFiles,
    fileTypes
}
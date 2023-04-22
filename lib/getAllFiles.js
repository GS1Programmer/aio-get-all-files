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
  if(!util.isString(directory)) {
    throw new TypeError("Parameter directory is only string")
  }
  if(!util.isString(ext)) {
    throw new TypeError("Parameter ext (extension) is only string")
  }
  if (!util.isBoolean(foldersOnly)) {
    throw new TypeError("Para meter foldersOnly is only boolean")
  }
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
    if(!callback) {
      throw new TypeError("Please fill function in callback parameter")
    }
    if(!util.isFunction(callback)) {
      throw new TypeError("Parameter callback is only function")
    };
    if(!util.isString(directory)) {
      throw new TypeError("Parameter directory is only string")
    }
    if(!util.isString(ext)) {
      throw new TypeError("Parameter ext (extension) is only string")
    }
    if (!util.isBoolean(foldersOnly)) {
      throw new TypeError("Parameter foldersOnly is only boolean")
    }

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
    if(!util.isString(directory)) {
      throw new TypeError("Parameter directory is only string")
    }
    if(!util.isString(ext)) {
      throw new TypeError("Parameter ext (extension) is only string")
    }
    if (!util.isBoolean(foldersOnly)) {
      throw new TypeError("Parameter foldersOnly is only boolean")
    }
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
  * @param {function} callback - Note: Don't Forget to field the callback
  * @param {string} directory - The directory to scan.
  * @param {boolean} [foldersOnly=false] - Whether to include only directories or not.
  * @param {string} [ext=''] - The file extension to filter by.
  * @returns {string[]} An array of file and directory paths.
  */
  const getFiles = (directory, foldersOnly = false, ext, callback) => {
    if(!callback) {
      throw new TypeError("Please fill function in callback parameter")
    }
    if(!util.isFunction(callback)) {
      throw new TypeError("Parameter callback is only function")
    };
    if(!util.isString(directory)) {
      throw new TypeError("Parameter directory is only string")
    }
    if(!util.isString(ext)) {
      throw new TypeError("Parameter ext (extension) is only string")
    }
    if (!util.isBoolean(foldersOnly)) {
      throw new TypeError("Parameter foldersOnly is only boolean")
    }
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

  const fileTypes = {
    'foldersOnly':'foldersOnly',
    'filesOnly':'filesOnly',
    'allFiles':'allFiles'
  }

  const Param1 = {
    type: String,
    sync: any,
    ext: String,
    allFiles: Boolean,
  }

  /**
   * Returns an array of all files and directories in a given directory.
   * 
   * ### note: 
   * * sync - you can set it as boolean or function(file)
   * * type - you must import variable from this package named "fileTypes"
   * * allFiles - this mode useful to read files and subFiles
   * * ext - sort of "Extension"
   * 
   * @param {string} directory 
   * @param {Param1} param1 
   */
  const advencedGetAllFiles = (directory, { 
    type,
    ext,
    sync,
    allFiles
  }) => {
    if(!directory) {
      throw new TypeError("Missing/unfieled content named: directory")
    }
    if(!sync) {
      throw new TypeError("Missing/unfieled content named: sync")
    }
    if(!allFiles) {
      throw new TypeError("Missing/unfieled content named: allFiles")
    }

    const registeringFiles = function(files) {
      if(!(util.isBoolean(sync) || util.isFunction(sync))) {
        throw new TypeError("Parameter sync is only can Boolean or Function")
      }

      if(util.isBoolean(sync))
      {
        if(sync) {
          return files;
        }
      }
      if(util.isFunction(sync)) {
        if(sync) {
          sync(files);
        }
      }
    }

    if(allFiles)
    {
      let fileNames = [];
  
      const files = fs.readdirSync(directory, { withFileTypes: true });
    
      for (const file of files) {
        const filePath = path.join(directory, file.name);
    
        if (type === fileTypes.foldersOnly) {
          if (file.isDirectory()) {
            fileNames.push(filePath)
    
            const subFolder = getAllFilesSync(filePath, true)
            if (subFolder) {
              subFolder.forEach((file) => {
                fileNames.push(file);
              })
            }
          }
        } else if (type === fileTypes.filesOnly) {
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
        } else if (type === fileTypes.allFiles) {
          /**
           * 
           * @param {String} subDirectory 
           */
          const readFiles = (subDirectory) => {
            const allFiles = [];
            const files = fs.readdirSync(subDirectory, { withFileTypes: true })
            
            for (const file of files) {
              const filePath = path.join(subDirectory, file.name)
              allFiles.push(filePath)

              if(file.isDirectory())
              {
                const subFiles = readFiles(file)
                subFiles.forEach(subFile => {
                  allFiles.push(subFile)
                })
              }
            }

            return allFiles;
          }

          const files = readFiles(directory)
          files.forEach(fileee => {
            fileNames.push(fileee)
          })
        } else {
          throw new TypeError(`Type named '${type}' is not exist on fileTypes`)
        }
      } 

      registeringFiles(fileNames);
    } else {
      if(!allFiles) return;
      if(type === fileTypes.allFiles) {
        throw new TypeError("Use allFiles parameter to use allFiles")
      }
      let fileNames = [];

      const files = fs.readdirSync(directory, { withFileTypes: true });

      for (const file of files) {
        const filePath = path.join(directory, file.name);

        if (type === fileTypes.foldersOnly) {
          if (file.isDirectory()) {
            fileNames.push(filePath);
          }
        } else if (type === fileTypes.filesOnly) {
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
        } else {
          if(type === fileTypes.allFiles) {
            throw new TypeError("Use allFiles parameter to use allFiles")
          }
          throw new TypeError(`Type named '${type}' is not exist on fileTypes`)
        }
      }

      registeringFiles(fileNames)
    }
  }

module.exports = {
    getAllFiles,
    getAllFilesSync,
    getFiles,
    getFilesSync,
    advencedGetAllFiles,
    fileTypes
}
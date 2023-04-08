const fs = require('fs');
const path = require('path');
const util = require('util')

let missingCallback;
let errorFunction;

if(missingCallback) return new Error("Excuse me, but you didn't write a callback.")
if(errorFunction) return new Error("Please, Fill it with function type")

/**
 * Returns an array of all files and directories in a given directory.
 * 
 * @param {string} directory - The directory to scan.
 * @param {boolean} [foldersOnly=false] - Whether to include only directories or not.
 * @param {string} [ext=''] - The file extension to filter by.
 * @returns {string[]} An array of file and directory paths.
 */
const getAllFilesSync = (directory, foldersOnly = false, ext = '') => {
  let fileNames = [];

  const files = fs.readdirSync(directory, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(directory, file.name);

    if (foldersOnly) {
      if (file.isDirectory()) {
        fileNames.push(filePath)

        const subFolder = getAllFiles(filePath, true)
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
        const subFiles = getAllFiles(filePath, false, ext);
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
 * @param {string} directory - The directory to scan.
 * @param {boolean} [foldersOnly=false] - Whether to include only directories or not.
 * @param {string} [ext=''] - The file extension to filter by.
 * @returns {string[]} An array of file and directory paths.
 */
const getAllFiles = (directory, foldersOnly = false, ext = '', callback) => {
    if(!callback) return missingCallback = true;
    if(!util.isFunction(callback)) return errorFunction = true;

    let fileNames = [];
  
    const files = fs.readdirSync(directory, { withFileTypes: true });
  
    for (const file of files) {
      const filePath = path.join(directory, file.name);
  
      if (foldersOnly) {
        if (file.isDirectory()) {
          fileNames.push(filePath)
  
          const subFolder = getAllFiles(filePath, true)
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
          const subFiles = getAllFiles(filePath, false, ext);
          subFiles.forEach((file) => {
            fileNames.push(file);
          })
        }
      }    
    }
  
    callback(fileNames)
  };

module.exports = {
    getAllFiles,
    getAllFilesSync
}
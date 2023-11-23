'use strict';

/*
GS Entertainment™ Express © 2023
*/

const fs = require('fs');
const path = require('path');

const toExport = {};

/**
 * Returns an array of all files and directories in a given directory.
 * 
 * @param {string} directory - The directory to scan.
 * @param {Object} options
 * @param {boolean} [options.foldersOnly=false] - Whether to include only directories or not.
 * @param {string} [options.ext=''] - The file extension to filter by.
 * @param {Boolean} options.sync
 */
const getAllFiles = toExport.getAllFiles = async (directory, options) => {
  let { ext, sync, foldersOnly } = options;
  sync = sync || true;
  foldersOnly = foldersOnly || false;
  ext = ext || ".js";

  let fileNames = [];

  const files = await fs.readdirSync(directory, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(directory, file.name);

    if (foldersOnly) {
      if (file.isDirectory()) {
        fileNames.push(filePath);

        const subFolder = await getAllFiles(filePath, { foldersOnly: true });
        subFolder.forEach((file) => {
          fileNames.push(file);
        });
      }
    } else {
      if (file.isFile()) {
        if (ext && path.extname(filePath) === ext) {
          fileNames.push(filePath);
        } else if (!ext) {
          fileNames.push(filePath);
        }
      }

      if (file.isDirectory()) {
        const subFiles = await getAllFiles(filePath, { foldersOnly: false, ext });
        subFiles.forEach((file) => {
          fileNames.push(file);
        });
      }
    }
  }

  return sync ? fileNames : new Promise((res) => res(fileNames));
};

/**
 * Returns an array of all files in a given directory.
 * 
 * @param {string} directory - The directory to scan.
 * @param {Object} options
 * @param {boolean} [options.foldersOnly=false] - Whether to include only directories or not.
 * @param {string} [options.ext=''] - The file extension to filter by.
 * @param {Boolean} options.sync
 */
const getFiles = toExport.getFiles = async (directory, options) => {
  let { ext, sync, foldersOnly } = options;
  sync = sync || true;
  foldersOnly = foldersOnly || false;
  ext = ext || ".js";

  let fileNames = [];

  const files = await fs.readdirSync(directory, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(directory, file.name);

    if (foldersOnly) {
      if (ext && path.extname(filePath) === ext) {
        fileNames.push(filePath);
      } else if (!ext) {
        fileNames.push(filePath);
      }
    } else {
      if (file.isFile()) {
        fileNames.push(filePath);
      }
    }
  }

  return sync ? fileNames : new Promise((res) => res(fileNames));
};

/**
 * Returns an array of all files and directories in a given directory without type information.
 * 
 * @param {String} directory
 * @param {Object} options
 * @param {string} [options.ext]
 * @param {Boolean} options.sync
 */
const getAllFilesWithoutType = toExport.getAllFilesWithoutType = async (directory, options) => {
  let { ext, sync } = options;
  sync = sync || true;
  ext = ext || ".js";

  let fileNames = [];
  const folderNames = await getAllFiles(directory, { foldersOnly: true });
  const extFiles = await getAllFiles(directory, { ext });

  fileNames = folderNames.concat(extFiles);

  return sync ? fileNames : new Promise((res) => res(fileNames));
};

/**
 * Returns an array of all files in a given directory without type information.
 * 
 * @param {String} directory
 * @param {Object} options
 * @param {string} [options.ext]
 * @param {Boolean} [options.sync]
 */
const getFilesWithoutType = toExport.getFilesWithoutType = async (directory, options) => {
  let { ext, sync } = options;
  sync = sync || true;
  ext = ext || ".js";

  let fileNames = [];
  const folderNames = await getFiles(directory, { foldersOnly: true });
  const extFiles = await getFiles(directory, { ext });

  fileNames = folderNames.concat(extFiles);

  return sync ? fileNames : new Promise((res) => res(fileNames));
};

/**
 * Get Data from any files
 * 
 * @param {String} filePath
 */
const getDataFile = toExport.getDataFile = async function(filePath) {
  const fileData = {};

  fileData.path = filePath = await fs.realpathSync(filePath);
  fileData.fileName = path.basename(filePath);
  fileData.parent = path.dirname(filePath);
  fileData.parentName = path.basename(fileData.parent) || fileData.parent;
  fileData.disk = filePath.replace(/\\/g, '/').split('/')[0] + "\\";

  ((fileData, stat) => {
    fileData.timeCreated = stat.birthtime;
    fileData.timeLastUse = stat.atime;
    fileData.modifyTime = stat.mtime;

    fileData.type = stat.isFile() ? "file" : (stat.isDirectory() ? "folder" : undefined);
    if (stat.isFile()) fileData.extension = path.extname(filePath) || "." + fileData.fileName.split(".").pop();
  })(fileData, await fs.statSync(filePath));

  return fileData;
};

/**
 * Get all files with an instant way
 * 
 * @param {String} filePath - Target Path
 * @param {Object} options { sync, ext, allFiles, fileType }
 * @param {String} options.ext - Filter Extension
 * @param {Boolean|Function} options.sync - Its Sync or with callback
 * @param {Boolean} options.allFiles - All files like `getAllFiles` or all files in one folder `getFiles`
 * @param {"foldersOnly"|"filesOnly"|"allType"} options.fileType - Filter if it folderOnly or not
 * @returns {Promise<Array<String>>|Array<String>}
 */
const instant = toExport.instant = async function(filePath, options) {
  let { ext, sync, allFiles, fileType } = options;
  ext = ext || ".js";
  sync = sync || true;
  allFiles = allFiles || true;
  fileType = fileType || "allType";

  let parameter = {};
  parameter.sync = sync;
  parameter.ext = ext;
  parameter.foldersOnly = fileType === "foldersOnly";

  const query = `get${allFiles ? "All" : ""}Files${fileType === "allType" ? "WithoutType" : ""}`;

  return toExport[query](filePath, parameter);
};

toExport.aio = toExport;

module.exports = toExport;
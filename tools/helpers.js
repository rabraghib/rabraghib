const fs = require('fs-extra');

module.exports = {
  getAllFilesInTree
};

function getAllFilesInTree(root, dir = root, results = []) {
  fs.readdirSync(dir).forEach(filePath => {
    filePath = dir + '/' + filePath;
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = [
        ...results,
        ...getAllFilesInTree(root, filePath, [...results])
      ];
    } else {
      results.push(filePath);
    }
  });
  return results;
}

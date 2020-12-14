const fs = require("fs");
const path = require("path");

module.exports = function (dirname, ext, callback) {
  var extension = "." + ext;
  fs.readdir(dirname, function (err, data) {
    if (err) callback(err, null);
    else {
      result = [];
      data.forEach(function (file) {
        if (path.extname(file) == extension) {
          result.push(file);
        }
      });
      callback(null, result);
    }
  });
};
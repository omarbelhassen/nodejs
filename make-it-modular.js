const MyModule= require("./my-module.js");
const dirname=process.argv[2];
const ext = process.argv[3];

MyModule(dirname, ext, function (err, files) {
    if (err) console.log("error", err);
    else for (i = 0; i < files.length; i++) console.log(files[i]);
  });
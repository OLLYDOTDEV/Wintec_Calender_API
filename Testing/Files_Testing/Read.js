var file = "helloworld.txt";

fs = require('fs');
fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });

// file = (string) filepath of the file to read
//https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
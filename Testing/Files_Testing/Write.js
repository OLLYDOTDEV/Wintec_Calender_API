fs = require('fs');
fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

// https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
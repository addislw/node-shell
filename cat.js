const fs = require("fs");
// const done = require("./bash");

module.exports = function (fileName, done) {
  // process.stdout.write()
  fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
      done(error);
    } else {
      done(data);
    }
  });
};

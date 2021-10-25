const fs = require("fs");
const done = require("./bash");

function ls() {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done(err);
    } else {
      done(files.join("\n"));
      // process.stdout.write(files.join("\n"));
      // process.stdout.write("prompt > ");
    }
  });
}

module.exports = ls();

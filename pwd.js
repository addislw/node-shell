// function pwd() {
//   process.stdout.write(process.cwd());
//   process.stdout.write("\nprompt > ");
// }
const done = require("./bash");


function pwd() {
  const workingDirectory = process.cwd();
  done(workingDirectory);
}

module.exports = pwd();

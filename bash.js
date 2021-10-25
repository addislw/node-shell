const cat = require('./cat');
const curl = require('./curl')

function done(arg) {
  process.stdout.write(arg);
  process.stdout.write("\nprompt > ");
}

function outPut() {
  process.stdout.write("prompt > ");

  process.stdin.on("data", (data) => {
    const command = data.toString().trim();
    if (command === "pwd") {
      require('./pwd');
    } else if (command === 'ls') {
      require('./ls');
    } else if (command.includes('cat')) {
      let cmdArr = command.split(' ');
      cat(cmdArr[1], done);

    } else {
      let cmdArr = command.split(" ");
      curl(cmdArr[1], done);
    }
  });

}
outPut();

module.exports = done;



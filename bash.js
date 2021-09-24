// const pwd = require("./pwd.js");
const mod;
// const fs = require("fs");

// process.stdout.write("prompt > ");

function outPut() {
  process.stdout.write("prompt > ");
  let cmd = process.stdin.on("data", (data) => {
    return data.toString().trim();
  });
  co
  return require(`./${cmd}.js`);
}
outPut();

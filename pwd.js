function pwd() {
  return process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();

    process.stdout.write(process.env[`${cmd.toUpperCase()}`]);

    process.stdout.write("\nprompt > ");
  });
}

module.exports = pwd();

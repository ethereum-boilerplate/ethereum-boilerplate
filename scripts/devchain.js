const { spawn } = require("child_process");
const worker = spawn("cmd.exe", [
  "/c",
  "cd Truffle && start cmd.exe /k ganache-cli -d --db data -i 1337 --port 7545",
]);

worker.on("close", function (code) {
  console.log("child process exited with code " + code);
});

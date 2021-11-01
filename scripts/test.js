// const cp = require("child_process");

// cp.spawn("cmd", ["/C", "start cmd.exe /k node scripts/index2.js"]);

const { spawn } = require("child_process");
spawn("cmd.exe", ["/c", "cd hardhat/scripts && start cmd.exe /k npx hardhat node"]);
// spawn("cmd.exe", ["/c", "cd hardhat/scripts && start cmd.exe /k node sample-script.js"]);
// const bat = spawn("cmd.exe", ["/c", "start cmd.exe /c /k  node scripts/index2.js"]);

// bat.stderr.on("data", (data) => {
//   console.error(data.toString());
// });

// bat.on("exit", (code) => {
//   console.log(`Child exited with code ${code}`);
// });

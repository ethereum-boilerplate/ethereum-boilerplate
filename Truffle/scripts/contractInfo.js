var fs = require("fs");

fs.copyFile("build/contracts/MetaCoin.json", "../src/contracts/contractInfo.json", (err) => {
  if (err) throw err;
  console.log("✅ Your contract's ABI was copied to the frontend");
});

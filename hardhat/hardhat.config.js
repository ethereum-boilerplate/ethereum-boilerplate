const { url } = require("inspector");

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      
    },
  goerli: {
      url: process.env.RpcProviderUrl,
      accounts: process.env.PRIV_KEY
    },
  },
  solidity: "0.8.17",
};

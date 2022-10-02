// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat');

async function main() {
  const MageToken = await hre.ethers.getContractFactory('MageToken');
  const MT = await MageToken.deploy();

  await MT.deployed();

  console.log(`Deployed Mage Token ${MT.address}`);

  const MageNFT = await hre.ethers.getContractFactory('MageNFT');
  const MNFT = await MageNFT.deploy();

  await MNFT.deployed();

  console.log(`Deployed Mage Token ${MNFT.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

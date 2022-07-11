export const TestGymBuddiesContract =
  "0xaf442b8249278126cc04038079a43f1721f48e1e";
export const TestGymBuddiesWithSnapLensContract =
  "0x68CB9498fA3346F6fB186073FeF9c933FF5d2e35";
export const AvaxMoralis2021HackatonNfts =
  "0xbba97ea3912c598a39ce0802d5cd67dd3d873457";
export const DemoNFT = "0xC2718Fbe99e408740eBad565334F6c8d8570B9AF";
export const AllowedNftContracts = new Map([
  [
    "0xa869", // AVAX fuji testnet
    [TestGymBuddiesContract, TestGymBuddiesWithSnapLensContract],
  ],
]);

export const DemoNFTContracts = new Map([
  [
    "0xa869", // AVAX fuji testnet
    DemoNFT,
  ],
]);

export const MainChainID = "0xa869"; // AVAX fuji testnet

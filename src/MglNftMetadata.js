export const TestGymBuddiesContract =
  "0xaf442b8249278126cc04038079a43f1721f48e1e";
export const TestGymBuddiesWithSnapLensContract =
  "0x63fDE70f34e23dC272d53dcB2aCd34B9A8DD0526";
export const AvaxMoralis2021HackatonNfts =
  "0xbba97ea3912c598a39ce0802d5cd67dd3d873457";
export const DemoNFT = "0xC5879FCFB810db94C6018Bb5BED41e64E10c016c";
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

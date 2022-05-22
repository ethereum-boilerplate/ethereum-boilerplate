const AvaxTestnetChainID = "0xa869";


const AvaxTestChainColelctions = [
  {
    image: "https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/cover.gif",
    name: "Moralis Avalanche Hackaton 2022 [ERC1155] Test Drop",
    addrs: "0xbba97ea3912c598a39ce0802d5cd67dd3d873457",
  },
  {
    image: "https://gateway.pinata.cloud/ipfs/QmPUQSULAxGXK321PMJKE5Qcs3xHvRuxDzDUjoB8g9cmzD/gbpx11.png",
    name: "GymBuddies 2022 [ERC721] Test Drop",
    addrs: "0x31c9a4d361fD82C291486B18715e8eAB26D2Bef9",
  },
];

export const networkCollections = new Map([
  [AvaxTestnetChainID, AvaxTestChainColelctions]
]);

export const getCollectionsByChain = (chain) => networkCollections.get(chain);

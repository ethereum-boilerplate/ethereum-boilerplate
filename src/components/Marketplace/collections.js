import { AllowedNftContracts } from "../../MglNftMetadata";

export const networkCollections = {
  "0xa869": [ // Avalanche Testnet
  ],
  "0x4": [ // rinkeby
    {
      image: "https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/cover.gif",
      name: "Moralis Avalanche Hackaton 2021 Test Drop",
      addrs: AllowedNftContracts.get("0x4"),
    },
  ]
};

export const getCollectionsByChain = (chain) => networkCollections[chain];

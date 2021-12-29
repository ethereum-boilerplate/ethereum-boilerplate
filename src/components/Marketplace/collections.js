import { GenericImg, MglGif } from "images";

export const networkCollections = {
  "0xa869": [ // Avalanche Testnet
  ],
  "0x4": [ // rinkeby
    {
      image: "https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/cover.gif",
      name: "Moralis Avalanche Hackaton 2021 Test Drop",
      addrs: "0x9ca6cf1671a384eccec958ea4ee27294e176b677"
    },
  ]
};

export const getCollectionsByChain = (chain) => networkCollections[chain];

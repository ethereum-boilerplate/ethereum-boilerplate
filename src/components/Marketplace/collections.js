import { GenericImg, MglGif } from "images";

export const networkCollections = {
  "0xa869": [ // Avalanche Testnet
  ],
  "0x4": [ // rinkeby
    {
      image: MglGif,
      name: "Moralis Avalanche Hackaton Drop",
      addrs: "0x7650D3448F8044d8732528148c2A2d6B1D17BA88"
    },
    {
      image: GenericImg,
      name: "Test MGL",
      addrs: "0x6d996636c3917d8D0B99Dc1D877Fbf7fC189c8f1"
    },
  ]
};

export const getCollectionsByChain = (chain) => networkCollections[chain];

import { AllowedNftContracts } from "../../MglNftMetadata";

const AvaxTestnetChainID = "0xa869";

export const networkCollections = new Map([
  [AvaxTestnetChainID,
    [
      {
        image: "https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/cover.gif",
        name: "GymBuddies 2022 Test Drop",
        addrs: AllowedNftContracts.get(AvaxTestnetChainID),
      },
    ]
  ],
]);

export const getCollectionsByChain = (chain) => networkCollections.get(chain);

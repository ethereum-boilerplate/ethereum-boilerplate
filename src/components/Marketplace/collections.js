import { TestGymBuddiesContract } from "../../MglNftMetadata";

const AvaxTestnetChainID = "0xa869";

const AvaxTestChainColelctions = [
  {
    name: "Initially Minted GymBuddies",
    addrs: TestGymBuddiesContract,
  },
];

export const networkCollections = new Map([
  [AvaxTestnetChainID, AvaxTestChainColelctions],
]);

export const getCollectionsByChain = (chain) => networkCollections.get(chain);

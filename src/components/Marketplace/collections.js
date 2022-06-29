import gymBuddiesCollectionGif from "../assets/marketplace/gym_buddies_collection.gif";
import {
  TestGymBuddiesContract,
  AvaxMoralis2021HackatonNfts,
} from "../../MglNftMetadata";

const AvaxTestnetChainID = "0xa869";

const AvaxTestChainColelctions = [
  {
    name: "Initially Minted GymBuddies",
    addrs: TestGymBuddiesContract,
  },
  // {
  //   name: "Moralis Avalanche Hackaton 2021 Avatars",
  //   addrs: AvaxMoralis2021HackatonNfts,
  // },
];

export const networkCollections = new Map([
  [AvaxTestnetChainID, AvaxTestChainColelctions],
]);

export const getCollectionsByChain = (chain) => networkCollections.get(chain);

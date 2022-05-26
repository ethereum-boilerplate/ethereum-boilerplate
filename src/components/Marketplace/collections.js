import gymBuddiesCollectionGif from "../assets/marketplace/gym_buddies_collection.gif";
import { TestGymBuddiesContract, AvaxMoralis2021HackatonNfts } from "../../MglNftMetadata";

const AvaxTestnetChainID = "0xa869";

const AvaxTestChainColelctions = [
  // commenting collections previously avialable on our marketplace
  // {
  //   image: gymBuddiesCollectionGif,
  //   name: "GymBuddies May 2022",
  //   addrs: TestGymBuddiesContract,
  // },
  // {
  //   image: "https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/cover.gif",
  //   name: "Moralis Avalanche Hackaton 2021 Avatars",
  //   addrs: AvaxMoralis2021HackatonNfts,
  // },
];

export const networkCollections = new Map([
  [AvaxTestnetChainID, AvaxTestChainColelctions]
]);

export const getCollectionsByChain = (chain) => networkCollections.get(chain);

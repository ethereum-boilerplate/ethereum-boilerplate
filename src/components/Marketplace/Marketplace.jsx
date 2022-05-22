import React from "react";
import { getCollectionsByChain } from "./collections";
import NFTCollectionItems from "./NFTCollectionItems";
import { paddingLRContent, } from "../../GlobalStyles";
import { MainChainID } from "../../MglNftMetadata";
import { descriptionStyle } from "../../GlobalStyles";
import { chainIdToNameAndLogo } from "../Chains/Chains";

function Marketplace() {
  const NFTCollections = getCollectionsByChain(MainChainID);
  const marketPlaceChainId = MainChainID;
  const chainName = chainIdToNameAndLogo.get(marketPlaceChainId)[0];
  const chainLogo = chainIdToNameAndLogo.get(marketPlaceChainId)[1];

  return (
    <div style={{
      ...paddingLRContent,
    }}>
      <div style={{
        padding: "0",
        margin: "0",
      }}>
        {/* NFTs view */}
        {NFTCollections?.map((nft, index) => {
          return (
            <NFTCollectionItems
              key={index}
              nftAddress={nft.addrs}
              colName={nft.name}
              colImg={nft.image || "error"}
            />
          )
        })
        }
        <br />
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...descriptionStyle,
      }}>
        NFTs collection on&nbsp;
        <span style={{
        }}>{chainName}</span>
        &nbsp;
        {chainLogo}
      </div>
    </div>
  );
}

export default Marketplace;

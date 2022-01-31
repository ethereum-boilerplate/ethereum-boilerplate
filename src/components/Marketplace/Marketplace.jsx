import React from "react";
import { getCollectionsByChain } from "./collections";
import NFTCollectionItems from "./NFTCollectionItems";
import { paddingLRContent, } from "../../GlobalStyles";
import { MainChainID } from "../../MglNftMetadata";

function Marketplace() {
  const NFTCollections = getCollectionsByChain(MainChainID);

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
    </div>
  );
}

export default Marketplace;

import React from "react";
import { getCollectionsByChain } from "./collections";
import {
  useMoralis,
} from "react-moralis";
import { Link } from "react-router-dom";
import NFTCollectionItems from "./NFTCollectionItems";
import { Button } from "antd";
import { BtnPrimary, BreakFlexDiv } from "../../GlobalStyles";
import { DefaultChainID } from "../../MglNftMetadata";

function Marketplace() {
  const { isAuthenticated } = useMoralis();
  const { chainId } = useMoralis();
  const NFTCollections = getCollectionsByChain(chainId) || getCollectionsByChain(DefaultChainID); // defaults to rinkeby

  return (
    <div>
      {isAuthenticated && (
        <div style={{
          ...BreakFlexDiv,
          marginLeft: "95%",
        }}>
          <Button
            type="primary"
            style={BtnPrimary}
          >
            <Link to="/your-transactions">
              Your transactions
            </Link>
          </Button>
        </div>
      )}

      <div style={{
        padding: "0",
        margin: "0",
      }}>
        {/* NFTs view */}
        {NFTCollections?.map((nft, index) => {
          console.log('nft', nft)
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

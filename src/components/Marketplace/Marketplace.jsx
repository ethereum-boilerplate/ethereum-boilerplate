import React from "react";
import { getCollectionsByChain } from "./collections";
import {
  useMoralis,
} from "react-moralis";
import { Link } from "react-router-dom";
import NFTCollectionItems from "./NFTCollectionItems";
import { Button } from "antd";
import { BtnPrimary, BreakFlexDiv } from "../../GlobalStyles";

function Marketplace() {

  const { chainId } = useMoralis();
  const NFTCollections = getCollectionsByChain(chainId);

  return (
    <div>
      <div style={{
        ...BreakFlexDiv,
        marginLeft: "100%",
        marginBottom: "1.8rem",
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

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
    <>
      <div style={{
        ...BreakFlexDiv,
        marginLeft: "70%",
        marginBottom: "3rem",
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

      <div>
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
    </>
  );
}

export default Marketplace;

import React from "react";
import { getCollectionsByChain } from "./collections";
import {
  useMoralis,
} from "react-moralis";
import { Link } from "react-router-dom";
import NFTCollectionItems from "./NFTCollectionItems";
import { Button } from "antd";
import { BtnPrimary, TopBtnDiv } from "../../GlobalStyles";

function Marketplace() {

  const { chainId } = useMoralis();
  const NFTCollections = getCollectionsByChain(chainId);

  return (
    <>
      <div style={{
        ...TopBtnDiv,
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
            <>
              <NFTCollectionItems
                nftAddress={nft.addrs}
                colName={nft.name}
                colImg={nft.image || "error"}
                key={index}
              />
              <br /><br />
            </>
          )
        })
        }
      </div>
    </>
  );
}

export default Marketplace;

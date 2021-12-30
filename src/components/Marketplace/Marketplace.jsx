import React from "react";
import { getCollectionsByChain } from "./collections";
import {
  useMoralis,
} from "react-moralis";
import { Link } from "react-router-dom";
import NFTCollectionItems from "./NFTCollectionItems";
import { Button } from "antd";

const styles = {
  transactions: {
    flexBasis: "100%",
    height: "0px",
    marginLeft: "70%",
    marginBottom: "3rem",
  }
};

function Marketplace() {

  const { chainId } = useMoralis();
  const NFTCollections = getCollectionsByChain(chainId);

  return (
    <>
      <div style={styles.transactions}>
        <Button
          type="primary"
          style={{
            fontWeight: "500",
            fontSize: "15px",
            fontFamily: "Roboto, sans-serif",
          }}
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

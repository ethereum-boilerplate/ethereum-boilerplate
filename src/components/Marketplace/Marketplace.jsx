import React from "react";
import { getCollectionsByChain } from "./collections";
import {
  useMoralis,
} from "react-moralis";
import { Link } from "react-router-dom";
import NFTCollectionItems from "./NFTCollectionItems";

const styles = {
  text: {
    fontSize: "27px",
    fontWeight: "bold",
  },
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
        <h3>
          You can check Your Transactions
          <Link to="/your-transactions">
            &nbsp;<b><u>here</u></b>
          </Link>
        </h3>
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

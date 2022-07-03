import React from "react";
import { Link } from "react-router-dom";
import { getCollectionsByChain } from "./collections";
import NFTCollectionItems from "./NFTCollectionItems";
import {
  paddingLRContent,
  BtnPrimary,
  BtnInfo,
  pageTitleStyle,
} from "../../GlobalStyles";
import { MainChainID } from "../../MglNftMetadata";
import { descriptionStyle } from "../../GlobalStyles";
import { Button } from "antd";

function Marketplace() {
  const NFTCollections = getCollectionsByChain(MainChainID);

  return (
    <div
      style={{
        ...paddingLRContent,
        marginTop: "3rem",
        marginBottom: "4rem",
        textAlign: "center",
      }}
    >
      <section>
        <div
          style={{
            ...pageTitleStyle,
          }}
        >
          Marketplace
        </div>
      </section>

      <section
        style={{
          ...descriptionStyle,
          padding: "2rem",
        }}
      >
        <p>GymBuddies arent available on our Marketplace for trading yet</p>
        <p>
          GymBuddies are now in <b>mint mode</b> 💪
        </p>

        <p>
          Go to our&nbsp;&nbsp;
          <Button
            type="primary"
            style={{
              ...BtnPrimary,
            }}
          >
            <Link to="/mint">Mint</Link>
          </Button>
          &nbsp;&nbsp;page and mint your GymBuddy
        </p>

        <div>
          You can read more&nbsp;&nbsp;
          <Button
            style={BtnInfo}
            onClick={() =>
              window.open(`https://docs.metagymland.com/marketplace`, "_blank")
            }
          >
            here
          </Button>
          &nbsp;&nbsp;about what will be avialable on our Marketplace soon 🚀
        </div>
      </section>
      <section>
        <div
          style={{
            padding: "0",
            margin: "0",
          }}
        >
          {/* NFTs view */}
          {NFTCollections?.map((nft, index) => {
            return (
              <NFTCollectionItems
                key={index}
                nftAddress={nft.addrs}
                colName={nft.name}
                colImg={nft.image || "error"}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Marketplace;

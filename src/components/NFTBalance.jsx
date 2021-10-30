import React from "react";
import { Card, Image } from "antd";
import { useNFTBalance } from "hooks/useNFTBalance";
const { Meta } = Card;

const styles = {
  NFTs: {
    display: "flex",
    flexWrap: "wrap",
    WebkitBoxPack: "start",
    justifyContent: "flex-start",
    margin: "0 auto",
    maxWidth: "1000px",
    gap: "10px",
  },
};

function NFTBalance(options) {
  const { NFTBalance } = useNFTBalance();
  console.log(NFTBalance);
  return (
    <>
      <div style={styles.NFTs}>
        {NFTBalance &&
          NFTBalance.map((nft, index) => (
            <Card
              hoverable
              style={{ width: 240, border: "2px solid #e7eaf3" }}
              cover={<Image alt="example" src={nft.metadata?.image} />}
            >
              <Meta title={nft.name} description={nft.token_address} />
            </Card>
          ))}
      </div>
    </>
  );
}

export default NFTBalance;

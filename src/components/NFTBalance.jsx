import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Card, Avatar, Row, Col } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useNFTBalance } from "hooks/useNFTBalance";
const { Meta } = Card;

const styles = {
  NFTs: {
    display: "flex",
    flexWrap: "wrap",
    webkitBoxPack: "start",
    justifyContent: "flex-start",
  },
};

function NFTBalance(props) {
  const { NFTBalance } = useNFTBalance();
  console.log(NFTBalance);
  // display: flex;
  //   flex-wrap: wrap;
  //   -webkit-box-pack: start;
  //   justify-content: flex-start;
  return (
    <>
      <div style={styles.NFTs}>
        <Card
          hoverable
          style={{ width: 240, border: "2px solid #e7eaf3" }}
          cover={
            <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    </>
  );
}

export default NFTBalance;

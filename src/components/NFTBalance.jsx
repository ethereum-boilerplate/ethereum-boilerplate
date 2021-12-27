import React, { useState } from "react";
import { useMoralis, useNFTBalances, useWeb3ExecuteFunction } from "react-moralis";
import { Modal, Alert, Button, Card, Image, Tooltip, Skeleton } from "antd";
import { FileSearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
import { useVerifyMetadata } from "hooks/useVerifyMetadata";
import { getEllipsisTxt } from "../helpers/formatters";
import { mainBackgroundCol, brightFontCol } from "GlobalStyles";
import { Input, Divider } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const styles = {
  NFTs: {
    display: "flex",
    flexWrap: "wrap",
    WebkitBoxPack: "start",
    justifyContent: "flex-start",
    margin: "0 auto",
    maxWidth: "1000px",
    width: "100%",
    gap: "10px",
  },
};

function NFTBalance() {
  const { data: NFTBalances } = useNFTBalances();
  console.log('fetching NFTBalances', NFTBalances)
  const { chainId } = useMoralis();
  const { verifyMetadata } = useVerifyMetadata();

  const [visible, setVisibility] = useState(false);
  const [nftToList, setNftToList] = useState(null);
  const [listingPrice, setListingPrice] = useState(0);

  // const notDeployedABI = '{"noContractDeployed": true}'
  const deployedABI = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"bool","name":"sold","type":"bool"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"MarketItemSold","type":"event"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct MarketPlace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]'
  const [contractABI, setContractABI] = useState(deployedABI); //Smart Contract ABI here
  const mainMarketAddress = "0x38132af11613795d87343f87d6f43aa0d97fb8a2"
  const [marketAddress, setMarketAddress] = useState(mainMarketAddress)

  const contractABIJson = JSON.parse(contractABI)
  const contractProcessor = useWeb3ExecuteFunction();
  const listItemFunction = "createMarketItem";

  const handleListForSaleClick = (nft) => {
    setNftToList(nft);
    console.log(nft.image);
    setVisibility(true);
  };

  const listNft = async () => {
    if (listingPrice <= 0) {
      alert("price must be greater then 0");
    }
    const p = listingPrice * ("1e" + 18);
    const ops = {
      contractAddress: marketAddress,
      functionName: listItemFunction,
      abi: contractABIJson,
      params: {
        nftContract: nftToList.token_address,
        tokenId: nftToList.token_id,
        price: String(p)
      }
    };
    console.log('listNft', listingPrice, ops.params, ops.contractAddress);
    await contractProcessor.fetch({
      params: ops,
      onSuccess: () => {
        alert("item listed");
      },
      onError: (err) => {
        alert(err);
      }
    });
  };

  console.log("NFTBalances", NFTBalances);
  return (
    <div style={{
      padding: "15px",
      maxWidth: "1030px",
      width: "100%",
      background: mainBackgroundCol,
      color: brightFontCol,
    }}>
      <h1 style={{
        fontFamily: "Source Serif Pro, sans-serif",
      }}>🖼 Your Avatars and Wearables</h1>
      <br />
      <h3>
        If you have your MGL Avatar NFT 🙂
      </h3>
      <h3>
        Then you will be albe to 🎮{" "}{" "}Play in MetaGymLand Metaverse
      </h3>
      <h3>
        by clicking <b style={{ color: "#1990FF" }}>[play with me]</b> button{" "}🔘
      </h3>
      <h3>
        If you don't have your awesome Avatar yet, get one in our
        {" "}<Link to="/marketplace">
          <b><u>Marketplace</u></b>
        </Link>{" "}🚀
      </h3>
      {NFTBalances?.result &&
        <Divider style={{ backgroundColor: brightFontCol }} />}
      <div style={styles.NFTs}>
        <Skeleton loading={!NFTBalances?.result}>
          {NFTBalances?.result &&
            NFTBalances.result
              .filter(nft => nft.image)
              .map((nft, index) => {
                //Verify Metadata
                nft = verifyMetadata(nft);
                return (
                  <>
                    <Card
                      hoverable
                      actions={[
                        <Tooltip title="View On Blockexplorer">
                          <FileSearchOutlined
                            onClick={() => window.open(`${getExplorer(chainId)}address/${nft.token_address}`, "_blank")}
                          />
                        </Tooltip>,
                        <Tooltip title="List for Sale">
                          <ShoppingCartOutlined onClick={() => handleListForSaleClick(nft)} />
                        </Tooltip>,
                      ]}
                      style={{ width: 240, border: "2px solid #e7eaf3" }}
                      cover={
                        <Image
                          preview={false}
                          src={nft?.image || "error"}
                          fallback="data:image/png;base64,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"
                          alt=""
                          style={{ height: "300px" }}
                        />
                      }
                      key={index}
                    >
                      <Meta title={nft.name} description={
                        <>
                          <span><b>{getEllipsisTxt(nft.token_address, 7)}</b></span>
                          &nbsp;
                          <span>id: <b>{nft.token_id}</b></span>
                          <p>amount: <b>{nft.amount}</b></p>
                        </>
                      } />
                      <br />
                      <Button
                        onClick={() => alert('will play')}
                        type="primary"
                        style={{ marginLeft: "20%" }}
                      >play with me
                      </Button>
                    </Card>
                    <Modal
                      title={`List ${nftToList?.name} #${nftToList?.token_id}`}
                      visible={visible}
                      onCancel={() => setVisibility(false)}
                      onOk={() => {
                        listNft()
                        if (listingPrice > 0) setVisibility(false);
                      }}
                      okText="List for Sale"
                    >
                      <img
                        src={nftToList?.image}
                        alt=""
                        style={{
                          width: "250px",
                          margin: "auto",
                          borderRadius: "10px",
                          marginBottom: "15px",
                        }}
                      />
                      {/* <Alert
                        message="This NFT is currently not for sale"
                        type="warning"
                      /> */}
                      <Input
                        autoFocus
                        required
                        placeholder="set price"
                        onChange={e => setListingPrice(e.target.value)}
                      />
                    </Modal>
                  </>
                );
              })}
        </Skeleton>
      </div>
    </div>
  );
}

export default NFTBalance;

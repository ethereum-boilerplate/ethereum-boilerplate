import React, { useState } from "react";
import { useMoralis, useNFTBalances } from "react-moralis";
import {
  Card,
  Image,
  Tooltip,
  Modal,
  Input,
  Skeleton,
  Typography,
  Button,
  Divider,
  notification,
} from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  FileSearchOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
// import AddressInput from "./AddressInput";
import { useVerifyMetadata } from "hooks/useVerifyMetadata";
import { useIfContractOwner } from "hooks/useIfContractOwner";

const { Meta } = Card;

const { Text } = Typography;

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
  title: {
    fontSize: "18px",
    fontWeight: "800",
  },
  subTitle: {
    fontSize: "16px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  input: {
    margin: "10px 0 0 0",
  },
  icon: {
    margin: "0 5px 0 0",
  },
  card: {
    margin: "0 10px 10px auto",
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
  boundary: {
    display: "flex",
    margin: "10px",
    padding: "10px",
  },
};

function NFTBalance() {
  const { data: NFTBalances } = useNFTBalances();
  const { Moralis, chainId, account } = useMoralis();
  const [lockVisibility, setLockVisibility] = useState(false);
  const [createContentVisibility, setCreateContentVisibility] = useState(false);
  // const [receiverToSend, setReceiver] = useState(null);
  // const [amountToSend, setAmount] = useState(null);
  const [lockContent, setLockContent] = useState(null);
  const [editorSummaryContent, setEditorSummaryContent] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { verifyMetadata } = useVerifyMetadata();
  // const { isContractOwner } = useIfContractOwner();
  // let contractOwner = null;

  async function transfer(nft, amount, receiver) {
    // console.log(nft, amount, receiver);
    const options = {
      type: nft?.contract_type?.toLowerCase(),
      tokenId: nft?.token_id,
      receiver,
      contractAddress: nft?.token_address,
    };

    if (options.type === "erc1155") {
      options.amount = amount ?? nft.amount;
    }

    setIsPending(true);

    try {
      const tx = await Moralis.transfer(options);
      console.log(tx);
      setIsPending(false);
    } catch (e) {
      alert(e.message);
      setIsPending(false);
    }
  }

  const checkContractOwnership = async (nft) => {
    setIsPending(true);
    const walletAddress = nft?.owner_of;
    const contractAddress = nft?.token_address;
    console.log("walletAddress: " + walletAddress);
    console.log("contractAddress: " + contractAddress);
    console.log("chainId: " + chainId);

    if (walletAddress && contractAddress && chainId) {
      try {
        const options = {
          address: contractAddress,
          chain: chainId,
          topic0:
            "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
        };

        try {
          const contractOwners = await Moralis.Web3API.native.getLogsByAddress(
            options
          );

          setIsPending(false);

          const contractOwnerAddress = contractOwners?.result[0]?.topic2;
          if (contractOwnerAddress) {
            console.log(
              "contractOwnerAddress: " +
                contractOwnerAddress.replace("0x000000000000000000000000", "0x")
            );
          }

          if (
            contractOwnerAddress &&
            walletAddress &&
            contractOwnerAddress.replace("0x000000000000000000000000", "0x") ===
              walletAddress
          ) {
            setLockVisibility(false);
            setCreateContentVisibility(true);
            console.log(`Owner of contract`);
          } else {
            setLockVisibility(false);
            openNotification(
              "error",
              "Not owner of contract",
              "Sorry, but you are not the owner of the contract"
            );
            console.log(`Not owner of contract`);
          }
        } catch (e) {
          console.log(e);
          openNotification("error", "An error occurred", e.message);
        }
      } catch (e) {
        console.log(e);
        openNotification("error", "An error occurred", e.message);
      }
    }
    setIsPending(false);
  };

  const createUnlockableContent = (content) => {
    setIsPending(true);

    // check if content is empty and if already exists??

    try {
      const newCollection = Moralis.Object.extend("Collections");
      const collection = new newCollection();
      collection.set("contractAddress", lockContent.token_address);
      collection.set("walletAddress", lockContent.owner_of);
      collection.set("content", content);
      collection.save();

      setIsPending(false);
      setCreateContentVisibility(false);
      openNotification(
        "info",
        "Content created",
        "Your Unlockable content has been saved and connected to your contract"
      );
    } catch (e) {
      alert(e.message);
      setIsPending(false);
    }
  };

  const handleLockContentClick = (nft = null) => {
    setLockContent(nft);
    setLockVisibility(true);
  };

  const handleLockContentChange = (e) => {
    setLockContent({
      owner_of: account,
      token_address: e.target.value,
    });
  };

  const openNotification = (type, title, message) => {
    notification[type]({
      message: title,
      description: message,
    });
  };

  const clearLocalStorage = () => {
    window.localStorage.clear();
  };

  // console.log("NFTBalances: ", NFTBalances);
  // console.log("account: ", account);

  return (
    <div style={styles.boundary}>
      <Card
        style={styles.card}
        title={
          <>
            <Text style={styles.title} strong>
              My NFTs
            </Text>
          </>
        }
      >
        <Card
          style={styles.card}
          title={
            <>
              <Text style={styles.subTitle}>Unlock content</Text>
            </>
          }
        >
          <Text>
            {" "}
            <UnlockOutlined style={styles.icon} /> Click the "Unlock" icon next
            to each of your NFTs to reveal unlockable content
          </Text>
        </Card>

        <Card
          style={styles.card}
          title={
            <>
              <Text style={styles.subTitle}>Lock content</Text>
            </>
          }
        >
          <Text>
            <Button
              type="primary"
              icon={<LockOutlined />}
              onClick={() => handleLockContentClick()}
            >
              Enter Contract Address
            </Button>
          </Text>
          <Divider dashed />
          <Text>
            {" "}
            <LockOutlined style={styles.icon} /> Or, click the "Lock" icon next
            to each NFT to create unlockable content (will display if you own
            it)
          </Text>
        </Card>
      </Card>
      <div style={styles.NFTs}>
        <Skeleton loading={!NFTBalances?.result}>
          {NFTBalances?.result &&
            NFTBalances.result.map((nft, index) => {
              // verify Metadata
              nft = verifyMetadata(nft);

              // if (index === 0) {
              //   contractOwner = isContractOwner(nft);
              // } else {
              //   console.log(
              //     `Local Contract Owner: ${JSON.parse(
              //       window.localStorage.getItem("contractOwner")
              //     )}`
              //   );
              // }

              return (
                <Card
                  hoverable
                  actions={[
                    <Tooltip title="View Unlockable Content">
                      <UnlockOutlined
                        onClick={() => handleLockContentClick(nft)}
                      />
                    </Tooltip>,
                    <Tooltip title="Create Unlockable Content">
                      <LockOutlined
                        onClick={() => handleLockContentClick(nft)}
                      />
                    </Tooltip>,
                    <Tooltip title="View On Blockexplorer">
                      <FileSearchOutlined
                        onClick={() =>
                          window.open(
                            `${getExplorer(chainId)}address/${
                              nft.token_address
                            }`,
                            "_blank"
                          )
                        }
                      />
                    </Tooltip>,
                  ]}
                  style={{ width: "auto", border: "2px solid #e7eaf3" }}
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
                  <Meta title={nft.name} description={nft.token_address} />
                </Card>
              );
            })}
        </Skeleton>
      </div>
      <Modal
        title={"Create Unlockable content"}
        visible={lockVisibility}
        onCancel={() => setLockVisibility(false)}
        onOk={() => checkContractOwnership(lockContent)}
        confirmLoading={isPending}
        okText="Check Ownership"
      >
        <Text style={{ display: "flex", margin: "0 0 15px 0" }}>
          Enter your Contract Address so we can check you own the contract. Then
          you can create Unlockable content for your whole collection.
        </Text>
        <Input
          autoFocus
          placeholder="Your Contract Address"
          onChange={(e) => handleLockContentChange(e)}
          showCount
          maxLength={42}
          value={
            lockContent && lockContent.hasOwnProperty("token_address")
              ? lockContent.token_address
              : ""
          }
        />
      </Modal>
      <Modal
        title={"Success!! Start creating Unlockable content"}
        visible={createContentVisibility}
        onCancel={() => setCreateContentVisibility(false)}
        onOk={() => createUnlockableContent(editorSummaryContent)}
        confirmLoading={isPending}
        okText="Create Content"
      >
        <Text strong>Collection Summary</Text>
        <ReactQuill
          theme="snow"
          onChange={setEditorSummaryContent}
          placeholder={"Add a summary for your collection of NFTs.."}
          value={editorSummaryContent || ""}
        />
      </Modal>
    </div>
  );
}

export default NFTBalance;

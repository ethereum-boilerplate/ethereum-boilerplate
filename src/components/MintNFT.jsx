import React, { useState } from "react";
import { Card, Typography, Input, Button } from "antd";
import AddressInput from "./AddressInput";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
    width: "50%",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function MintNFT() {
  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  const [receiver, setReceiver] = useState();
  const [title, setTitle] = useState();
  const [company, setCompany] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [file, setFile] = useState();

  const handleSubmit = async () => {
    if (receiver && company && startDate && endDate && title) {
      const moralisFile = new Moralis.File("companylogo.jpg", file);
      await moralisFile.saveIPFS();

      const metadata = {
        name: "hackathonNFT",
        description: "This is a test",
        image: moralisFile.ipfs(),
        startDate: startDate,
        endDate: endDate,
        company: company,
        title: title,
      };
      const metadataFile = new Moralis.File("file.json", {
        base64: btoa(JSON.stringify(metadata)),
      });
      await metadataFile.saveIPFS();

      const options = {
        contractAddress: "0x80Fe0cf72Ab51e08C98132E4350a72833bcC4e66",
        functionName: "mintNFT",
        abi: [
          {
            inputs: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "string",
                name: "tokenURI",
                type: "string",
              },
            ],
            name: "mintNFT",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        params: {
          recipient: receiver,
          tokenURI: metadataFile.ipfs(),
        },
      };
      contractProcessor.fetch({
        params: options,
        onSuccess: () => console.log("Success!!!!!"),
      });
    }
  };

  return (
    <Card
      style={styles.card}
      title={
        <>
          📝 <Text strong>Add work experience</Text>
        </>
      }
    >
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>Address:</Text>
        </div>
        <AddressInput autoFocus onChange={setReceiver} />
      </div>
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>Company:</Text>
        </div>
        <Input size="large" onChange={(e) => setCompany(e.target.value)} />
      </div>
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>Title:</Text>
        </div>
        <Input size="large" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>Start Date:</Text>
        </div>
        <Input
          type="date"
          size="large"
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>End Date:</Text>
        </div>
        <Input
          type="date"
          size="large"
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>File input:</Text>
        </div>
        <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <Button
        type="primary"
        size="large"
        // loading={isPending}
        style={{ width: "100%", marginTop: "25px" }}
        onClick={handleSubmit}
        // disabled={!tx}
      >
        Mint Badge Experience💸
      </Button>
    </Card>
  );
}

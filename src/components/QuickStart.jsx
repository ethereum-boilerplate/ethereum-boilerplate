import { Button, Card, Typography } from "antd";
import React, { useState } from "react";
import { useWeb3ExecuteFunction } from "react-moralis";

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
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart() {
  const contractProcessor = useWeb3ExecuteFunction();
  const [greeting, setGreeting] = useState();

  const getGreeting = async () => {
    console.log("hola mundo");
    let options = {
      contractAddress: "0x2e9C55895aE664B9A8B1744E7AF6E91Ac1cEd09F",
      functionName: "greet",
      abi: [
        {
          inputs: [],
          name: "greet",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
      ],
    };

    await contractProcessor.fetch({
      params: options,
      onSuccess: (greeting) => {
        setGreeting(greeting);
      },
    });
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            📝 <Text strong>Greeting Contract</Text>
          </>
        }
      >
        <Button onClick={() => getGreeting()}>Get Greeting</Button>
        <Text>{greeting}</Text>
      </Card>
    </div>
  );
}

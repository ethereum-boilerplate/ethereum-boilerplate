import { Card, Typography } from "antd";
import React from "react";
import { useMoralis, useERC20Balances } from "react-moralis";
import { Form, Input, Button, Radio } from "antd";

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

export default function CreateNewTasks({ isServerInfo }) {
  var id;
  const { isAuthenticated, account, Moralis } = useMoralis();

  const serverUrl = "https://2y4fie29aopv.usemoralis.com:2053/server";
  const appId = "kbEuDXuHtw9wrigBfvdMiicU7AUuDqfgHNRQgJGL";
  Moralis.start({ serverUrl, appId });

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card className="task-card" style={styles.card} title={<></>}>
        <Text>Create new tasks</Text>
        
      </Card>
    </div>
  );
}

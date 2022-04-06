import React, { useState } from "react";
import { Card, Typography, Input, Button } from "antd";
import AddressInput from "./AddressInput";

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
  const [receiver, setReceiver] = useState();
  const [title, setTitle] = useState();
  const [company, setCompany] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const transfer = () => {
    if (receiver && company && startDate && endDate && title) {
      console.log("hola mundo");
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
        <Input size="large" onChange={setCompany} />
      </div>
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>Title:</Text>
        </div>
        <Input size="large" onChange={setTitle} />
      </div>
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>Start Date:</Text>
        </div>
        <Input type="date" size="large" onChange={setStartDate} />
      </div>
      <div style={styles.select}>
        <div style={styles.textWrapper}>
          <Text strong>End Date:</Text>
        </div>
        <Input type="date" size="large" onChange={setEndDate} />
      </div>
      <Button
        type="primary"
        size="large"
        // loading={isPending}
        style={{ width: "100%", marginTop: "25px" }}
        onClick={() => transfer()}
        // disabled={!tx}
      >
        Transfer💸
      </Button>
    </Card>
  );
}

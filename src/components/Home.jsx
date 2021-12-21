import { Card, Typography } from "antd";
import React from "react";
import { Button } from 'antd';
const { Text } = Typography;

const styles = {
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
};

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            <Text strong>Gamify daily stretches
              with AI and blockchain</Text>
          </>
        }
      >
        Have fun and get fit!
        <br /><br />
        <Button onClick={() => alert('will play')}
          type="primary">
          Play now
        </Button>
        <Button
          href="https://moralis.io"
          target="_blank"
        >
          Whitepaper
        </Button>
      </Card>
      <div>
        <Card style={styles.card}>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/y-SmsMRFeEc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </Card>
      </div>
    </div>
  );
}

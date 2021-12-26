import { Card, Typography } from "antd";
import React from "react";
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { mainBackgroundCol, brightFontCol } from "GlobalStyles";
import { Link } from "react-router-dom";

const { Text } = Typography;

const styles = {
  titleText: {
    fontSize: "36px",
    justifyContent: "center",
    color: brightFontCol,
  },
  text: {
    fontSize: "18px",
    justifyContent: "center",
    color: brightFontCol,
  },
  card: {
    border: "none",
    borderBottom: "none",
    background: mainBackgroundCol,
    color: brightFontCol,
  },
  btn: {
    height: "fit-content",
    display: "flex",
    justifyContent: "space-between",
    verticalAlign: "center",
    borderRadius: "0.6rem",
    fontWeight: "500",
    fontSize: "18px",
    fontFamily: "Roboto, sans-serif",
  }
};

export default function Home() {
  return (
    <Row>
      <Col span={24}>
        <div style={
          {
            display: "flex",
            gap: "10px"
          }
        }>
          <Card
            style={styles.card}
            title={
              <>
                <Text strong style={styles.titleText}>
                  Gamify daily stretches<br />
                  with AI and blockchain
                </Text>
              </>
            }
          >
            <Text style={styles.text}>
              Have fun and get fit!
            </Text>
            <br /><br />
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "0.1rem",
              }}
            >
              <Button
                type="primary"
                style={styles.btn}
              >
                
                <Link to="/avatars">Play now</Link>
              </Button>
              <Button
                href="https://coderdidit.com"
                target="_blank"
                type="default"
                style={styles.btn}
              >Whitepaper</Button>
            </div>
          </Card>
          <Card
            style={styles.card}
            title={
              <Text style={styles.text}>
                Example of Gamifying Stretches:
              </Text>
            }
          >
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
      </Col>
    </Row>
  );
}

import { Card, Typography } from "antd";
import React from "react";
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { mainBackgroundCol, brightFontCol } from "GlobalStyles";
import { Link } from "react-router-dom";

const { Text } = Typography;

const styles = {
  titleText: {
    fontSize: "35px",
    justifyContent: "center",
    color: brightFontCol,
    fontFamily: "Source Serif Pro, sans-serif",
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
    fontWeight: "500",
    fontSize: "15px",
    fontFamily: "Roboto, sans-serif",
    width: "7rem",
  }
};

export default function Home() {
  return (
    <>
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
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "4.5rem",
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
            // title={
            //   <Text style={styles.text}>
            //     Example of Gamifying Stretches:
            //   </Text>
            // }
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
      <Row style={{
        fontFamily: "Source Serif Pro, sans-serif",
        flexBasis: "100%",
        height: "0",
        justifyContent: "center",
        marginTop: "6rem"
      }}>
        <Col span={100} style={{
          textAlign: "center"
        }}>
          <h1>Roadmap</h1>
          ...
        </Col>
      </Row>
      <Row style={{
        fontFamily: "Source Serif Pro, sans-serif",
        flexBasis: "100%",
        height: "0",
        justifyContent: "center",
        marginTop: "12rem",
        marginBottom: "10rem"
      }}>
        <Col span={100} style={{
          textAlign: "center"
        }}>
          <h1>Team</h1>
          ...
        </Col>
      </Row>
    </>
  );
}

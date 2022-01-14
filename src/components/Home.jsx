import { Card, Typography, Divider } from "antd";
import React from "react";
import { Button } from 'antd';
import { Row, Col } from 'antd';
import {
  brightFontCol,
  pageTitleStyle,
  descriptionStyle
} from "GlobalStyles";
import { Link } from "react-router-dom";
import { BtnPrimary } from "../GlobalStyles";
import {
  SmileFilled, VideoCameraFilled,
  WalletFilled, SkinFilled
} from "@ant-design/icons";

const { Text } = Typography;

const styles = {
  homeGlobal: {
    color: brightFontCol,
  },
  titleText: {
    ...pageTitleStyle,
  },
  text: {
    ...descriptionStyle,
  },
  card: {
    border: "none",
    borderBottom: "none",
    background: "none",
    color: brightFontCol,
    lineHeight: "1.4",
  }
};

export default function Home() {
  return (
    <div style={styles.homeGlobal}>
      <Row>
        <Col span={24}>
          <div style={
            {
              display: "flex",
              gap: "10rem",
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
              <div style={{
                marginTop: "-25px",
              }}>
                <Text style={styles.text}>
                  Have fun and get fit!
                </Text>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "left",
                    alignItems: "center",
                    marginTop: "5rem",
                  }}
                >
                  <Button
                    type="primary"
                    style={{
                      ...BtnPrimary,
                    }}
                  >
                    <Link to="/avatars">
                      Play now
                    </Link>
                  </Button>
                  <Button style={{
                    ...BtnPrimary,
                  }}>
                    <Link to="/demo-avatar">
                      Try with Demo Avatar
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
            <Card
              style={styles.card}
            >
              <div style={{
                boxShadow: "0 0 70px 5px #020811",
                position: "relative",
                backgroundColor: "#020811",
              }}>
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
        flexBasis: "100%",
        marginTop: "2rem",
        marginBottom: "2rem"
      }}>
        <Col span={100} >
          <h1 style={{
            fontFamily: "Source Serif Pro",
            fontSize: "25px",
            padding: "1rem",
          }}>How it works?</h1>
          <div style={{
            ...descriptionStyle,
          }}>
            <ol style={{
              listStyle: "none",
              textAlign: "left",
              padding: "1rem",
              margin: 0,
            }}>
              <li>1. Connect your wallet&nbsp;&nbsp;
                <WalletFilled style={{ color: "#CE6527" }} /></li>
              <li>2. Select or buy your NFT avatar&nbsp;&nbsp;
                <SkinFilled style={{ color: "#64B1FF" }} /></li>
              <li>3. Enable your Webcam&nbsp;&nbsp;
                <VideoCameraFilled style={{ color: "#4957CB" }} /></li>
              <li>4. Join MetaGymLand&nbsp;&nbsp;🎉</li>
            </ol>
            <div style={{
              padding: "1rem",
            }}>Or you can skip steps 1 and 2 for now&nbsp;&nbsp;
              <SmileFilled style={{ color: "#FFBE59" }} />&nbsp;&nbsp;
              By clicking&nbsp;&nbsp;&nbsp;
              <Button style={BtnPrimary}>
                <Link to="/demo-avatar">
                  Try with Demo Avatar
                </Link>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Divider style={{
        backgroundColor: "#032139",
      }}></Divider>
      <Row style={{
        flexBasis: "100%",
        marginTop: "2rem",
        marginBottom: "3rem"
      }}>

        <Col span={100} style={{
          textAlign: "center"
        }}>
          <div style={{
            ...descriptionStyle,
          }}>
            Want to be notified about our progress and future plans?&nbsp;&nbsp;&nbsp;
            <Button type="primary" style={BtnPrimary}>Sing Up to MetaGymLand Newsletter</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

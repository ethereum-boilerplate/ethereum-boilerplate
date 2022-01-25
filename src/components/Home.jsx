import { Card, Typography, Divider } from "antd";
import React from "react";
import { Button, Image } from 'antd';
import {
  brightFontCol,
  pageTitleStyle,
  pageTitle2Style,
  descriptionStyle
} from "GlobalStyles";
import { Link } from "react-router-dom";
import { BtnPrimary, BtnInfo } from "../GlobalStyles";
import mglVideoDemoImg from "./assets/mgl_video_demo.png";
import howItWorksImg from "./assets/how_it_works.png";


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
    lineHeight: "0.8",
  }
};

const LRPadding = "5rem";

export default function Home() {
  return (
    <div
      style={{
        paddingLeft: LRPadding,
        paddingRight: LRPadding,
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Card
          style={styles.card}
          title={
            <>
              <Text strong style={styles.titleText}>
                Ready to get started?
              </Text>
            </>
          }
        >
          <div style={{
          }}>
            <Text style={styles.text}>
              Follow steps below, have fun and get fit!
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
                ...BtnInfo,
              }}>
                <Link to="/demo-avatar">
                  Try with Demo Avatar
                </Link>
              </Button>
            </div>
          </div>
        </Card>
        <Card
          style={{
            ...styles.card,
          }}
        >
          <div>
            <Image
              preview={false}
              src={mglVideoDemoImg}
              alt=""
              className="demo-video"
              style={{
                width: "720px",
                minHeight: "392px",
                padding: "0px",
                margin: "0px",
                // imageRendering: "pixelated",
              }}
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=Bv7i0m6Szzc`,
                  "_blank"
                )
              }
            />
          </div>
        </Card>
      </div>
      {/* </Row> */}
      <div style={{
        flexBasis: "100%",
      }} />
      <div style={{
        padding: "0.5rem 1rem 3rem 1rem",
      }}>
        <Text strong style={pageTitle2Style}>
          How it works?
        </Text>
      </div>
      <div>
        <Image
          preview={false}
          src={howItWorksImg}
          alt=""
          style={{
          }}
        />
      </div>
      <div style={{
        flexBasis: "100%",
      }} />
      <Divider style={{
        backgroundColor: "#032139",
      }}></Divider>
      <div style={{
        marginTop: "3rem",
        marginBottom: "3rem",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{
          textAlign: "center"
        }}>
          <div style={{
            ...descriptionStyle,
          }}>
            Want to be notified about our progress and future plans?&nbsp;&nbsp;&nbsp;
            <Button type="primary"
              style={BtnPrimary}
              onClick={() =>
                window.open(
                  `https://coderdidit.ck.page/666d446d94`,
                  "_blank"
                )
              }
            >
              Sing up to newsletter
            </Button>
          </div>
        </div>
        <div style={{
          flexBasis: "100%",
        }} />
        <div style={{
          marginTop: "2rem",
          textAlign: "center",
          fontSize: "18px",
        }}>
          <span style={{
            opacity: 0.2,
          }}>contact:</span>
          &nbsp;&nbsp;
          <span>coderdidit@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

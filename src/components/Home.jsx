import { Typography, Divider } from "antd";
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

const LRPadding = "6rem";

export default function Home() {
  return (
    <div
      style={{
        paddingLeft: LRPadding,
        paddingRight: LRPadding,
      }}
    >
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}>
        <div style={{
          padding: "2rem 1rem",
        }}>
          <div strong style={{
            ...styles.titleText,
            paddingTop: "1rem",
          }}>
            Ready to get started?
          </div>
          <div style={{
            ...styles.text,
            paddingTop: "1rem",
          }}>
            Follow steps below, have fun and get fit!
          </div>

          <div style={{
            paddingTop: "4.5rem",
          }}>
            <Button
              type="primary"
              style={{
                ...BtnPrimary,
                marginRight: "1rem",
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

        <div>
          <Image
            preview={false}
            src={mglVideoDemoImg}
            alt=""
            className="demo-video"
            style={{
              width: "100%",
              padding: "0px",
              margin: "0px",
            }}
            onClick={() =>
              window.open(
                `https://www.youtube.com/watch?v=Bv7i0m6Szzc`,
                "_blank"
              )
            }
          />
        </div>
      </section>

      <div style={{
        flexBasis: "100%",
      }} />
      <section>
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
      </section>
      <div style={{
        flexBasis: "100%",
      }} />
      <Divider style={{
        backgroundColor: "#032139",
      }}></Divider>
      <section>
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
      </section>
    </div>
  );
}

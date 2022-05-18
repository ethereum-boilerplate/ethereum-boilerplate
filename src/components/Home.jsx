import { Divider } from "antd";
import React from "react";
import { Button, Image } from 'antd';
import {
  brightFontCol,
  pageTitleStyle,
  pageTitle2Style,
  descriptionStyle,
  paddingLRContent,
} from "GlobalStyles";
import { Link } from "react-router-dom";
import { BtnPrimary, BtnInfo } from "../GlobalStyles";
import mglVideoDemoImg from "./assets/mgl_video_demo.png";
import howItWorksImg from "./assets/how_it_works.png";
import { SocialsComponent } from "./SocialsPage";
import {
  MGLSmallLogo
} from "../Logos";

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

export default function Home() {
  return (
    <div
      style={{
        ...paddingLRContent,
      }}
    >
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        paddingLeft: "6rem",
        paddingRight: "6rem",
      }}>
        <div style={{
        }}>
          <div style={{
            ...styles.titleText,
            paddingTop: "1rem",
          }}>
            Ready to get started?
          </div>
          <div style={{
            ...styles.text,
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
                Try with Demo GymBuddy
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
                `https://www.youtube.com/watch?v=KDhVAucOtOg`,
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
          <div style={pageTitle2Style}>
            How it works?
          </div>
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
            display: "grid",
            placeItems: "center",
          }}>
            <SocialsComponent />
          </div>

          <div style={{
            marginTop: "2rem",
            textAlign: "center",
            fontSize: "18px",
          }}>
            <MGLSmallLogo
              width={"25"}
              height={"25"}
              viewBox={"0 0 16 16"}
            />
            <div style={{
              opacity: 0.8,
            }}>
              <a style={{
                textDecoration: "none",
                color: brightFontCol,
              }}
                href="mailto:metagymland@gmail.com">metagymland@gmail.com</a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

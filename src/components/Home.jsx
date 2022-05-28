import React from "react";
import { Button, Image } from 'antd';
import { PlaySquareOutlined } from "@ant-design/icons";
import {
  mainFontColor,
  pageTitleStyle,
  pageTitle2Style,
  descriptionStyle,
  BtnSecondary,
  secondaryBgColor,
  gradientBg2,
} from "GlobalStyles";
import { Link } from "react-router-dom";
import { BtnPrimary, BtnInfo } from "../GlobalStyles";
import homePageImg from "./assets/home_page/home_page_img.png";
import howItWorks1 from "./assets/home_page/how_it_works_1.png";
import howItWorks2 from "./assets/home_page/how_it_works_2.png";
import howItWorks3 from "./assets/home_page/how_it_works_3.png";
import { SocialsComponent } from "./SocialsPage";
import {
  MGLSmallLogo
} from "../Logos";

const styles = {
  homeGlobal: {
    color: mainFontColor,
  },
  titleText: {
    ...pageTitleStyle,
  },
  text: {
    ...descriptionStyle,
    color: "#FFFFFF",
  },
  card: {
    border: "none",
    borderBottom: "none",
    background: "none",
    color: mainFontColor,
    lineHeight: "0.8",
  }
};

export default function Home() {
  return (
    <div>
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.5fr",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "6rem",
        paddingRight: "6rem",
        background: gradientBg2,
      }}>
        <div style={{
        }}>
          <div style={{
            ...styles.titleText,
            paddingTop: "3rem",
            color: "#FFFFFF",
          }}>
            Ready to get started?
          </div>
          <div style={{
            ...styles.text,
            fontSize: "20px",
          }}>
            Follow steps below, have fun and get fit!
          </div>

          <div style={{
            paddingTop: "1.5rem",
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

        <Image
          preview={false}
          src={homePageImg}
          alt=""
          style={{
            width: "100%",
            padding: "0px",
            margin: "0px",
          }}
        />
      </section>

      <section>
        <div style={{
          textAlign: "center",
          padding: "1.5rem 1rem 1rem 1rem",
        }}>
          <div style={pageTitle2Style}>
            How it works?
          </div>

          <Button
            style={{
              ...BtnSecondary,
              margin: "1rem",
            }}
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=zQo0HaJRFu4",
                "_blank"
              )
            }
          >
            <PlaySquareOutlined /> Watch video
          </Button>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          justifyContent: "center",
          textAlign: "center",
          ...descriptionStyle,
        }}>
          <div>
            <Image
              preview={false}
              src={howItWorks1}
              alt=""
              style={{
                width: "80%",
                padding: "0px",
                margin: "0px",
              }}
            />
            <p style={{
              fontWeight: 500,
              // marginBottom: "1rem",
            }}>1. Connect your wallet</p>
            <p>Currently, we are on Avalanche fuji testnet.</p>
          </div>
          <div>
            <Image
              preview={false}
              src={howItWorks2}
              alt=""
              style={{
                width: "80%",
                padding: "0px",
                margin: "0px",
              }}
            />
            <p style={{
              fontWeight: 500,
              marginBottom: "1rem",
            }}>2. Buy or mint your GymBuddy</p>
            <p>You can buy your GymBuddy in</p>
            <p>'Marketplace' or Mint on 'Mint' page</p>
            <p>Play with your existing GymBuddies</p>
            <p>or try MetaGymLand with Free demo GymBuddy</p>
          </div>
          <div>
            <Image
              preview={false}
              src={howItWorks3}
              alt=""
              style={{
                width: "80%",
                padding: "0px",
                margin: "0px",
              }}
            />
            <p style={{
              fontWeight: 500,
              marginBottom: "1rem",
            }}>3. Enable your Webcam and join MetaGymLand</p>

            <p>Click 'Play with me' on selected GymBuddy</p>
            <p>and decide which Webcam you would like</p>
            <p>to enable to play MetaGymLand</p>
          </div>
        </div>
      </section>
      <div style={{
        flexBasis: "100%",
      }} />

      <section style={{
        marginTop: "3rem",
        // marginBottom: "3rem",
        padding: "2.8rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: secondaryBgColor,
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
          <MGLSmallLogo />
          <div style={{
            marginTop: "1rem",
          }}>
            <a style={{
              textDecoration: "none",
              color: mainFontColor,
            }}
              href="mailto:metagymland@gmail.com">metagymland@gmail.com</a>
          </div>

        </div>
      </section>
    </div>
  );
}

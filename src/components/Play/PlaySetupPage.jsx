import React, { useContext } from "react";
import { AvatarCtx } from "index";
import { Redirect } from "react-router";
import { Select, Image, Card, Button, Typography } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { BtnPrimary } from "../../GlobalStyles";
import { NFTsDiv, NFTImg, BreakFlexDiv, brightFontCol } from "../../GlobalStyles";
import { VideoCameraFilled } from "@ant-design/icons";
import Webcam from "react-webcam";

const { Text } = Typography;
const { Option } = Select;
const videoConstraints = {
    // width: 320,
    // height: 240,
    // facingMode: "user"
};

const styles = {
    titleText: {
        justifyContent: "center",
        color: brightFontCol,
        fontFamily: "Source Serif Pro",
    },
    card: {
        border: "none",
        borderBottom: "none",
        background: "none",
        color: brightFontCol,
        lineHeight: "1.4",
        padding: "0",
    },
    btnDiv: {
        display: "flex",
        marginTop: "0",
    },
    sideDiv: {
        padding: "2rem",
        margin: "1.5rem 0",
    },
    noPadNoMarg: {
        padding: "0",
        margin: "0"
    }
};

const PlaySetupPage = () => {
    const [avatar] = useContext(AvatarCtx);
    if (!avatar) {
        return <Redirect to="/avatars" />;
    }
    const handleChange = () => {

    }
    return (<>
        <Card style={{
            ...styles.card,
            ...styles.noPadNoMarg
        }}>
            <h1 style={{
                fontFamily: "Source Serif Pro",
                fontSize: "25px",
            }}>
                <b>Welcome!</b>
            </h1>
            <div style={{
                ...NFTsDiv,
                ...styles.sideDiv,
                border: "3px solid #d3d3d3",
                borderRadius: "1rem",
                backgroundColor: "#FFF",
            }}>
                <Image
                    preview={false}
                    src={avatar?.uri || "error"}
                    fallback="data:image/png;base64,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"
                    alt=""
                    style={NFTImg}
                />
            </div>
        </Card>
        <Card style={{
            ...styles.card,
            ...styles.noPadNoMarg,
            width: "25%",
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Webcam
                    audio={false}
                    videoConstraints={videoConstraints}
                    style={{
                        objectFit: "cover",
                        borderRadius: "1rem",
                        width: "80%"
                    }}
                />
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "2rem",
                paddingBottom: "1rem",
            }}>
                <VideoCameraFilled style={{
                    fontSize: "1.2rem",
                }} />&nbsp;&nbsp;
                <Select defaultValue="lucy" style={{
                    width: 240,
                }}
                    onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </Select>
            </div>
            <div style={{
                ...BreakFlexDiv,
                textAlign: "center",
            }}>
                <p>Having trouble with your video?</p>
            </div>
        </Card>

        {/*  */}
        <div style={BreakFlexDiv}></div>
        <div style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-evenly",
        }}>
            <Card style={styles.card}>
                <div>
                    <div
                        style={{
                            ...styles.btnDiv,
                            justifyContent: "left",
                        }}
                    >
                        <Button
                            type="primary"
                            style={BtnPrimary}
                            onClick={() => window.history.back()}
                        >
                            <LeftOutlined />Back
                        </Button>
                    </div>
                </div>
            </Card>
            <Card style={styles.card} >
                <div
                    style={{
                        ...styles.btnDiv,
                        justifyContent: "right",
                    }}
                >
                    <Button
                        style={{
                            ...BtnPrimary,
                            backgroundColor: "#20BF96",
                        }}
                    >
                        <Link to='/play'>
                            Join MetaGymLand <RightOutlined />
                        </Link>
                    </Button>
                </div>
            </Card></div>
    </>);
}

export default PlaySetupPage;

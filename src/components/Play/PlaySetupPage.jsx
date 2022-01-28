import React, { useContext } from "react";
import { AvatarCtx } from "index";
import { Redirect } from "react-router";
import { Image, Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { BtnPrimary, BtnInfo } from "../../GlobalStyles";
import { NFTImg, BreakFlexDiv, brightFontCol, mainBgColorDarker } from "../../GlobalStyles";
import SelectWebcam from "components/Webcam/SelectWebcam";
import { WebcamCtx } from "index";
import PoseDetWebcam from "components/Webcam/PoseDetWebcam";


const PlaySetupPage = () => {
    const [avatar] = useContext(AvatarCtx);
    const { webcamId } = useContext(WebcamCtx);

    if (!avatar) {
        return <Redirect to="/avatars" />;
    }

    return (
        <div style={{
            marginBottom: "6rem",
        }}>
            <div style={{
                boxShadow: "0 0 20px 2px #020811",
                backgroundColor: mainBgColorDarker,
                borderRadius: "1rem",
                padding: "3rem 3rem",
                marginTop: "1.5rem",
            }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                }}>
                    <div style={{
                    }}>
                        <h1 style={{
                            fontFamily: "Source Serif Pro",
                            fontSize: "25px",
                        }}>
                            <b>Welcome!</b>
                        </h1>
                        <div style={{
                            padding: "1rem 0",
                            textAlign: "center",
                            margin: "1.5rem 0",
                            border: "3px solid #d3d3d3",
                            borderRadius: "1rem",
                            backgroundColor: "#FFF",
                            paddingBottom: "1rem",
                            maxWidth: "300px",
                        }}>
                            <Image
                                preview={false}
                                src={avatar?.uri || "error"}
                                fallback="data:image/png;base64,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"
                                alt=""
                                style={NFTImg}
                            />
                        </div>
                        <div style={{
                            paddingTop: "1rem"
                        }}>
                            <Button
                                type="primary"
                                style={BtnPrimary}
                                onClick={() => window.history.back()}
                            >
                                <LeftOutlined />
                                Back
                            </Button></div>
                    </div>
                    <div style={{
                    }}>
                        <PoseDetWebcam
                            sizeProps={{
                                maxWidth: "380px",
                                height: "auto",
                                margin: "0",
                            }}
                            styleProps={{
                                boxShadow: "0 0 10px 2px #202020",
                                borderRadius: "25px",
                            }}
                        />

                        <div style={{
                            padding: "2rem 0",
                            textAlign: "center",
                            margin: "1.5rem 0",
                        }}>
                            <p style={{
                                textAlign: "center",
                            }}>Please select your webcam&nbsp;📷
                            </p>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingTop: "1rem",
                                paddingBottom: "1rem",
                                textAlign: "center",
                            }}>
                                <SelectWebcam width={"15rem"} />
                            </div>
                            <div style={{
                                ...BreakFlexDiv,
                            }}></div>
                            <p style={{
                                opacity: "0.5",
                                textAlign: "center",
                            }}><u>Having trouble with your video?</u>
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-2rem",
                    paddingBottom: "1rem",
                }}>
                    <Button
                        disabled={webcamId == null}
                        className="join-mgl-btn"
                        style={{
                            ...BtnInfo,
                        }}
                    >
                        <Link to='/play'>
                            Join MetaGymLand <RightOutlined />
                        </Link>
                    </Button>
                </div></div>
        </div>);

}

export default PlaySetupPage;

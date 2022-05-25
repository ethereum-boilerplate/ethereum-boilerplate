import { Divider } from "antd";
import packageJson from '../package.json';
import { mainFontColor } from "GlobalStyles";
import {
    MGLSmallLogo,
    MoralisLogo,
    AvaxLogo,
    CoderDitiLogo,
    TfJSLogo,
    MediaPipeLogo,
    PhaserLogo,
} from "Logos";

export const AppFooter = ({ style }) => {
    return (
        <>
            <Divider style={{
                ...style,
                backgroundColor: mainFontColor,
                margin: "0.5rem 0rem"
            }} />

            <footer style={{
                ...style,
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            }}>
                <div style={{
                    textAlign: "left",
                }}>
                    <MGLSmallLogo
                        width={"25"}
                        height={"25"}
                        viewBox={"0 0 16 16"}
                    />
                </div>

                <div style={{
                    textAlign: "center",
                }}>
                    <div style={{ color: mainFontColor }}>
                        <div>Built with</div>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://moralis.io"
                        >
                            <MoralisLogo />
                        </a>
                    </div>
                </div>
                <div style={{
                    textAlign: "center",
                }}>
                    <div style={{ color: mainFontColor }}>
                        <div>Powered by</div>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.avax.network"
                        >
                            <span style={{ display: "flex", justifyContent: "center" }}><AvaxLogo /></span>
                        </a>
                    </div>
                </div>
                <div style={{
                    textAlign: "center",
                }}>
                    <div style={{ color: mainFontColor }}>
                        AI Powered by<div>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.tensorflow.org/js"
                            >
                                <TfJSLogo textFill={"#595959"} />
                            </a>&nbsp;&nbsp;
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://mediapipe.dev"
                            >
                                <MediaPipeLogo textFill={"#595959"} />
                            </a></div>
                    </div>
                </div>
                <div style={{
                    textAlign: "center",
                }}>
                    <div style={{ color: mainFontColor }}>
                        <div>Game Engine</div>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://phaser.io"
                        >
                            <PhaserLogo
                                width={"60"}
                                height={"25"}
                            />
                        </a>
                    </div>
                </div>
                <div style={{
                    textAlign: "center",
                }}>
                    <div style={{ color: mainFontColor }}>
                        <div>Coded by</div>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://coderdidit.com"
                        >
                            <CoderDitiLogo />
                        </a>
                    </div>
                </div>
                <div
                >
                    <div style={{
                        textAlign: "right",
                    }}>
                        <b>v{packageJson.version}</b>
                    </div>
                </div>
            </footer>
        </>
    );
};

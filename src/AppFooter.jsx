import { Divider } from "antd";
import Text from "antd/lib/typography/Text";
import packageJson from '../package.json';
import { brightFontCol } from "GlobalStyles";
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
                backgroundColor: brightFontCol,
                margin: "0.5rem 0"
            }} />

            <footer style={{
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
                    <Text style={{ color: brightFontCol }}>
                        <div>Built with</div>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://moralis.io"
                        >
                            <MoralisLogo />
                        </a>
                    </Text>
                </div>
                <div style={{
                    textAlign: "center",
                }}>
                    <Text style={{ color: brightFontCol }}>
                        <div>Powered by</div>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.avax.network"
                        >
                            <span style={{ display: "flex", justifyContent: "center" }}><AvaxLogo /></span>
                        </a>
                    </Text>
                </div>
                <div style={{
                    textAlign: "center",
                }}>
                    <Text style={{ color: brightFontCol }}>
                        AI Powered by<div>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.tensorflow.org/js"
                            >
                                <TfJSLogo textFill={"#FFF"} />
                            </a>&nbsp;&nbsp;
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://mediapipe.dev"
                            >
                                <MediaPipeLogo textFill={"#FFF"} />
                            </a></div>
                    </Text>
                </div>
                <div style={{
                    textAlign: "center",
                }}>
                    <Text style={{ color: brightFontCol }}>
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
                    </Text>
                </div>
                <div style={{
                    textAlign: "center",
                }}>
                    <Text style={{ color: brightFontCol }}>
                        <div>Coded by</div>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://coderdidit.com"
                        >
                            <CoderDitiLogo />
                        </a>
                    </Text>
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

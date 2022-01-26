import { Layout, Divider } from "antd";
import Text from "antd/lib/typography/Text";
import { Row, Col } from 'antd';
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
const { Footer } = Layout;

const secFooterSpan = 2;

export const AppFooter = ({ style }) => {
    return (
        <Footer style={{
            ...style
        }}>
            <Divider style={{
                backgroundColor: brightFontCol,
                margin: "0.5rem 0"
            }} />

            <Row
                justify="space-between"
                align="stretch"
                style={{
                    alignItems: "center",
                    textAlign: "center",
                    background: "none",
                }}
            >
                <Col span={secFooterSpan} style={{
                    textAlign: "left",
                }}>
                    <MGLSmallLogo
                        width={"25"}
                        height={"25"}
                        viewBox={"0 0 16 16"}
                    />
                </Col>

                <Col span={secFooterSpan}>
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
                </Col>
                <Col span={secFooterSpan}>
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
                </Col>
                <Col span={{
                    ...secFooterSpan,
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
                </Col>
                <Col span={secFooterSpan}>
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
                </Col>
                <Col span={secFooterSpan}>
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
                </Col>
                <Col span={secFooterSpan}
                >
                    <div style={{
                        textAlign: "right",
                    }}>
                        <b>v{packageJson.version}</b>
                    </div>
                </Col>
            </Row>
        </Footer>
    );
};

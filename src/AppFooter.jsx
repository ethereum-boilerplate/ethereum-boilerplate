import { Layout, Divider } from "antd";
import Text from "antd/lib/typography/Text";
import { Row, Col } from 'antd';
import packageJson from '../package.json';
import { brightFontCol } from "GlobalStyles";
import {
    MGLLogo,
    MoralisLogo,
    AvaxLogo,
    CoderDitiLogo,
    TfJSLogo,
    MediaPipeLogo
} from "Logos";
const { Footer } = Layout;

const topFooterSpan = 2;
const secFooterSpan = 2;

export const AppFooter = () => {
    return (
        <Footer style={{
            background: "none",
            color: brightFontCol
        }}>
            <Divider style={{
                backgroundColor: brightFontCol,
                margin: "0"
            }} />
            <Row style={{
                textAlign: "right",
            }}>
                <Col span={topFooterSpan} >
                    <MGLLogo />
                </Col>
                <Col span={topFooterSpan} offset={20} >
                    <div style={{
                        marginTop: "0.9rem",
                    }}>
                        <b>v{packageJson.version}</b>
                    </div>
                </Col>
            </Row>
            <Row
                justify="space-around"
                style={{
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    verticalAlign: "center",
                }}>
                <Col span={secFooterSpan}>
                    <Text style={{ color: brightFontCol }}>
                        Built with {" "}
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
                        Powered by {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.avax.network"
                        >
                            <span style={{ display: "flex", justifyContent: "center" }}><AvaxLogo /></span>
                        </a>
                    </Text>
                </Col>
                <Col span={secFooterSpan}>
                    <Text style={{ color: brightFontCol }}>
                        AI Powered by<div>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.tensorflow.org/js"
                            >
                                <TfJSLogo textFill={"#FFF"} />
                            </a>
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
                        Coded by {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://coderdidit.com"
                        >
                            <CoderDitiLogo />
                        </a>
                    </Text>
                </Col>
            </Row>
        </Footer>
    );
};

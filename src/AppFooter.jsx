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
const secFooterSpan = 4;

export const AppFooter = ({ style }) => {
    return (
        <Footer style={{
            ...style
        }}>
            <Divider style={{
                backgroundColor: brightFontCol,
                margin: "0"
            }} />
            <Row
                justify="space-between"
                align="stretch"
                style={{
                    textAlign: "right",
                }}>
                <Col span={topFooterSpan} style={{
                    marginTop: "-0.3rem",
                }}>
                    <MGLLogo width={"149"} height={"53"} />
                </Col>
                <Col span={topFooterSpan} offset={20} >
                    <div style={{
                        marginTop: "0.7rem",
                    }}>
                        <b>v{packageJson.version}</b>
                    </div>
                </Col>
            </Row>
            <Row
                justify="center"
                align="stretch"
                style={{
                    alignItems: "center",
                    textAlign: "center",
                    // justifyContent: "center",
                    // verticalAlign: "center",
                    marginTop: "-2.8rem"
                }}
            >
                <Col span={secFooterSpan}>
                    <Text style={{ color: brightFontCol }}>
                        Built with {" "}<br />
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
                        Powered by {" "}<br />
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
                        Coded by {" "}<br />
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

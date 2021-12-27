import { Layout, Divider } from "antd";
import Text from "antd/lib/typography/Text";
import { Row, Col } from 'antd';
import packageJson from '../package.json';
import { mainBackgroundCol, brightFontCol } from "GlobalStyles";
import { MGLLogo, MoralisLogo, AvaxLogo, } from "Logos";
const { Footer } = Layout;
const secFooterSpan = 50;

export const AppFooter = () => {
    return (
        <Footer style={{
            background: mainBackgroundCol,
            color: brightFontCol
        }}>
            <Divider style={{ backgroundColor: brightFontCol }} />
            <Row gutter={16} style={{
                textAlign: "center",
            }}>
                <Col className="gutter-row" span={12} style={{ color: brightFontCol }}>
                    <MGLLogo />
                </Col>
                <Col className="gutter-row" span={12} style={{ color: brightFontCol }}>
                    <b>v{packageJson.version}</b>
                </Col>
            </Row>
            <Row justify="space-around" style={{
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                verticalAlign: "center"
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
                    &nbsp;
                    <Divider type="vertical" style={{ backgroundColor: brightFontCol }} />
                    &nbsp;&nbsp;
                </Col>
                <Col span={secFooterSpan}>
                    <Text style={{ color: brightFontCol }}>
                        Powered by {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.avax.network"
                        >
                            <span><AvaxLogo /></span>
                        </a>
                    </Text>
                    &nbsp;
                    <Divider type="vertical" style={{ backgroundColor: brightFontCol }} />
                    &nbsp;&nbsp;
                </Col>
                <Col span={secFooterSpan}>
                    <Text style={{ color: brightFontCol }}>
                        Powered by {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.tensorflow.org/js"
                        >
                            TensorFlowJS
                        </a>
                    </Text>
                    &nbsp;
                    <Divider type="vertical" style={{ backgroundColor: brightFontCol }} />
                    &nbsp;&nbsp;
                </Col>
                <Col span={secFooterSpan}>
                    <Text style={{ color: brightFontCol }}>
                        Coded by {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://coderdidit.com"
                        >
                            C{"{o}"}derDidit
                        </a>
                    </Text>
                </Col>
            </Row>
        </Footer>
    );
};

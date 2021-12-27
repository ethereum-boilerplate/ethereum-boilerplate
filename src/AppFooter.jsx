import { Layout, Divider } from "antd";
import Text from "antd/lib/typography/Text";
import { Row, Col } from 'antd';
import packageJson from '../package.json';
import { mainBackgroundCol, brightFontCol } from "GlobalStyles";
import { MGLLogo } from "Logos";
const { Footer } = Layout;

export const AppFooter = () => {
    return (
        <Footer style={{ textAlign: "center", background: mainBackgroundCol, color: brightFontCol }}>
            <Divider style={{ backgroundColor: brightFontCol }} />
            <Row gutter={16}>
                <Col className="gutter-row" span={12} style={{ color: brightFontCol }}>
                    <MGLLogo />
                </Col>
                <Col className="gutter-row" span={12} style={{ color: brightFontCol }}>
                    <b>v{packageJson.version}</b>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Text style={{ color: brightFontCol }}>
                        Built with {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://moralis.io"
                        >
                            Moralis
                        </a>
                    </Text>
                    <Divider type="vertical" style={{ backgroundColor: brightFontCol }} />
                    <Text style={{ color: brightFontCol }}>
                        Powered by {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.avax.network"
                        >
                            Avalanche
                        </a>
                    </Text>
                    <Divider type="vertical" style={{ backgroundColor: brightFontCol }} />
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
                    <Divider type="vertical" style={{ backgroundColor: brightFontCol }} />
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

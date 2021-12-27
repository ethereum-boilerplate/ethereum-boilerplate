import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import { Layout, Divider } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Home from "components/Home";
import Marketplace from "components/Marketplace";
import Transactions from "components/Transactions"
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import MenuItems from "./components/MenuItems";
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import packageJson from '../package.json';
import { mainBackgroundCol, brightFontCol } from "GlobalStyles";
import { MGLLogo } from "Logos";

const { Header, Footer } = Layout;

const styles = {
  homeLink: {
    color: "inherit",
    fontSize: "17px",
    fontWeight: "500",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    padding: "0 10px",
    // borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    // boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};

const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={
      {
        height: "100vh",
        overflow: "auto",
        background: mainBackgroundCol,
        fontFamily: "Roboto, sans-serif",
      }}>
      <Router>
        <Header style={styles.header}>
          <div style={{
            marginTop: "1rem",
            display: "flex"
          }}>
            <Link to="/" style={styles.homeLink}><MGLLogo /></Link>
          </div>
          <MenuItems />
          <div style={styles.headerRight}>
            <NativeBalance />
            <Account />
            <Chains />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/" onEnter={() => console.log('home')}>
              <Home />
            </Route>
            <Route path="/avatars">
              <NFTBalance />
            </Route>
            <Route path="/marketplace">
              <Marketplace />
            </Route>
            <Route path="/your-transactions">
              <Transactions />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center", background: mainBackgroundCol, color: brightFontCol }}>
        <Divider style={{ backgroundColor: brightFontCol }} />
        <Row>
          <Col span={100} style={{ color: brightFontCol }}>
            <b>META GYM LAND</b> version: {packageJson.version}
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
    </Layout>
  );
};

export default App;

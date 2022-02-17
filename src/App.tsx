import { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Wallet } from "views/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import { DEX } from "views/DEX";
import ERC20Balances from "views/ERC20Balances";
import Ramper from "views/Ramper";
import NFTBalance from "views/NFTBalance";
import { Contract } from "views/Contract";
import { ERC20Transfers } from "views/ERC20Transfers";
import QuickStart from "views/QuickStart";
import GlobalFooter from "components/GlobalFooter";
import GlobalHeader from "components/GlobalHeader";

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
};
interface AppProps {
  isServerInfo: boolean;
}
const App: FC<AppProps> = (props) => {
  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <GlobalHeader />
        <div style={styles.content}>
          <Switch>
            <Route exact path="/quickstart">
              <QuickStart isServerInfo={props.isServerInfo} />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/1inch">
              <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                  <DEX chain="eth" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                  <DEX chain="bsc" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                  <DEX chain="polygon" />
                </Tabs.TabPane>
              </Tabs>
            </Route>
            <Route path="/ERC20Balances">
              <ERC20Balances />
            </Route>
            <Route path="/onramp">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/">
              <Redirect to="/quickstart" />
            </Route>
            <Route path="/ethereum-boilerplate">
              <Redirect to="/quickstart" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <GlobalFooter />
    </Layout>
  );
};

export default App;

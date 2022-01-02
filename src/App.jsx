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
import UserNFTTransactions from "components/UserNFTTransactions"
import Contract from "components/Contract/Contract";
import MenuItems from "./components/MenuItems";
import { Link } from "react-router-dom";
import { brightFontCol } from "GlobalStyles";
import { MGLLogo } from "Logos";
import { AppFooter } from "AppFooter";
import PlayPage from "components/Play";
import PlaySetupPage from "components/Play/PlaySetupPage";
import { mainBackground } from "GlobalStyles";

const { Header } = Layout;

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
    marginTop: "40px",
    height: "100vh",
  },
  header: {
    // position: "fixed",
    // zIndex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    padding: "0 35px",
    background: "none",
    height: "60px",
    // borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    // boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    fontSize: "17px",
    fontWeight: "500",
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
        background: mainBackground,
        fontFamily: "Roboto, sans-serif",
      }}>
      <Router>
        <Header style={styles.header}>
          <div style={{
            marginTop: "1rem",
            display: "flex",
            background: "none",
          }}>
            <Link to="/" style={styles.homeLink}><MGLLogo /></Link>
          </div>
          <MenuItems />
          <div style={styles.headerRight}>
            <Divider
              type="vertical"
              style={{
                height: "1.8em",
                backgroundColor: brightFontCol
              }}
            />
            <NativeBalance />
            <Account />
            <Chains />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/avatars">
              <NFTBalance />
            </Route>
            <Route path="/play">
              <PlayPage />
            </Route>
            <Route path="/play-setup">
              <PlaySetupPage />
            </Route>
            <Route path="/marketplace">
              <Marketplace />
            </Route>
            <Route path="/your-transactions">
              <UserNFTTransactions />
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
      <AppFooter />
    </Layout>
  );
};

export default App;

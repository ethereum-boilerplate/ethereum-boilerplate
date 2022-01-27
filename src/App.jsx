import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import DemoAvatar from "components/DemoAvatar";
import { Layout, Divider } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Home from "components/Home";
import Marketplace from "components/Marketplace";
import UserNFTTransactions from "components/UserNFTTransactions"
import LoaderTest from "components/LoaderTest";
import Contract from "components/Contract/Contract";
import MenuItems from "./components/MenuItems";
import { Link } from "react-router-dom";
import { brightFontCol } from "GlobalStyles";
import { MGLLogo } from "Logos";
import { AppFooter } from "AppFooter";
import PlayPage from "components/Play";
import GymRoomSandbox from "components/Play/games/GymRoomSandbox";
import PlaySetupPage from "components/Play/PlaySetupPage";
import { ConnectWalletWarn, UseCorrectNetworkWarn } from "./components/Warrnings";
import RewardsPage from "./components/Rewards";
import { MainChainID } from "MglNftMetadata";

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
    marginBottom: "40px",
    minHeight: "80vh",
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    padding: 0,
    background: "none",
    height: "60px",
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
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading, chainId } = useMoralis();
  const LRPadding = "2rem";

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <div style={
      {
        background: "none",
        fontFamily: "Roboto, sans-serif",
        color: brightFontCol,
        paddingLeft: LRPadding,
        paddingRight: LRPadding,
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
              {(() => {
                if (isAuthenticated && chainId === MainChainID) {
                  return <NFTBalance />
                } else if (isAuthenticated && chainId !== MainChainID) {
                  return <UseCorrectNetworkWarn />
                } else {
                  return <ConnectWalletWarn />
                }
              })()}
            </Route>
            <Route path="/demo-avatar">
              <DemoAvatar />
            </Route>
            <Route path="/play">
              <PlayPage />
            </Route>
            <Route path="/sandbox-play">
              <GymRoomSandbox />
            </Route>
            <Route path="/loader">
              <LoaderTest />
            </Route>
            <Route path="/play-setup">
              <PlaySetupPage />
            </Route>
            <Route path="/rewards">
              <RewardsPage />
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
    </div>
  );
};

export default App;

import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import Text from "antd/lib/typography/Text";
import MenuItems from "./components/MenuItems";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "60px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <MenuItems />
          <div style={styles.headerRight}>
            <Chains />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/">
              <NFTBalance />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
          ©2022 by Unlockable Content. All rights reserved.
        </Text>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80px"
      height="80px"
      viewBox="0 0 80 80"
      version="1.1"
    >
      <path d="M 48.542969 24.542969 L 31.457031 24.542969 C 22.921875 24.542969 16 31.464844 16 40 C 16 48.535156 22.921875 55.457031 31.457031 55.457031 L 48.535156 55.457031 C 57.078125 55.457031 64 48.535156 64 40 C 64 31.464844 57.078125 24.542969 48.542969 24.542969 Z M 48.433594 52.433594 C 41.625 52.433594 36.105469 46.910156 36.105469 40.105469 C 36.105469 33.296875 41.625 27.777344 48.433594 27.777344 C 55.238281 27.777344 60.761719 33.296875 60.761719 40.105469 C 60.757812 46.910156 55.238281 52.433594 48.433594 52.433594 Z M 48.433594 52.433594 " />
    </svg>
  </div>
);

export default App;

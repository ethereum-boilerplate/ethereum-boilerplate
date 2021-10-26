import React from "react";
import { Flex } from "../../uikit/Flex/Flex";
import Transfer from "./components/Transfer";
// import styles from "./styles";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import NativeBalance from "../NativeBalance";
import Address from "../Address/Address";
import Assets from "./components/Assets";
import Blockie from "../Blockie";

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  header: {
    paddingTop: "20px",
    fontWeight: "700",
    fontSize: "18px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "450px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    border: "2px solid #e7eaf3", 
    borderRadius: "15px",
    marginBottom: "20px",
    display: "flex", 
    alignItems: "center",
    flexDirection: "column",
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    marginTop: "20px",
    paddingBottom: "20px",
  },
  navLink: {
    textDecoration: "none",
    fontWeight: "700",
    color: "#4b5552",
  },
  activeLink: {
    color: "#21BF96",
  },
};

function Wallet() {
  return (
    <Flex maxWidth="1200px">
      <h1 style={styles.title}>💵Your Wallet</h1>
      <div style={styles.card}>
        <div style={styles.header}>
          <Blockie size={10} avatar currentWallet />
          <Address size="6" copyable />
          <NativeBalance />
        </div>
        <div style={styles.navLinks}>
          <NavLink to="/wallet/transfer" style={styles.navLink} activeStyle={styles.activeLink}>
            Transfer
          </NavLink>
          {/* <NavLink to="/wallet/transactions" style={styles.navLink} activeStyle={styles.activeLink}>
            Transactions
          </NavLink> */}
          <NavLink to="/wallet/assets" style={styles.navLink} activeStyle={styles.activeLink}>
            Assets
          </NavLink>
        </div>
        <Switch>
          <Route path="/wallet/transfer">
            <Transfer />
          </Route>
          <Route path="/wallet/assets">
            <Assets />
          </Route>
          <Redirect to="/wallet/transfer" />
        </Switch>
      </div>
    </Flex>
  );
}

export default Wallet;

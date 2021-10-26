import React from "react";
import { useMoralis } from "react-moralis";
import Address from "../Address/Address";
import NativeBalance from "../NativeBalance";

const styles = {
  account: {
    padding: "0 3px 0 10px",
    height: "42px",
    gap: "5px",
    width: "fit-content",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#041836",
    cursor: "pointer",
  },
};

function Account() {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div style={styles.account}>
        <p onClick={() => authenticate({ signingMessage: "Hello World!" })}>Authenticate</p>
      </div>
    );
  }

  return (
    <div style={styles.account} onClick={() => logout()}>
      <NativeBalance />
      <Address avatar size="5" />
    </div>
  );
}

export default Account;

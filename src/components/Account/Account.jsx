import React from "react";
import { useMoralis } from "react-moralis";
import Address from "../Address/Address";
import NativeBalance from "../NativeBalance";

const styles = {
  account: {
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
  wrapper: { padding: "0 3px 0 10px" },
};

function Account() {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div style={styles.account}>
        <p
          onClick={() => authenticate({ signingMessage: "Hello World!" })}
          style={{ padding: "0 10px" }}
        >
          Authenticate
        </p>
      </div>
    );
  }

  return (
    <div style={{ ...styles.account, ...styles.wrapper }} onClick={() => logout()}>
      <NativeBalance />
      <Address avatar size="5" />
    </div>
  );
}

export default Account;

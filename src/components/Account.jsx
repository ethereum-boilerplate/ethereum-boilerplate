import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import React from "react";
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "utils/formatters";
const styles = {
  account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "rgb(244, 244, 244)",
    cursor: "pointer",
  },
  text: {
    color: "#21BF96",
  },
};

function Account() {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const { walletAddress } = useMoralisDapp();

  if (!isAuthenticated) {
    return (
      <div style={styles.account} onClick={() => authenticate({ signingMessage: "Hello World!" })}>
        <p style={styles.text}>Authenticate</p>
      </div>
    );
  }

  return (
    <div style={styles.account} onClick={() => logout()}>
      <p style={styles.text}>{getEllipsisTxt(walletAddress, 6)}</p>
    </div>
  );
}

export default Account;

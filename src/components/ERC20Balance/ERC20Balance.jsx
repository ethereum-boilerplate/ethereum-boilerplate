import React from "react";
import { useMoralis } from "react-moralis";
import { Flex } from "../../uikit/Flex/Flex";
import { getEllipsisTxt } from "../../utils/formatters";
import useERC20Balance from "./hooks/useERC20Balance";

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "700",
  },
  card: {
    padding: "20px",
    display: "flex",
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
    marginBottom: "20px",
  },
  table: {
    tableLayout: "fixed",
    width: "100%",
    textAlign: "left",
    borderCollapse: "collapse",
    maxWidth: "100%",
  },
};

function ERC20Balance() {
  const { assets } = useERC20Balance();
  const { Moralis } = useMoralis();

  return (
    <Flex maxWidth="1200px">
      <h1 style={styles.title}>💰Token Balances</h1>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ width: "45px" }} />
              <th>Name</th>
              <th>Symbol</th>
              <th>Balance</th>
              <th>Token Address</th>
            </tr>
          </thead>
          <tbody>
            {!assets
              ? null
              : assets.map((item, key) => (
                  <tr key={key}>
                    <td>
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.symbol}
                          style={{
                            maxWidth: "30px",
                            maxHeight: "30px",
                            borderRadius: "15px",
                          }}
                        />
                      ) : (
                        <img
                          src="https://etherscan.io/images/main/empty-token.png"
                          alt=""
                          style={{
                            maxWidth: "30px",
                            maxHeight: "30px",
                            borderRadius: "15px",
                          }}
                        />
                      )}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.symbol}</td>
                    <td>{Moralis.Units.FromWei(item.balance, item.decimals)}</td>
                    <td>{getEllipsisTxt(item.token_address, 12)}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </Flex>
  );
}

export default ERC20Balance;

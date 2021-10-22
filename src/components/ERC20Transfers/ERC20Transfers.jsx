import React from "react";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react/cjs/react.development";
import { getEllipsisTxt } from "../../utils/formatters";
import { Flex } from "../../uikit/Flex/Flex";
import useERC20Transfers from "./hooks/useERC20Transfers";
import styles from "./styles";

function ERC20Transfers() {
  const { ERC20Transfers } = useERC20Transfers();
  const { Moralis } = useMoralis();

  return (
    <Flex maxWidth="1200px">
      <h1 style={styles.title}>💸ERC20 Transfers</h1>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Token</th>
              <th>From</th>
              <th>To</th>
              <th>Value</th>
              <th>Block Number</th>
            </tr>
          </thead>
          <tbody>
            {!ERC20Transfers
              ? null
              : ERC20Transfers.map((item, key) => (
                  <tr key={key}>
                    <td>{getEllipsisTxt(item.address, 8)}</td>
                    <td>{getEllipsisTxt(item.from_address, 8)}</td>
                    <td>{getEllipsisTxt(item.to_address, 8)}</td>
                    <td>{Moralis.Units.FromWei(item.value)}</td>
                    <td>{item.block_number}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </Flex>
  );
}

export default ERC20Transfers;

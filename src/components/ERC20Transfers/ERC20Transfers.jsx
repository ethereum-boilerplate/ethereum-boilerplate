import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "../../utils/formatters";
import { Flex } from "../../uikit/Flex/Flex";
import useERC20Transfers from "../../hooks/useERC20Transfers";
import styles from "./styles";

function ERC20Transfers() {
  const { ERC20Transfers } = useERC20Transfers();
  const { Moralis } = useMoralis();

  console.log(ERC20Transfers);

  return (
    <Flex maxWidth="1200px" margin="0 15px">
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
                    <td>{getEllipsisTxt(item.address, 5)}</td>
                    <td>{getEllipsisTxt(item.from_address, 5)}</td>
                    <td>{getEllipsisTxt(item.to_address, 5)}</td>
                    <td>{parseFloat(Moralis.Units.FromWei(item.value).toFixed(6))}</td>
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

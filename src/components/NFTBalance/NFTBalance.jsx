import React from "react";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react/cjs/react.development";
import { Flex } from "../../uikit/Flex/Flex";
import useNFTBalance from "./hooks/useNFTBalance";
import { styles } from "./styles";

function NFTBalance() {
  const { fetchNFTBalance } = useNFTBalance();
  const { isInitialized } = useMoralis();
  const [NFTBalance, setNFTBalance] = useState();

  useEffect(() => {
    if (isInitialized)
      fetchNFTBalance()
        .then((balance) => setNFTBalance(balance))
        .catch((e) => alert(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);
  console.log(NFTBalance);

  return (
    <Flex maxWidth="1200px">
      <h1 style={styles.title}>🎨NFT Balance</h1>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              {/* <td>{getEllipsisTxt(item.address, 12)}</td>
              <td>{getEllipsisTxt(item.from_address, 12)}</td>
              <td>{getEllipsisTxt(item.to_address, 12)}</td>
              <td>{Moralis.Units.FromWei(item.value)}</td>
              <td>{item.block_number}</td>
              <td>{getEllipsisTxt(item.token_address, 12)}</td> */}
              <th>Token</th>
              <th>From</th>
              <th>To</th>
              <th>Value</th>
              <th>Block Number</th>
            </tr>
          </thead>
          {/* <tbody>
            {!NFTBalance
              ? null
              : NFTBalance.map((item) => (
                  <tr key={item.tokenAddress}>
                    <td>{getEllipsisTxt(item.address, 8)}</td>
                    <td>{getEllipsisTxt(item.from_address, 8)}</td>
                    <td>{getEllipsisTxt(item.to_address, 8)}</td>
                    <td>{Moralis.Units.FromWei(item.value)}</td>
                    <td>{item.block_number}</td>
                  </tr>
                  // address: "0xe9e7cea3dedca5984780bafc599bd69add087d56"
                  // block_hash: "0xf70ad0fa074f96d93df24661217866b8426ca9dcf8f9b5850e538e65a9f98d64"
                  // block_number: "11708227"
                  // block_timestamp: "2021-10-12T12:33:05.000Z"
                  // from_address: "0x259db2fd041d370e803f4d44951be0e4722b7a45"
                  // to_address: "0xfc9336b547195bcef1b668b30a2d7987c6cbb7f2"
                  // transaction_hash: "0xa4feebf8b39ee8a699545957cfd82550bb8c52122c0b36c37f7f9867c6712641"
                  // value: "10000000000000000000"
                ))}
          </tbody> */}
        </table>
      </div>
    </Flex>
  );
}

export default NFTBalance;

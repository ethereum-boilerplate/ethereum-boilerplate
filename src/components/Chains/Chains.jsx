import React, { useEffect, useState } from "react";
import useChain from "./hooks/useChain";
import { Avalanche, Polygon, Binance, Ethereum } from "./components";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis } from "react-moralis";

/** TO DO
 * Use only one chain component with providing img links and chain names
 */

function Chains() {
  const { switchNetwork } = useChain();
  const { chainId: chain } = useMoralisDapp();
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();
  const [chainId, setChainId] = useState();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
  }, [isAuthenticated, isWeb3Enabled]);

  useEffect(() => setChainId(chain), [chain]);

  console.log(chain);

  const styles = {
    chains: {
      padding: "0 7px",
      height: "42px",
      gap: "5px",
      width: "fit-content",
      background: "#FFFFFF",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div className="chains" style={styles.chains}>
      <Avalanche onClick={() => switchNetwork("0xa86a")} activeChain={chainId === "0xa86a"} />
      <Polygon onClick={() => switchNetwork("0x89")} activeChain={chainId === "0x89"} />
      <Binance onClick={() => switchNetwork("0x38")} activeChain={chainId === "0x38"} />
      <Ethereum onClick={() => switchNetwork("0x1")} activeChain={chainId === "0x1"} />
    </div>
  );
}

export default Chains;

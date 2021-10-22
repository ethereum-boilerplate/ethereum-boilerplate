import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useMoralisDapp } from "../providers/MoralisDappProvider/MoralisDappProvider";
import { n4 } from "../utils/formatters";

function NativeBalance() {
  const { account } = useMoralisWeb3Api();
  const { Moralis } = useMoralis();
  const { walletAddress, chainId: chain } = useMoralisDapp();
  const [nativeBalance, setNativeBalance] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    setAddress(walletAddress);
  }, [walletAddress]);

  const fetchNativeBalance = async () => {
    const options = { address, chain };
    account
      .getNativeBalance(options)
      .then((result) => {
        const balanceInWei = Moralis.Units.FromWei(result.balance);
        const balanceFormatted = `${n4.format(balanceInWei)} ETH`;
        setNativeBalance(balanceFormatted);
      })
      .catch((e) => alert(e.message));
  };

  useEffect(() => {
    if (address && chain) {
      fetchNativeBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, chain]);

  return <div style={{ textAlign: "center" }}>{nativeBalance}</div>;
}

export default NativeBalance;

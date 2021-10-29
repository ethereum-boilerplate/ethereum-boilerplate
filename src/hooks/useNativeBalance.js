// const fetchNativeBalance = async () => {
//     const options = { address, chain };

//     const native = getNativeByChain(chain);

//     account
//       .getNativeBalance(options)
//       .then((result) => {
//         const balanceInWei = Moralis.Units.FromWei(result.balance);
//         const balanceFormatted = `${n4.format(balanceInWei)} ${native}`;
//         setNativeBalance(balanceFormatted);
//       })
//       .catch((e) => alert(e.message));
//   };

//   useEffect(() => {
//     if (address && chain) {
//       fetchNativeBalance();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [address, chain]);

import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { n4 } from "utils/formatters";
import { getNativeByChain } from "../utils/getNativeByChain";

const useNativeBalance = (props) => {
  const { account } = useMoralisWeb3Api();
  const { isInitialized, Moralis } = useMoralis();
  const { walletAddress, chainId } = useMoralisDapp();

  const [nativeBalance, setNativeBalance] = useState();

  const nativeName = getNativeByChain(chainId);

  useEffect(() => {
    if (isInitialized) {
      fetchNativeBalance()
        .then((result) => {
          const balanceInWei = Moralis.Units.FromWei(result.balance);
          const balanceFormatted = `${n4.format(balanceInWei)} ${nativeName}`;
          setNativeBalance(balanceFormatted);
        })
        .catch((e) => alert(e.message));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chainId, walletAddress]);

  const fetchNativeBalance = async () => {
    return account
      .getNativeBalance({ address: walletAddress, chain: props?.chain || chainId })
      .then((result) => result)
      .catch((e) => alert(e.message));
  };

  return { fetchNativeBalance, nativeBalance };
};

export default useNativeBalance;

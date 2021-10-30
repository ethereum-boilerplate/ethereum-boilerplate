import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";

export const useNativeTransactions = (options) => {
  const { account } = useMoralisWeb3Api();
  const { chainId } = useMoralisDapp();
  const [nativeTransations, setNativeTransations] = useState([]);
  const {
    fetch: getNativeTransations,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(account.getTransactions, { chain: chainId, ...options });

  useEffect(() => data && setNativeTransations(data?.result), [data]);

  return { getNativeTransations, nativeTransations, error, isLoading };
};

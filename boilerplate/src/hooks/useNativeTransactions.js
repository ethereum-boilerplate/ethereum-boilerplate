import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall, useMoralis } from "react-moralis";

const useNativeTransactions = (options) => {
  const { account } = useMoralisWeb3Api();
  const { chainId } = useMoralis();
  const [nativeTransactions, setNativeTransactions] = useState([]);
  const {
    fetch: getNativeTransations,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(account.getTransactions, { chain: chainId, ...options });

  useEffect(() => data && setNativeTransactions(data?.result), [data]);

  return { getNativeTransations, nativeTransactions, chainId, error, isLoading };
};

export default useNativeTransactions;

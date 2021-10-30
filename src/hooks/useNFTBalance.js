import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";

export const useNFTBalance = (params) => {
  const { account } = useMoralisWeb3Api();
  const { chainId } = useMoralisDapp();
  const [NFTBalance, setNFTBalance] = useState([]);
  const {
    fetch: getNFTBalance,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(account.getNFTs, { chain: chainId, ...params });

  useEffect(() => data && setNFTBalance(data?.result), [data]);

  return { getNFTBalance, NFTBalance, error, isLoading };
};

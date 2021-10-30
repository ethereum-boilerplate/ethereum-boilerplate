import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";

export const useNFTTransfers = (options) => {
  const { account } = useMoralisWeb3Api();
  const { chainId } = useMoralisDapp();
  const [NFTTransfers, setNFTTransfers] = useState([]);
  const {
    fetch: getNFTTransfers,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(account.getNFTTransfers, { chain: chainId, ...options });

  useEffect(() => data && setNFTTransfers(data?.result), [data]);

  return { getNFTTransfers, NFTTransfers, error, isLoading };
};

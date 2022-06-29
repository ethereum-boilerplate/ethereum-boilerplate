import { useMemo } from "react";
import { useMoralis } from "react-moralis";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";

export const useNFTMetadata = (addr, tokenId, forceToChainId) => {
  const { token } = useMoralisWeb3Api();
  const { chainId } = useMoralis();

  const getTokenIdMetadataOpts = {
    chain: forceToChainId || chainId,
    address: addr,
    token_id: tokenId,
  };
  const {
    fetch: getNFTTokenMetadata,
    data,
    error,
    isLoading,
    isFetching,
  } = useMoralisWeb3ApiCall(token.getTokenIdMetadata, getTokenIdMetadataOpts, {
    autoFetch: !!token && addr !== "explore",
  });

  const NFTTokenMetadata = useMemo(() => {
    if (!data?.result || !data?.result.length) {
      return data;
    }
    return { ...data };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    getNFTTokenMetadata,
    data: NFTTokenMetadata,
    error,
    isLoading,
    isFetching,
  };
};

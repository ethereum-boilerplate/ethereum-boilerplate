import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { useIPFS } from "./useIPFS";

export const useNFTBalance = (options) => {
  const { account } = useMoralisWeb3Api();
  const { chainId } = useMoralisDapp();
  const { resolveLink } = useIPFS();
  const [NFTBalance, setNFTBalance] = useState([]);
  const {
    fetch: getNFTBalance,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(account.getNFTs, { chain: chainId, ...options });

  useEffect(() => {
    if (data?.result) {
      const NFTs = data.result;
      for (let NFT of NFTs) {
        if (NFT?.metadata) {
          NFT.metadata = JSON.parse(NFT.metadata);
          // metadata is a string type
          NFT.image = resolveLink(NFT.metadata?.image);
        }
      }
      setNFTBalance(NFTs);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { getNFTBalance, NFTBalance, error, isLoading };
};

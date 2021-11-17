import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";

export const useERC20Transfers = () => {
  const { account } = useMoralisWeb3Api();
  const { walletAddress, chainId } = useMoralisDapp();
  const { isInitialized } = useMoralis();
  const [ERC20Transfers, setERC20Transfers] = useState();

  useEffect(() => {
    if (isInitialized)
      fetchERC20Transfers()
        .then((result) => setERC20Transfers(result))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chainId, walletAddress]);

  const fetchERC20Transfers = async () => {
    return await account
      .getTokenTransfers({ address: walletAddress, chain: chainId })
      .then((result) => result.result)
  };
  return { fetchERC20Transfers, ERC20Transfers, chainId };
};

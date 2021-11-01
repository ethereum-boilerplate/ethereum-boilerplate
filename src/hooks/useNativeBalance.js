import { getNativeByChain } from "helpers/networks";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect, useMemo, useState } from "react";
import { useMoralis, useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";

export const useNativeBalance = (options) => {
  const { account } = useMoralisWeb3Api();
  const { Moralis } = useMoralis();
  const { chainId, walletAddress } = useMoralisDapp();
  const [balance, setBalance] = useState({ inWei: 0, formatted: 0 });

  const nativeName = useMemo(() => getNativeByChain(options?.chain || chainId), [options, chainId]);

  const {
    fetch: getBalance,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(account.getNativeBalance, {
    chain: chainId,
    address: walletAddress,
    ...options,
  });

  useEffect(() => {
    if (data?.balance) {
      const balances = {
        inWei: data.balance,
        // missing second argument (decimals) in FromWei function,
        formatted: Moralis.Units.FromWei(data.balance),
      };
      setBalance(balances);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { getBalance, balance, nativeName, error, isLoading };
};

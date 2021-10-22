import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { c2, tokenValueTxt } from "../../../utils/formatters";

const useCoin = (params) => {
  const { token } = useMoralisWeb3Api();
  const { isInitialized } = useMoralis();
  const [coinPrice, setCoinPrice] = useState();

  useEffect(() => {
    if (isInitialized)
      fetchCoinPrice(params)
        .then((price) => {
          price.usdPrice = c2.format(price.usdPrice);
          const { value, decimals, symbol } = price.nativePrice;
          price.nativePrice = tokenValueTxt(value, decimals, symbol);
          setCoinPrice(price);
        })
        .catch((e) => alert(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);

  const fetchCoinPrice = async (params) => {
    const { chain, address } = params;
    return await token
      .getTokenPrice({ chain, address })
      .then((result) => result)
      .catch((e) => alert(e.message));
  };
  return { fetchCoinPrice, coinPrice };
};

export default useCoin;

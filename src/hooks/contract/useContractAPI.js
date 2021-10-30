import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";

export const useContractAPI = (params) => {
  const { account } = useMoralisWeb3Api();
  const [contractResponse, setContractResponse] = useState();
  const {
    fetch: getNFTTransfers,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(account.getNFTTransfers, { ...params });

  useEffect(() => data && setContractResponse(data?.result), [data]);

  return { getNFTTransfers, contractResponse, error, isLoading };
};

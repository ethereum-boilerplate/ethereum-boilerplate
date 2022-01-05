import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";

export const useAPIContract = (options) => {
  const { native } = useMoralisWeb3Api();

  const {
    fetch: runContractFunction,
    data: contractResponse,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(native.runContractFunction, { ...options });

  return { runContractFunction, contractResponse, error, isLoading };
};

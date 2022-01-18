import { useWeb3ExecuteFunction } from "react-moralis";

export const useWeb3Contract = (params) => {
  const {
    data: contractResponse,
    error,
    fetch: runContractFunction,
    isFetching: isRunning,
    isLoading,
  } = useWeb3ExecuteFunction(params);

  return { runContractFunction, contractResponse, error, isRunning, isLoading };
};

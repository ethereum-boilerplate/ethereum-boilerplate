import { useMoralis } from "react-moralis";

const useChain = () => {
  const { Moralis, isWeb3Enabled, enableWeb3 } = useMoralis();
  async function switchNetwork(chainId) {
    if (isWeb3Enabled) {
      await Moralis.switchNetwork(chainId);
    } else {
      enableWeb3();
    }
  }
  return { switchNetwork };
};

export default useChain;

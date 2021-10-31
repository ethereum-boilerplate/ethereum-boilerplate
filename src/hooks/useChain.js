import { networkConfigs } from "helpers/networks";
import { useMoralis } from "react-moralis";

const useChain = () => {
  const { Moralis, isWeb3Enabled, enableWeb3 } = useMoralis();
  async function switchNetwork(chain) {
    if (isWeb3Enabled) {
      try {
        await Moralis.switchNetwork(chain);
      } catch (error) {
        if (error.code === 4902) {
          try {
            const config = networkConfigs[chain];
            const { chainId, chainName, currencyName, currencySymbol, rpcUrl, blockExplorerUrl } =
              config;
            await Moralis.addNetwork(
              chainId,
              chainName,
              currencyName,
              currencySymbol,
              rpcUrl,
              blockExplorerUrl
            );
          } catch (error) {
            alert(error.message);
          }
        }
      }
    } else {
      enableWeb3();
    }
  }
  return { switchNetwork };
};

export default useChain;

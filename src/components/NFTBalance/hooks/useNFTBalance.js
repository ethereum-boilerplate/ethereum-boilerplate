import { useMoralisWeb3Api } from "react-moralis";
import { useMoralisDapp } from "../../../providers/MoralisDappProvider/MoralisDappProvider";

const useNFTBalance = () => {
  const { account } = useMoralisWeb3Api();
  const { walletAddress } = useMoralisDapp();
  const fetchNFTBalance = async (options) => {
    return await account
      .getNFTs({ address: walletAddress, chain: "bsc" })
      .then((result) => result.result)
      .catch((e) => alert(e.message));
  };
  return { fetchNFTBalance };
};

export default useNFTBalance;

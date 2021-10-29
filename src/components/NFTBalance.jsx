import React from "react";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react/cjs/react.development";
import { Flex } from "../uikit/Flex/Flex";
import useNFTBalance from "../hooks/useNFTBalance";

function NFTBalance() {
  const { fetchNFTBalance } = useNFTBalance();
  const { isInitialized } = useMoralis();
  const [NFTBalance, setNFTBalance] = useState();

  useEffect(() => {
    if (isInitialized)
      fetchNFTBalance()
        .then((balance) => setNFTBalance(balance))
        .catch((e) => alert(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);

  return (
    <Flex maxWidth="1200px" margin="0 15px">
      <p>{JSON.stringify(NFTBalance)}</p>
    </Flex>
  );
}

export default NFTBalance;

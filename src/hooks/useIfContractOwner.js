import { useState } from "react";
import { useMoralis } from "react-moralis";

export const useIfContractOwner = () => {
  const [contractOwner, setContractOwner] = useState({});
  const { Moralis, chainId } = useMoralis();

  /**
   * Fetch Metadata from NFT and check if Contract Owner + Cache Results
   * @param {object} NFT
   * @returns NFT
   */
  function isContractOwner(NFT) {
    // get the Metadata to check Contract Owner
    const walletAddress = nft?.owner_of;
    const contractAddress = NFT?.token_address;
    // let localStorageContractOwner = JSON.parse(
    //   window.localStorage.getItem("contractOwner")
    // );

    if (!contractOwner[contractAddress]) {
      checkMatchingContractOwner(contractOwner, contractAddress, walletAddress);
      getContractOwners(NFT);
      console.log("loaded");
      // console.log(`contractOwner: ${JSON.stringify(contractOwner)}`);
    } else {
      // console.log(`CONTACT OWNERS FOUND: ${JSON.stringify(contractOwner)}`);
    }

    //Return If Contract Owner
    return contractOwner;
  }

  const checkMatchingContractOwner = (
    contractOwner,
    contractAddress,
    walletAddress
  ) => {
    let isContractOwner = false;

    if (!contractOwner) {
      const localStorageContractOwner = JSON.parse(
        window.localStorage.getItem("contractOwner")
      );

      if (
        localStorageContractOwner &&
        localStorageContractOwner[contractAddress] &&
        localStorageContractOwner[contractAddress] === walletAddress
      ) {
        console.log(
          `MATCHED OBJECT: ${localStorageContractOwner[contractAddress]}`
        );
        isContractOwner = true;
      }
    }

    return isContractOwner;
  };

  const getContractOwners = async (nft) => {
    const walletAddress = nft?.owner_of;
    const contractAddress = nft?.token_address;

    // console.log("walletAddress: " + walletAddress);
    // console.log("contractAddress: " + contractAddress);
    // console.log("chainId: " + chainId);

    if (walletAddress && contractAddress && chainId) {
      const options = {
        address: contractAddress,
        chain: chainId,
        topic0:
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
      };

      try {
        const contractOwners = await Moralis.Web3API.native.getLogsByAddress(
          options
        );

        const contractOwnerAddress = contractOwners?.result[0].topic2;

        if (
          contractOwnerAddress &&
          walletAddress &&
          contractOwnerAddress.replace("0x000000000000000000000000", "0x") ===
            walletAddress
        ) {
          // console.log(`Owner of contract`);
          setIfContractOwner(contractAddress, true);
        } else {
          // console.log(`Not owner of contract`);
          setIfContractOwner(contractAddress, false);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  /**
   * Update NFT Object
   * @param {object} NFT
   * @param {object} metadata
   */
  function setIfContractOwner(contractAddress, ifContractOwner) {
    if (ifContractOwner && !contractOwner[contractAddress])
      setContractOwner({
        ...contractOwner,
        [contractAddress]: ifContractOwner,
      });
    window.localStorage.setItem(
      "SET contractOwner in local storage!",
      JSON.stringify(contractOwner)
    );
    console.log(`Contract Owner: ${JSON.stringify(contractOwner)}`);
  }

  return { isContractOwner };
};

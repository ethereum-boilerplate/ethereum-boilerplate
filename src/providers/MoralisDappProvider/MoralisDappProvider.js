import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import MoralisDappContext from "./context";

function MoralisDappProvider({ children }) {
  const { web3, Moralis, user } = useMoralis();
  const [walletAddress, setWalletAddress] = useState();
  const [chainId, setChainId] = useState();
  const [contractABI, setContractABI] = useState('[ { "inputs": [ { "internalType": "address", "name": "nftContract", "type": "address" },{ "internalType": "uint256", "name": "tokenId", "type": "uint256" },{"internalType": "uint256","name": "price", "type": "uint256" }],"name": "createMarketItem", "outputs": [],"stateMutability": "payable","type": "function"}, { "inputs": [  {"internalType": "address", "name": "nftContract","type": "address"}, { "internalType": "uint256","name": "itemId","type": "uint256"}],"name": "createMarketSale","outputs": [],"stateMutability": "payable", "type": "function"},{ "inputs": [], "stateMutability": "nonpayable","type": "constructor"},{ "anonymous": false,"inputs": [{ "indexed": true,"internalType": "uint256","name": "itemId","type": "uint256"},{ "indexed": true,"internalType": "address", "name": "nftContract","type": "address"},{"indexed": true,"internalType": "uint256", "name": "tokenId","type": "uint256"}, { "indexed": false, "internalType": "address", "name": "seller","type": "address" }, {"indexed": false, "internalType": "address", "name": "owner", "type": "address" },{"indexed": false,"internalType": "uint256","name": "price","type": "uint256" }, {"indexed": false, "internalType": "bool","name": "sold","type": "bool" } ], "name": "MarketItemCreated", "type": "event"}, {"anonymous": false, "inputs": [{ "indexed": true,"internalType": "uint256", "name": "itemId", "type": "uint256" }, { "indexed": false, "internalType": "address","name": "owner", "type": "address"} ],"name": "MarketItemSold","type": "event" }, {"inputs": [], "name": "fetchMarketItems","outputs": [ { "components": [{"internalType": "uint256","name": "itemId","type": "uint256"}, {"internalType": "address","name": "nftContract","type": "address" }, {"internalType": "uint256","name": "tokenId", "type": "uint256"}, {"internalType": "address payable","name": "seller", "type": "address" }, {"internalType": "address payable","name": "owner","type": "address"},{ "internalType": "uint256","name": "price","type": "uint256"}, {"internalType": "bool","name": "sold", "type": "bool" } ], "internalType": "struct marketPlaceBoilerPlate.MarketItem[]","name": "", "type": "tuple[]"}],"stateMutability": "view","type": "function"},{ "inputs": [], "name": "owner","outputs": [ { "internalType": "address","name": "", "type": "address"}],"stateMutability": "view", "type": "function" }]' );

  const [marketAddress, setMarketAddress] = useState("0x15B7a6A97bc769D6F43d8e7E36C0B9277755C189");
  
  useEffect(() => {
    Moralis.onChainChanged(function (chain) {
      setChainId(chain);
    });

    Moralis.onAccountsChanged(function (address) {
      setWalletAddress(address[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setChainId(web3.givenProvider?.chainId));
  useEffect(
    () => setWalletAddress(web3.givenProvider?.selectedAddress || user?.get("ethAddress")),
    [web3, user]
  );

  return (
    <MoralisDappContext.Provider value={{ walletAddress, chainId, contractABI, setContractABI, marketAddress, setMarketAddress }}>
      {children}
    </MoralisDappContext.Provider>
  );
}

function useMoralisDapp() {
  const context = React.useContext(MoralisDappContext);
  if (context === undefined) {
    throw new Error("useMoralisDapp must be used within a MoralisDappProvider");
  }
  return context;
}

export { MoralisDappProvider, useMoralisDapp };

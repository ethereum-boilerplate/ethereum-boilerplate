import { useState } from "react";
import { useMoralis } from "react-moralis";

export const useOpenSea = () => {
  const { Moralis } = useMoralis();
  const [isCreatingSellOrder, setIsCreatingSellOrder] = useState(false)
  const [error, setError] = useState(null)
  const [sellOrderSuccess, setSellOrderSuccess] = useState(false)
  const [buyOrderSuccess, setBuyOrderSuccess] = useState(false)
  const [fullfillOrderSuccess, setFullfillOrderSuccess] = useState(false)
  
  const getAsset = async (network, tokenAddress, tokenId) => {
    const asset = await Moralis.Plugins.opensea.getAsset({
        network,
        tokenAddress,
        tokenId
    })
    return asset
  }

  const getOrders = async (network, tokenAddress, tokenId, orderSide, page) => {
   const orders = await Moralis.Plugins.opensea.getOrders({
        network,
        tokenAddress,
        tokenId,
        orderSide,
        page, // pagination shows 20 orders each page
    })
    return orders
  }

  const createSellOrder =  async (network,tokenAddress,tokenId,tokenType,userAddress,startAmount,endAmount,expirationTime) => {
    setIsCreatingSellOrder(true)
    if(network === "0x1") {
        network = 'mainnet'
    } else 
    if(network === "0x4") {
        network = 'testnet'
    } else {
        setError("Supports only Ethereum or Rinkeby NFTs")
    }
    if(expirationTime === null && startAmount > endAmount) {
        console.log('must set an end date if start amount is greater than end amount')
        return;
    }
    if(expirationTime === null) {
        expirationTime = 0
    } else {
        expirationTime = expirationTime.valueOf()
    }
    try {
        await Moralis.Plugins.opensea.createSellOrder({
            network,
            tokenAddress,
            tokenId,
            tokenType,
            userAddress,
            startAmount,
            endAmount,
            expirationTime
        })
        setSellOrderSuccess(true)
    } catch (error) {
        setError(error)
    }
    setIsCreatingSellOrder(false)
  }

  const createBuyOrder = async (network, tokenAddress, tokenId, tokenType, amount, userAddress, paymentTokenAddress) => {
    try {
        await Moralis.Plugins.opensea.createBuyOrder({
            network,
            tokenAddress,
            tokenId,
            tokenType,
            amount,
            userAddress,
            paymentTokenAddress
          });
          setBuyOrderSuccess(true)
    } catch (error) {
        setError(error)
    }
  }

  const fullfillOrder = async (network, userAddress, order) => {
    try {
        await Moralis.Plugins.opensea.fulfillOrder({
            network,
            userAddress,
            order
        });
        setFullfillOrderSuccess(true)
    } catch (error) {
        setError(error)
    }
  }

  const cancleOrder = async (network, userAddress, order) => {
    try {
        await Moralis.Plugins.opensea.cancelOrder({
            network,
            userAddress,
            order,
        });
    } catch (error) {
        setError(error)
    }
  }

  return { createSellOrder, createBuyOrder, getAsset, getOrders, fullfillOrder, cancleOrder, isCreatingSellOrder, error, sellOrderSuccess, buyOrderSuccess, fullfillOrderSuccess, setSellOrderSuccess, setBuyOrderSuccess, setFullfillOrderSuccess };
};

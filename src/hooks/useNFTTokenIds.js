import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { useIPFS } from "./useIPFS";

export const useNFTTokenIds = (addr) => {
    const { token } = useMoralisWeb3Api();
    const { chainId } = useMoralisDapp();
    const { resolveLink } = useIPFS();
    const [NFTTokenIds, setNFTTokenIds] = useState([]);
    const [totalNFTs, setTotalNFTs] = useState();
    const [fetchSuccess, setFetchSuccess] = useState(true);
    const [dataFetched, setDataFetched] = useState(false);

    const getAllTokenIdsOpts = {
        chain: chainId,
        address: addr,
        limit: 10,
    }
    const {
        fetch: getNFTTokenIds,
        data,
        error,
        isLoading,
        isFetching,
    } = useMoralisWeb3ApiCall(token.getAllTokenIds, getAllTokenIdsOpts);

    console.log('dataFetched, isLoading, isFetching, error', dataFetched, isLoading, isFetching, error);

    useEffect(() => {
        if (addr === "explore") setDataFetched(false)
    }, [addr]);

    useEffect(() => {
        async function fetchData() {
            await getNFTTokenIds();
            if (data?.result) {
                setDataFetched(true);
                const NFTs = data.result;
                setTotalNFTs(data.total);
                setFetchSuccess(true);
                for (const NFT of NFTs) {
                    if (NFT?.metadata) {
                        NFT.metadata = JSON.parse(NFT.metadata);
                        NFT.image = resolveLink(NFT.metadata?.image);
                    }
                }
                setNFTTokenIds(NFTs);
            }
        }
        if (addr !== "explore") {
            console.log('dataFetched', dataFetched)
            console.log('isLoading, isFetching, error', isLoading, isFetching, error);
            if (!dataFetched) fetchData();
        }
    }, [data, addr]);

    return {
        NFTTokenIds,
        totalNFTs,
        fetchSuccess
    };
};

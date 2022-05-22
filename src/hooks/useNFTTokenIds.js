import { useMemo } from "react";
import { useMoralis } from "react-moralis";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { useIPFS } from "./useIPFS";
import { TestGymBuddiesContract } from "../MglNftMetadata";

export const useNFTTokenIds = (addr, limit = 10, forceToChainId) => {
    const { token } = useMoralisWeb3Api();
    const { chainId } = useMoralis();
    const { resolveLink } = useIPFS();
    // TODO fix GymBuddies deployment to start from id 0
    const resovleOffset = (_addr) => {
        return _addr.toLowerCase() == TestGymBuddiesContract.toLowerCase() ? 1 : 0;
    }
    const getAllTokenIdsOpts = {
        chain: forceToChainId || chainId,
        address: addr,
        limit: limit,
        offset: resovleOffset(addr),
    };
    const {
        fetch: getNFTTokenIds,
        data,
        error,
        isLoading,
        isFetching,
    } = useMoralisWeb3ApiCall(
        token.getAllTokenIds,
        getAllTokenIdsOpts,
        { autoFetch: !!token && addr !== "explore" },
    );

    const NFTTokenIds = useMemo(() => {
        if (!data?.result || !data?.result.length) {
            return data;
        }
        const formattedResult = data.result.map((nft) => {
            try {
                if (nft.metadata) {
                    const metadata = JSON.parse(nft.metadata);
                    const image = resolveLink(metadata?.image);
                    return { ...nft, image, metadata };
                }
            } catch (error) {
                return nft;
            }
            return nft;
        });

        return { ...data, result: formattedResult };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return { getNFTTokenIds, data: NFTTokenIds, error, isLoading, isFetching };
};

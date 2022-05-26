export const useIPFS = () => {
  const resolveLink = (url) => {
    if (!url || !url.includes("ipfs://")) return url;
    return url.replace("ipfs://", "https://nftstorage.link/ipfs/");
  };

  return { resolveLink };
};

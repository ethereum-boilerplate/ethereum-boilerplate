export const useIPFS = () => {
  const resolveLink = (url) => {
    if (!url.includes("ipfs://") || !url) return url;
    return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
  };

  return { resolveLink };
};

export const useIPFS = () => {
  const resolveLink = (url) => {
    if (!url.includes("ipfs://")) return url;
    return url.replace("ipfs://", "https://ipfs.io/ipfs/");
  };

  return { resolveLink };
};

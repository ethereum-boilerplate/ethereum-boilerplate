export const useIPFS = () => {
  const resolveLink = (url) => {
    if (!url || !url.includes("ipfs://")) return url;
    let urlNormalised = url
      .replace("ipfs://", "https://gateway.ipfs.io/ipfs/")
      .replace("ipfs/ipfs/", "ipfs/");
    return urlNormalised
  };

  return { resolveLink };
};

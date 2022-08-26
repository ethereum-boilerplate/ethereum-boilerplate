export const resolveIPFS = (url?: string) => {
  if (!url || !url.includes('ipfs://')) {
    return url;
  }
  return url.replace('ipfs://', 'https://gateway.ipfs.io/ipfs/');
};

// to handle legacy data structures
export const resolveNftSprite = (nft) => {
  if (nft?.sprite) {
    if (nft?.sprite?.image) return nft?.sprite?.image;
    // replace to ipfs gateway
    // phaser will not work with ipfs
    return nft?.sprite.replace("ipfs://", "https://nftstorage.link/ipfs/");
  }
  return nft?.image;
};

export const resolveBGColor = (nft) => {
  if (nft?.background_color) {
    return `#${nft.background_color}`;
  } else {
    return "none";
  }
};

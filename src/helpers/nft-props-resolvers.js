
// to handle legacy data structures
export const resolveNftSprite = (nft) => {
    if (nft?.sprite) {
        if (nft?.sprite?.image) return nft?.sprite?.image;
        return nft?.sprite;
    }
    return nft?.image;
}

export const resolveBGColor = (nft) => {
    if (nft?.background_color) {
        return `#${nft.background_color}`;
    } else {
        return "none";
    }
}

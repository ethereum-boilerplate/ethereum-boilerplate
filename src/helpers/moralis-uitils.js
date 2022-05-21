export const fixIfOldMoralisIPFSGateway = (uriStr) => {
    if (!uriStr) return uriStr;
    const oldMoralisGateway = 'https://ipfs.moralis.io:2053';
    const newMoralisGateway = 'https://gateway.moralisipfs.com';
    if (uriStr.includes(oldMoralisGateway)) {
        return uriStr.replace(oldMoralisGateway, newMoralisGateway);
    }
    return uriStr;
};

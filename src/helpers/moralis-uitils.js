const piniataAvaxMoralisHackNftsCID = "QmXrtLb25KXLbFWYMSJcYiXQmuSGofYHuRzbAcoHWjXYS9";
const piniataFallback = new Map([
    [
        'https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/images/0.png',
        `https://gateway.pinata.cloud/ipfs/${piniataAvaxMoralisHackNftsCID}/0.png`
    ],
    [
        'https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/images/1.png',
        `https://gateway.pinata.cloud/ipfs/${piniataAvaxMoralisHackNftsCID}/1.png`
    ],
    [
        'https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/images/2.png',
        `https://gateway.pinata.cloud/ipfs/${piniataAvaxMoralisHackNftsCID}/2.png`
    ],
    [
        'https://ipfs.moralis.io:2053/ipfs/QmWRFZXmtqzcQQ2UT4YA5B3tF1jeA6QmmE6P7jH7yahPT9/images/3.png',
        `https://gateway.pinata.cloud/ipfs/${piniataAvaxMoralisHackNftsCID}/3.png`
    ],
]);

export const temporaryReplaceMoralisIPFSGateway = (uriStr) => {
    if (!uriStr) return uriStr;
    if (piniataFallback.has(uriStr)) return piniataFallback.get(uriStr);
    return uriStr;
};

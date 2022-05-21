
const piniataFallback = new Map([
    [
        'https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/images/0.png',
        'https://gateway.pinata.cloud/ipfs/QmfN1hNAZv1oZ6fwkT1XufG3Ta6yUkdK3BejUmrhqEmo9k/0.png',
    ],
    [
        'https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/images/1.png',
        'https://gateway.pinata.cloud/ipfs/QmfN1hNAZv1oZ6fwkT1XufG3Ta6yUkdK3BejUmrhqEmo9k/1.png',
    ],
    [
        'https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/images/2.png',
        'https://gateway.pinata.cloud/ipfs/QmfN1hNAZv1oZ6fwkT1XufG3Ta6yUkdK3BejUmrhqEmo9k/2.png',
    ],
    [
        'https://ipfs.moralis.io:2053/ipfs/QmWRFZXmtqzcQQ2UT4YA5B3tF1jeA6QmmE6P7jH7yahPT9/images/3.png',
        'https://gateway.pinata.cloud/ipfs/QmfN1hNAZv1oZ6fwkT1XufG3Ta6yUkdK3BejUmrhqEmo9k/3.png'
    ],
]);

export const temporaryReplaceMoralisIPFSGateway = (uriStr) => {
    if (!uriStr) return uriStr;
    if (piniataFallback.has(uriStr)) return piniataFallback.get(uriStr);
    return uriStr;
};

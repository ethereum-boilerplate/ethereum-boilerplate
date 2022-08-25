const getErc20LogoAddress = ({ blockchain = 'ethereum', address }: { blockchain: string; address: string }) =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${blockchain}/assets/${address}/logo.png`;

export default getErc20LogoAddress;

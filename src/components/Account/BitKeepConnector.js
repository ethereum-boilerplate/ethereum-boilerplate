import { AbstractWeb3Connector } from "moralis";

class NoEthereumProviderError extends Error {
  constructor() {
    super();
    this.message = "Non ethereum enabled browser";
  }
}

function getProvider() {
  if (!window.isBitKeep) {
    window.open("https://bitkeep.com/download?type=2");
    return null;
  }
  return window.bitkeep.ethereum;
}

function fromDecimalToHex(number) {
  if (typeof number !== "number") throw "The input provided should be a number";
  return `0x${number.toString(16)}`;
}

/**
 * Converts chainId to a hex if it is a number
 */
function verifyChainId(chainId) {
  if (typeof chainId === "number") chainId = fromDecimalToHex(chainId);
  return chainId;
}

class BitKeepConnector extends AbstractWeb3Connector {
  type = "bitkeep";

  verifyEthereumBrowser() {
    if (!window?.ethereum) {
      throw new NoEthereumProviderError();
    }
  }

  async activate() {
    this.verifyEthereumBrowser();

    const provider = getProvider();

    const [accounts, chainId] = await Promise.all([
      provider.request({ method: "eth_requestAccounts" }),
      provider.request({ method: "eth_chainId" }),
    ]);

    const account = accounts[0] ? accounts[0].toLowerCase() : null;

    this.chainId = verifyChainId(chainId);
    this.account = account;
    this.provider = provider;

    this.subscribeToEvents(provider);

    return { provider, chainId, account };
  }

  async switchNetwork(chainId) {
    this.verifyEthereumBrowser();
    chainId = verifyChainId(chainId);

    const currentNetwork = this.chainId;
    if (currentNetwork === chainId) return;

    const provider = getProvider();

    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }],
    });
  }

  async addNetwork(
    chainId,
    chainName,
    currencyName,
    currencySymbol,
    rpcUrl,
    blockExplorerUrl,
  ) {
    this.verifyEthereumBrowser();

    const newchainId = verifyChainId(chainId);
    const provider = getProvider();

    await provider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: newchainId,
          chainName: chainName,
          nativeCurrency: {
            name: currencyName,
            symbol: currencySymbol,
            decimals: 18,
          },
          rpcUrls: [rpcUrl],
          blockExplorerUrls: blockExplorerUrl ? [blockExplorerUrl] : null,
        },
      ],
    });
  }
}

export default BitKeepConnector;

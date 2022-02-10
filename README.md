# `ethereum-boilerplate`

> React components and hooks for fast building dApps without running own backend

🚀DEMO: https://ethereum-boilerplate.github.io/ethereum-boilerplate

This boilerplate is built on [react-moralis](https://github.com/MoralisWeb3/react-moralis) and [Moralis](https://moralis.io?utm_source=github&utm_medium=readme&utm_campaign=ethereum-boilerplate). Also has its own context provider for quick access to `chainId` or `ethAddress`

There are many components in this boilerplate that do not require an active web3 provider, they use Moralis Web3 API. Moralis supports the most popular blockchains and their test networks. You can find a list of all available networks in [Moralis Supported Chains](https://docs.moralis.io/moralis-server/web3-sdk/intro#supported-chains)

Please check the [official documentation of Moralis](https://docs.moralis.io/#user) for all the functionalities of Moralis.

![daPPdemo](https://user-images.githubusercontent.com/78314301/147088732-e8bbd451-9351-4338-879c-b1535f4df319.gif)

# ⭐️ `Star us`

If this boilerplate helps you build Ethereum dapps faster - please star this project, every star makes us very happy!

# 🤝 `Need help?`

If you need help with setting up the boilerplate or have other questions - don't hesitate to write in our community forum and we will check asap. [Forum link](https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/86). The best thing about this boilerplate is the super active community ready to help at any time! We help each other.

# 🚀 Quick Start

📄 Clone or fork `ethereum-boilerplate`:

```sh
git clone https://github.com/ethereum-boilerplate/ethereum-boilerplate.git
```

💿 Install all dependencies:

```sh
cd ethereum-boilerplate
yarn install
```

✏ Rename `.env.example` to `.env` in the main folder and provide your `appId` and `serverUrl` from Moralis ([How to start Moralis Server](https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server))
Example:

```jsx
REACT_APP_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
REACT_APP_MORALIS_SERVER_URL = https://xxxxxx.grandmoralis.com:2053/server
```

🚴‍♂️ Run your App:

```sh
yarn start
```

# 🧭 Table of contents

- [`ethereum-boilerplate`](#ethereum-boilerplate)
- [🚀 Quick Start](#-quick-start)
- [🧭 Table of contents](#-table-of-contents)
- [🏗 Ethereum Components](#-ethereum-components)
- - [`<Account />`](#account-)
  - [`<AddressInput />`](#addressinput-)
  - [`<Chains />`](#chains-)
  - [`<CoinPrice />`](#coinprice-)
  - [`<ERC20Balance />`](#erc20balance-)
  - [`<ERC20Transfers />`](#erc20transfers-)
  - [`<DEX />`](#dex-)
  - [`<Wallet />`](#wallet-)
  - [`<Blockie />`](#blockie-)
  - [`<NativeBalance />`](#nativebalance-)
  - [`<NFTBalance />`](#nftbalance)
  - [`<Contract />`](#contract-)
- [🧰 Ethereum Hooks](#-ethereum-hooks)
  - [`useAPIContract()`](#useapicontract)
  - [`useWeb3Contract()`](#useweb3contract)
  - [`useERC20Balance()`](#useerc20balance)
  - [`useERC20Transfers()`](#useerc20transfers)
  - [`useNativeBalance()`](#usenativebalance)
  - [`useNativeTransactions()`](#usenativetransactions)
  - [`useNFTBalances()`](#usenftbalances)
  - [`useNFTTransfers()`](#usenfttransfers)
  - [`useIPFS()`](#useipfs)
  - [`useChain()`](#usechain)
  - [`useTokenPrice()`](#usetokenprice)
  - [`DEX Hooks`](#dexhooks)
    - [`useOneInchQuote()`](#useoneinchquote)
    - [`useInchDex()`](#useinchdex)

# 🏗 Ethereum Components

🛠 The ready for use react-components are located in `src/components`. They are designed to be used anywhere in your dApp.

> ⚡ Note that many components may get params like `chain`, `address`, `size` and etc.

### `<Account />`

![Account](https://user-images.githubusercontent.com/78314301/141354253-4a040fbc-bf80-4665-af54-98b2f2d8ce7d.gif)

📒 `<Account />` : Easy web3 authentication via MetaMask.

```jsx
<Account />
```

### `<Address />`

![address](https://user-images.githubusercontent.com/78314301/138753150-aefb426c-9481-4f41-91a3-d4e4fd424b8f.gif)

📨 `<Address />` : Displays an Ethereum address with [Blockie](https://www.npmjs.com/package/react-blockies) avatar.

**Options**:

- copyable (optional): display icon for copying.
- avatar (optional): display blockie avatar.
- size (optional): text size.

```jsx
<Address />
<Address avatar />
<Address avatar copyable />
<Address avatar copyable size="4"  />
```

### `<AddressInput />`

![input](https://user-images.githubusercontent.com/78314301/143021458-e3510069-c980-453f-8215-7943b4a0239b.gif)

📫 `<AddressInput />` : Input for eth address. Displays [Blockie](https://www.npmjs.com/package/react-blockies) avatar for the entered wallet. Helps to validate addresses. After entering 42 characters (0x... wallet length) or valid crypto domain freezes input and calls `setValidatedAddress`.
Supported domains: `[".eth", ".crypto", ".coin", ".wallet", ".bitcoin", ".x", ".888", ".nft", ".dao", ".blockchain"]`

**Options**:

- autoFocus (optional): focuses object after rendering the component.
- placeholder (optional): text to display before entering address.
- onChange (required): your setState hook.

```jsx
const [address, setAddress] = useState();

<AddressInput
  autoFocus
  placeholder="Input your Address"
  onChange={setAddress}
/>;
```

### `<Chains />`

![network](https://user-images.githubusercontent.com/78314301/141116531-7c68002b-039b-4fbb-bda3-4a4d431b71f4.gif)

⛓ `<Chains />` : Active network switch. Supports Ethereum, Polygon, BSC and Avalacnhe blockchains. Works only with networks that have already been added to Injected Wallet. You can find a guide on how to programmatically add a new network [here](https://docs.moralis.io/moralis-server/web3/web3#addnetwork). Easily customizable, you can add other networks

**Options**:

- props (optional): networks to display. Added by default: polygon, eth, bsc and avalanche

```jsx
<Chains polygon eth bsc avalanche />
```

### `<CoinPrice />`

![price](https://user-images.githubusercontent.com/78314301/138944095-ac5aebb0-0e69-4b9e-83ec-2a29d0404cbd.gif)

💵 `<CoinPrice />` : displays the price of the token specified in the settings. Uses Moralis Web3API (does not require an active web3 provider).

**Options**:

- address (required): Token contract address
- chain (optional): The network to which the token is deployed. Default: ETH
- image (optional): local path or link to token logo
- size (optional): logo size

```jsx
<CoinPrice address="0x1...3" chain="eth" image="https://img.png" size="40px" />
```

### `<ERC20Balance />`

![image](https://user-images.githubusercontent.com/78314301/139561267-7a1be577-ad13-4158-a7ea-aa4e7db358a3.png)

💰 `<ERC20Balance />` : displays the ERC20 balance of an address. Uses Moralis Web3API (does not require an active web3 provider).

**Options**:

- chain (optional): network for displaying balances on. Will use your wallet network if you do not specify `chain` yourself

```jsx
<ERC20Balance chain="polygon" />
```

### `<ERC20Transfers />`

![image](https://user-images.githubusercontent.com/78314301/139561270-7e0964ec-65f9-4909-b7c1-5706a22cca86.png)

💸 `<ERC20Transfers />` : displays the ERC20 transfers of an address. Uses Moralis Web3API (does not require an active web3 provider).

**Options**:

- chain (optional): network for displaying transfers on. Will use your wallet network if you do not specify `chain` yourself

```jsx
<ERC20Transfers chain="polygon" />
```

### `<DEX />`

![dex](https://user-images.githubusercontent.com/78314301/141123450-02c2710e-7988-45de-80ad-5fc45d2bccfa.gif)

💱 `<DEX />` : interface for [Moralis 1Inch Plugin](https://moralis.io/plugins/1inch?utm_source=github&utm_medium=readme&utm_campaign=ethereum-boilerplate). This plugin integrates the DeFi / DEX aggregator 1Inch to any project that uses Moralis.

**Options**:

- chain (optional): network. Available: Ethereum (“eth”), Binance Smart Chain (“bsc”), Polygon (“polygon”)
- customTokens (optional): object with custom tokens. You can see the example below.

```jsx
<DEX chain="eth" />
```

```jsx
// Adding custom tokens

const customTokens = {
  "0x2180F5cC1ddf117640963AE91868948bd3EF6838": {
    address: "0x2180F5cC1ddf117640963AE91868948bd3EF6838",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/20985/small/_VoQPDDs_400x400.jpg?1638168643",
    name: "AscensionArcade",
    symbol: "AAT",
  },
};

<DEX chain="eth" customTokens={customTokens} />;
```

### `<Wallet />`

![wallet](https://user-images.githubusercontent.com/78314301/141115062-7152ed11-6167-45fe-a4d9-50e78f051838.gif)

💼 `<Wallet />` : example interface for interacting with your wallet. Uses components from the boilerplate: `<Blockie />`, `<Address />`, `<NativeBalance />`, `<AddressInput />`. Has the functionality to send tokens

```jsx
<Wallet />
```

### `<Blockie />`

### `<NativeBalance />`

### `<NFTBalance />`

### `<Contract />`

# 🧰 Ethereum Hooks

### `useAPIContract()`

📋 Runs a given function of a contract abi and returns readonly data. Uses Moralis Web3API (does not require an active web3 provider).

**Options**:

- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value Eth.
- `functionName` (required): The function name
- `address` (required): A smart contract address
- `abi` (required): contract or function ABI(should be provided as an array)
- `params` (optional): Parameters needed for your specific function

**Example**:

```jsx
import { useAPIContract } from "react-moralis"

const ShowUniswapObserveValues = () => {
  const { runContractFunction, data, error, isLoading, isFetching } = useAPIContract({
    abi: usdcEthPoolAbi,
    address: usdcEthPoolAddress,
    functionName: "observe",
    params: {
      secondsAgos: [0, 10],
    },
  });

  return (<div>
    {error && <ErrorMessage error={error} />}
    <button onClick={() => runContractFunction()} disabled={isLoading}>Fetch data</button>
    {contractResponse && JSON.stringify(contractResponse)}
    </pre>}
  </div>)
}
```

### `useWeb3Contract()`

📋 Runs on-chain functions. Requires active Web3 Provider.

**Options**:

- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value Eth.
- `functionName` (required): The function name
- `contractAddress` (required): A smart contract address
- `abi` (required): contract or function ABI(should be provided as an array)
- `params` (optional): Parameters needed for your specific function

**Example**:

```jsx
import { useWeb3Contract } from "react-moralis"

const ShowUniswapObserveValues = () => {
  const { runContractFunction, contractResponse, error, isRunning, isLoading } = useWeb3Contract({
    abi: usdcEthPoolAbi,
    contractAddress: usdcEthPoolAddress,
    functionName: "observe",
    params: {
      secondsAgos: [0, 10],
    },
  });

  return (<div>
    {error && <ErrorMessage error={error} />}
    <button onClick={() => runContractFunction()} disabled={isLoading}>Fetch data</button>
    {contractResponse && JSON.stringify(contractResponse)}
    </pre>}
  </div>)
}
```

### `useERC20Balances()`

💰 Gets all token balances of a current user or specified address.

**Options**:

- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain.
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `to_block` (optional): The block number on which the balances should be checked

**Example**

```jsx
import { useERC20Balances } from "react-moralis";

const { fetchERC20Balances, data, isLoading, isFetching, error } =
  useERC20Balances();

const ERC20Balances = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => fetchERC20Balances({ params: { chain: "0x1" } })}>
        Refetch
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**Example return** (Object)

```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "token_address": "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
      "name": "Kylin Network",
      "symbol": "KYL",
      "logo": "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
      "thumbnail": "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c_thumb.png",
      "decimals": "18",
      "balance": "123456789"
    }
  ]
}
```

### `useERC20Transfers()`

🧾 Gets ERC20 token transfers of a current user or specified address.

**Options**:

- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain.
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `from_date` (optional): The date from where to get the transactions (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date' If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_date` (optional): Get the transactions to this date (any format that is accepted by momentjs). Provide the param 'to_block' or 'to_date' If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `from_block` (optional): The minimum block number from where to get the transactions Provide the param 'from_block' or 'from_date' If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): The maximum block number from where to get the transactions. Provide the param 'to_block' or 'to_date' If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `offset` (optional): Offset.
- `limit` (optional): Limit.

**Example**

```jsx
import { useERC20Transfers } from "react-moralis";

const { fetchERC20Transfers, data, error, isLoading, isFetching } =
  useERC20Transfers();

const ERC20Transfers = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => fetchERC20Transfers({ params: { chain: "0x1" } })}>
        Refetch
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**Example return** (Object)

```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "transaction_hash": "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
      "address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "block_timestamp": "2021-04-02T10:07:54.000Z",
      "block_number": "12526958",
      "block_hash": "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86",
      "to_address": "0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044",
      "from_address": "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf",
      "value": "650000000000000000"
    }
  ]
}
```

### `useNativeBalance()`

💰 Gets native balance for a current user or specified address.

**Options**:

- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain.
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `to_block` (optional): The block number on which the balances should be checked

**Example**:

```jsx
import { useNativeBalance } from "react-moralis";

function NativeBalance() {
  const {
    getBalance,
    data: balance,
    nativeToken,
    error,
    isLoading,
  } = useNativeBalance({ chain: "ropsten" });

  return <div>{balance.formatted}</div>;
}
```

**Example return of balance** (Object)

```jsx
{
  balance: '996869309795359886',
  formatted: '0.9969 ROP'
}
```

**Example return of nativeToken** (Object)

```jsx
{
  name: 'Ropsten Ether',
  symbol: 'ROP',
  decimals: 18
}
```

### `useNativeTransactions()`

🧾 Gets the transactions from the current user or specified address. Returns an object with the number of transactions and the array of native transactions

**Options**:

- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain.
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `from_date` (optional): The date from where to get the transactions (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date' If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_date` (optional): Get the transactions to this date (any format that is accepted by momentjs). Provide the param 'to_block' or 'to_date' If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `from_block` (optional): The minimum block number from where to get the transactions Provide the param 'from_block' or 'from_date' If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): The maximum block number from where to get the transactions. Provide the param 'to_block' or 'to_date' If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `offset` (optional): Offset.
- `limit` (optional): Limit.

**Example**

```jsx
import { useNativeTransactions } from "react-moralis";

const { getNativeTransations, data, chainId, error, isLoading, isFetching } =
  useNativeTransactions();

const NativeTransactions = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button
        onClick={() => getNativeTransations({ params: { chain: "0x1" } })}
      >
        Refetch
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**Example return** (Object)

```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "hash": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "nonce": "326595425",
      "transaction_index": "25",
      "from_address": "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf",
      "to_address": "0xa71db868318f0a0bae9411347cd4a6fa23d8d4ef",
      "value": "650000000000000000",
      "gas": "6721975",
      "gas_price": "20000000000",
      "input": "string",
      "receipt_cumulative_gas_used": "1340925",
      "receipt_gas_used": "1340925",
      "receipt_contract_address": "0x1d6a4cf64b52f6c73f201839aded7379ce58059c",
      "receipt_root": "string",
      "receipt_status": "1",
      "block_timestamp": "2021-04-02T10:07:54.000Z",
      "block_number": "12526958",
      "block_hash": "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86"
    }
  ]
}
```

### `useNFTBalances()`

🎨 Gets all NFTs from the current user or address. Supports both ERC721 and ERC1155. Returns an object with the number of NFT objects and the array of NFT objects.

**Options**:

- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain (if the chain is not supported it will use the Eth chain).
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.

**Example**

```jsx
import { useNFTBalances } from "react-moralis";

const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();

const NFTBalances = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => getNFTBalances({ params: { chain: "0x1" } })}>
        Refetch NFTBalances
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**Example return** (Object)

```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "token_address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "token_id": "15",
      "contract_type": "ERC721",
      "owner_of": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "block_number": "88256",
      "block_number_minted": "88256",
      "token_uri": "string",
      "metadata": "string",
      "synced_at": "string",
      "amount": "1",
      "name": "CryptoKitties",
      "symbol": "RARI"
    }
  ]
}
```

### `useNFTTransfers()`

🎨 Gets the NFT transfers. Returns an object with the number of NFT transfers and the array of NFT transfers.

**Options**:

- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain (if the chain is not supported it will use the Eth chain).
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `offset` (optional): Offset.
- `direction` (optional): The transfer direction. Available values : both, to, from . Default value : both.
- `format` (optional): he format of the token id. Available values : decimal, hex. Default value : decimal.
- `limit` (optional): Limit.

**Example**

```jsx
import { useNFTTransfers } from "react-moralis";

const { fetch, data, error, isLoading, isFetching } = useNFTTransfers();

const NFTTransfers = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => fetch({ params: { chain: "0x1" } })}>
        Refetch
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**Example return** (Object)

```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "token_address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "token_id": "15",
      "from_address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "to_address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "amount": "1",
      "contract_type": "ERC721",
      "block_number": "88256",
      "block_timestamp": "2021-06-04T16:00:15",
      "block_hash": "string",
      "transaction_hash": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "transaction_type": "string",
      "transaction_index": "string",
      "log_index": 0
    }
  ]
}
```

### `useChain()`

⛓ Hook for fast network switching or getting info about current network. To change the current network, set the target chainId to `switchNetwork` function. If the user does not have the target network in the wallet, it will automatically ask permission to add it to the wallet.

**Example**:

```jsx
import { useChain } from "react-moralis";

function Chains() {
  const { switchNetwork, chainId, chain, account } = useChain();
  return (
    <>
      <button onClick={() => switchNetwork("0x1")}>Switch to Ethereum</button>
      <p>Current chainId: {chainId}</p>
    </>
  );
}
```

### `useTokenPrice()`

💰 Gets the price nominated in the native token and usd for a given token contract address

**Options**:

- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain (if the chain is not supported it will use the Eth chain).
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `exchange` (optional): The factory name or address of the token exchange. Possible exchanges, for different chains are: ETH mainnet: `uniswap-v3`, `sushiswap`, `uniswap-v2`, BSC mainnet: `pancakeswap-v2`, `pancakeswap-v1`. Polygon mainnet: `quickswap`. _If no exchange is specified, all exchanges are checked (in the order as listed above) until a valid pool has been found. Note that this request can take more time. So specifying the exchange will result in faster responses most of the time._
- `to_block` (optional): Returns the price for a given blocknumber (historical price-data).

**Example**

```jsx
import { useTokenPrice } from "react-moralis";

const TokenPrice = () => {
  const {
    fetchTokenPrice,
    data: formattedData,
    error,
    isLoading,
    isFetching,
  } = useTokenPrice({ address: "0x1f9840...1f984", chain: "eth" });

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button
        onClick={() =>
          fetchTokenPrice({ params: { address: "0x6...361", chain: "bsc" } })
        }
      >
        Refetch
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**Example return** (Object)

```json
{
  "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
  "exchangeName": "Uniswap v3",
  "formattedNative": "0.004695 ETH",
  "formattedUsd": "$20.38",
  "nativePrice": {
    "decimals": 18,
    "name": "Ether",
    "symbol": "ETH",
    "value": "4695118425598734"
  },
  "usdPrice": 20.37791922835578
}
```

### `DEX Hooks`

### `useOneInchQuote()`

💸 Hook for getting swap quote info.

**Example**:

```jsx
import { useOneInchQuote } from "react-moralis";

function Quote() {
  const { getQuote, data, isFetching, isLoading, error } = useOneInchQuote({
    chain: "bsc", // The blockchain you want to use (eth/bsc/polygon)
    fromTokenAddress: "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4", // The token you want to swap
    toTokenAddress: "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4", // The token you want to receive
    amount: 1000,
  });
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

### `useOneInchQuote()`

💸 Hook for swap.

**Example**:

```jsx
import { useOneInchQuote } from "react-moralis";

function Swap() {
  const { swap, data, isFetching, isLoading, error } = useOneInchSwap();

  const options = {
    chain: "bsc", // The blockchain you want to use (eth/bsc/polygon)
    fromTokenAddress: "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4", // The token you want to swap
    toTokenAddress: "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4", // The token you want to receive
    amount: 1000,
    fromAddress: "0x6217e65d864d77DEcbFF0CFeFA13A93f7C1dD064", // Your wallet address
    slippage: 1,
  };

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => swap(options)}>Swap</button>
    </div>
  );
}
```

### `useOneInchTokens()`

💸 Hook for get supported token list.

**Example**:

```jsx
import { useOneInchQuote } from "react-moralis";

const SupportedTokens = () => {
  const { getSupportedTokens, data, isFetching, isLoading, error } =
    useOneInchTokens({ chain: "bsc" });

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

### Where to host your dApp?

# 👷‍♂️ `ethereum-boilerplate`

> React components and hooks for fast building dApps without running own backend

This boilerplate is built on [react-moralis](https://github.com/MoralisWeb3/react-moralis) and [Moralis](https://moralis.io/). Also has its own context provider for quick access to `chainId` or `ethAddress`

Please check the [official documentation of Moralis](https://docs.moralis.io/#user) for all the functionalities of Moralis.

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
✏ Provide your appId and serverUrl to `<MoralisProvider>` in `src/index.js`:
```jsx
const APP_ID = "xxxxxxxxxxxxxxxxxxx"
const SERVER_URL = "https://xxxx.grandmoralis.com:2053/server"
<MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
  <App />
</MoralisProvider>
```
🚴‍♂️ Run your App:
```sh
yarn start
```

# 🏗 Web3 Components

🛠 The ready for use react-components are located in `src/components`. They are designed to be used anywhere in your dApp. 

> ⚡ Note that many components may get params like `chain`, `address`, `size` and etc.

### Address
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

### AddressInput
📒 `<AddressInput />` : Input for eth address. Displays [Blockie](https://www.npmjs.com/package/react-blockies) avatar for the entered wallet. Helps to validate addresses. After entering 42 characters (wallet length) freezes inout and calls `setValidatedAddress`

**Options**:
- autoFocus (optional): focuses object after rendering the component. 
- placeholder (optional): text to display before entering address.
- onChange (required): your setState hook.

```jsx
const [address, setAddress] = useState();

<AddressInput autoFocus placeholder="Input your Address" onChange={setReceiver} />
```

### Chain
### CoinPrice
### Contract
### ERC20Balance
### ERC20Transfers
### DEX 
### NFTBalance
### Wallet
### Blockie 
### NativeBalance

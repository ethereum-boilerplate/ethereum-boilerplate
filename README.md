# 👷‍♂️ `ethereum-boilerplate`

> React components and hooks for fast building dApps without running own backend

This boilerplate is built on [react-moralis](https://github.com/MoralisWeb3/react-moralis) and [Moralis](https://moralis.io/). Also has its own context provider for quick access to `chainId` or `ethAddress`

Please check the [official documentation of Moralis](https://docs.moralis.io/#user) for all the functionalities of Moralis.

# ⭐️ `Star us`
If this boilerplate helps you build Ethereum dapps faster - please star this project, every star makes us very happy!

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
✏ Provide your appId and serverUrl from [Moralis](https://moralis.io/) to `<MoralisProvider>` in `src/index.js`:
```jsx
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

### AddressInput

![addressInput](https://user-images.githubusercontent.com/78314301/138753917-53007fa1-b053-4723-8c18-aec9ecfe5479.gif)


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

![chain](https://user-images.githubusercontent.com/78314301/138758299-79bee590-5541-4723-b033-b8ee9b6ba693.gif)


### CoinPrice

![coin](https://user-images.githubusercontent.com/78314301/138758957-b685a719-64a7-4e54-b103-7331f50d63ce.gif)

### Contract
### ERC20Balance

![image](https://user-images.githubusercontent.com/78314301/138759637-2ff0feb9-9b6e-4bb6-8c2a-4ccf79123f48.png)

### ERC20Transfers

![image](https://user-images.githubusercontent.com/78314301/138760390-ba7eca53-5ed0-421d-84fd-c7f5909d79b4.png)

### DEX 

![dex](https://user-images.githubusercontent.com/78314301/138762869-322becb8-69df-426b-9364-549b3ca89ff9.gif)

### Wallet

![wallet](https://user-images.githubusercontent.com/78314301/138764170-e5ad1c58-0130-43f7-9b8b-b3e04135f84e.gif)

### Blockie 

### NativeBalance

### NFTBalance

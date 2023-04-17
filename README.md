# `ethereum-boilerplate`

> Fully Typescript ready NextJS components for fast building dApps without running own backend

🚀DEMO: https://eth-boilerplate.vercel.app/

This boilerplate is built with [Moralis](https://moralis.io?utm_source=github&utm_medium=readme&utm_campaign=ethereum-boilerplate)

You need active web3 provider/wallet only for authentication. All pages in this boilerplate do not require an active web3 provider, they use Moralis Web3 API. Moralis supports the most popular blockchains and their test networks. You can find a list of all available networks in [Moralis Supported Chains](https://docs.moralis.io/reference/supported-chains-nft)

Please check the [official documentation of Moralis](https://docs.moralis.io/) for all the functionalities of Moralis.

![eth-boilerplate](https://user-images.githubusercontent.com/78314301/186810447-fa66cd80-5bbb-4e41-b29f-862c8cc67d43.gif)

# ⭐️ `Star us`

If this boilerplate helps you build Ethereum dapps faster - please star this project, every star makes us very happy!

# 🤝 `Need help?`

If you need help with setting up the boilerplate or have other questions - don't hesitate to write in our community forum and we will check asap. [Forum link](https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/86). The best thing about this boilerplate is the super active community ready to help at any time! We help each other.

# 🚀 `Quick Start`

<div justify="center">
<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fethereum-boilerplate%2Fethereum-boilerplate&env=MORALIS_API_KEY,NEXTAUTH_SECRET&envDescription=1.%20MORALIS_API_KEY%3A%20Visit%20admin.moralis.io.%202.%20NEXTAUTH_SECRET%3A%20Used%20for%20encrypting%20JWT%20tokens.%20You%20can%20put%20any%20or%20generate%20it%20on%20https%3A%2F%2Fgenerate-secret.now.sh%2F32&envLink=https%3A%2F%2Fgithub.com%2Fethereum-boilerplate%2Fethereum-boilerplate%23-quick-start"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/ethereum-boilerplate/ethereum-boilerplate"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
</div>

📄 Clone or fork `ethereum-boilerplate`:

```sh
git clone https://github.com/ethereum-boilerplate/ethereum-boilerplate.git
```

💿 Install all dependencies:

```sh
cd ethereum-boilerplate
yarn install
```

✏ Rename `.env.local.example` to `.env.local` and provide required data. Get your Web3 Api Key from the [Moralis dashboard](https://admin.moralis.io/):

![image](https://user-images.githubusercontent.com/78314301/186810270-7c365d43-ebb8-4546-a383-32983fbacef9.png)

🖊️ Fill the environment variables in your .env.local file in the app root:

- `MORALIS_API_KEY`: You can get it [here](https://admin.moralis.io/web3apis).
- `NEXTAUTH_URL`: Your app address. In the development stage, use http://localhost:3000.
- `NEXTAUTH_SECRET`: Used for encrypting JWT tokens of users. You can put any value here or generate it on https://generate-secret.now.sh/32.

Example:

```
MORALIS_API_KEY=xxxx
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=7197b3e8dbee5ea6274cab37245eec212
```

🚴‍♂️ Run your App:

```sh
yarn start
```

# 🧭 `Table of contents`

- [`ethereum-boilerplate`](#ethereum-boilerplate)
- [🚀 Quick Start](#-quick-start)
- [🧭 Table of contents](#-table-of-contents)
- [🏗 Ethereum Components](#-ethereum-components)
  - [`<NFTBalances />`](#nftbalances-)
  - [`<ERC20Balances />`](#erc20balances-)
  - [`<ERC20Transfers />`](#erc20transfers-)
  - [`<NFTTransfers />`](#nfttransfers-)
  - [`<Transactions />`](#transactions-)
- [✨ Contributors](#-contributors)

# 🏗 Ethereum Components

### `<NFTBalances />`

![image](https://user-images.githubusercontent.com/78314301/186813114-2b2265a5-5177-4ab8-9076-588107d450f1.png)

location: `src/component/templates/balances/NFT/NFTBalances.tsx`

🎨 `<NFTBalances />` : displays the user's balances. Uses Moralis Evm API (does not require an active web3 provider).

### `<ERC20Balances />`

![image](https://user-images.githubusercontent.com/78314301/186813448-a0b63106-bcba-46d2-be80-3a7d962e2302.png)

location: `src/component/templates/balances/ERC20/ERC20Balances.tsx`

💰 `<ERC20Balances />` : displays the user's ERC20 balances. Uses Moralis Evm API (does not require an active web3 provider).

### `<ERC20Transfers />`

![image](https://user-images.githubusercontent.com/78314301/186813957-69badb89-bf93-44e6-90e7-c35801c24d9a.png)

location: `src/component/templates/transfers/ERC20/ERC20Transfers.tsx`

💰 `<ERC20Transfers />` : displays the user's ERC20 transfers. Uses Moralis Evm API (does not require an active web3 provider).

### `<NFTTransfers />`

![image](https://user-images.githubusercontent.com/78314301/186814187-916851d7-703d-4e30-9b28-b66b0bea90b1.png)

location: `src/component/templates/transfers/NFT/NFTTransfers.tsx`

🎨 `<NFTTransfers />` : displays the user's NFT transfers. Uses Moralis Evm API (does not require an active web3 provider).

### `<Transactions />`

![image](https://user-images.githubusercontent.com/78314301/186812987-74d8e534-5171-4a53-83f9-3b470bc97e63.png)

location: `src/component/templates/transactions/Transactions.tsx`

💰 `<Transactions />` : displays the user's transactions. Uses Moralis Evm API (does not require an active web3 provider).

# ✨ Contributors

Feel free to contribute 🧙 to `ethereum-boilerplate` project. But first, **please read the [Contributing Guidelines](CONTRIBUTING.md) before opening an issue or PR** so you understand the branching strategy and local development environment.

<a href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ethereum-boilerplate/ethereum-boilerplate" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
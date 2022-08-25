import { Default } from 'components/layouts/Default';
import { EvmAddress, EvmChain } from '@moralisweb3/evm-utils';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import getErc20LogoAddress from 'utils/getErc20LogoAddress';
import Moralis from 'moralis';
import { NFTBalances } from 'components/templates/balances/NFT';

const ERC20: NextPage = (props) => {
    return (
        <Default>
            <NFTBalances {...props} />
        </Default>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    if (!session?.user.address) {
        return { props: { error: 'Connect your wallet first' } };
    }

    const balances = await Moralis.EvmApi.account.getNFTs({
        address: session?.user.address,
        chain: EvmChain.RINKEBY,
    });

    // const tokensWithLogosAdded = balances.toJSON().map((balance) => ({
    //     ...balance,
    //     token: {
    //         ...balance.token,
    //         logo: getErc20LogoAddress({
    //             blockchain: 'ethereum',
    //             address: EvmAddress.create(balance.token?.contractAddress || '').checksum,
    //         }),
    //     },
    // }));

    return {
        props: {
            balances: JSON.parse(JSON.stringify(balances)),
        },
    };
};

export default ERC20;

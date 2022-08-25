import { Default } from 'components/layouts/Default';
import { EvmAddress } from '@moralisweb3/evm-utils';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import getErc20LogoAddress from 'utils/getErc20LogoAddress';
import Moralis from 'moralis';
import { ERC20Balances } from 'components/templates/balances/ERC20';
import { ERC20Transfers } from 'components/templates/transfers/ERC20';
import { IERC20Transfers } from 'components/templates/transfers/ERC20/types';

const ERC20: NextPage<IERC20Transfers> = (props) => {
    console.log(props);
    return (
        <Default>
            <ERC20Transfers {...props} />
        </Default>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    if (!session?.user.address) {
        return { props: { error: 'Connect your wallet first' } };
    }

    const transfers = await Moralis.EvmApi.account.getTokenTransfers({
        address: session?.user.address,
        // chain: EvmChain.BSC,
    });

    return {
        props: {
            transfers: JSON.parse(JSON.stringify(transfers.result)),
        },
    };
};

export default ERC20;

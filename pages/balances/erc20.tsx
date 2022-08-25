import { Default } from 'components/layouts/Default';
import { EvmAddress } from '@moralisweb3/evm-utils';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import getErc20LogoAddress from 'utils/getErc20LogoAddress';
import Moralis from 'moralis';
import { ERC20Balances, IERC20Balances } from 'components/templates/balances/ERC20';

const ERC20: NextPage<IERC20Balances> = (props) => {
  return (
    <Default pageName="ERC20 Balances">
      <ERC20Balances {...props} />
    </Default>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  if (!session?.user.address) {
    return { props: { error: 'Connect your wallet first' } };
  }

  const balances = await Moralis.EvmApi.account.getTokenBalances({
    address: session?.user.address,
    chain: process.env.APP_CHAIN_ID,
  });

  const tokensWithLogosAdded = balances.toJSON().map((balance) => ({
    ...balance,
    token: {
      ...balance.token,
      logo: getErc20LogoAddress({
        blockchain: 'ethereum',
        address: EvmAddress.create(balance.token?.contractAddress || '').checksum,
      }),
    },
  }));

  return {
    props: {
      balances: JSON.parse(JSON.stringify(tokensWithLogosAdded)),
    },
  };
};

export default ERC20;

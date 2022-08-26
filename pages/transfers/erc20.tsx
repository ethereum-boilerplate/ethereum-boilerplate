import { Default } from 'components/layouts/Default';
import { ERC20Transfers } from 'components/templates/transfers/ERC20';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { IERC20Transfers } from 'components/templates/transfers/ERC20/types';
import Moralis from 'moralis';

const ERC20: NextPage<IERC20Transfers> = (props) => {
  return (
    <Default pageName="ERC20 Transfers">
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
    chain: process.env.APP_CHAIN_ID,
  });

  return {
    props: {
      transfers: JSON.parse(JSON.stringify(transfers.result)),
    },
  };
};

export default ERC20;

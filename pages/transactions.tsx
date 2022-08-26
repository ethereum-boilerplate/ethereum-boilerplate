import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { ITransactions, Transactions } from 'components/templates/transactions';
import Moralis from 'moralis';

const TransactionsPage: NextPage<ITransactions> = (props) => {
  return (
    <Default pageName="Transactions">
      <Transactions {...props} />
    </Default>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  if (!session?.user.address) {
    return { props: { error: 'Connect your wallet first' } };
  }

  const transactions = await Moralis.EvmApi.account.getTransactions({
    address: session?.user.address,
    chain: process.env.APP_CHAIN_ID,
  });

  return {
    props: {
      transactions: JSON.parse(JSON.stringify(transactions.result)),
    },
  };
};

export default TransactionsPage;

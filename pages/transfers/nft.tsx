import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { INFTTransfers, NFTTransfers } from 'components/templates/transfers/NFT';
import Moralis from 'moralis';

const NFTTransfersPage: NextPage<INFTTransfers> = (props) => {
  return (
    <Default pageName="NFT Transfers">
      <NFTTransfers {...props} />
    </Default>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  if (!session?.user.address) {
    return { props: { error: 'Connect your wallet first' } };
  }

  const transfers = await Moralis.EvmApi.account.getNFTTransfers({
    address: session?.user.address,
    chain: session?.user.chainId,
  });

  return {
    props: {
      transfers: JSON.parse(JSON.stringify(transfers.result)),
    },
  };
};

export default NFTTransfersPage;

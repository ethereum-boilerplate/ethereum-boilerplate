import { Default } from 'components/layouts/Default';
import { NFTBalances } from 'components/templates/balances/NFT';

const ERC20 = () => {
  return (
    <Default pageName="NFT Balances">
      <NFTBalances />
    </Default>
  );
};

export default ERC20;

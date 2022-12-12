import { Default } from 'components/layouts/Default';
import { ERC20Transfers } from 'components/templates/transfers/ERC20';

const ERC20 = () => {
  return (
    <Default pageName="ERC20 Transfers">
      <ERC20Transfers />
    </Default>
  );
};

export default ERC20;

import { Default } from 'components/layouts/Default';
import { Transactions } from 'components/templates/transactions';

const TransactionsPage = () => {
  return (
    <Default pageName="Transactions">
      <Transactions />
    </Default>
  );
};

export default TransactionsPage;

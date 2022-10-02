import { BaseContracts, IBaseContracts } from 'components/templates/contracts/base';
import { Default } from 'components/layouts/Default';
import { NextPage } from 'next';

const BASE: NextPage<IBaseContracts> = (props) => {
  return (
    <>
      <Default pageName="Check Base Contracts">
        <BaseContracts {...props} />
      </Default>
    </>
  );
};

export default BASE;

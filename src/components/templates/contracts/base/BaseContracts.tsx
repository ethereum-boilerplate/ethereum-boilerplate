import { FC, useMemo, useState } from 'react';
import { IBaseContracts } from './types';
import BaseResolver from '../../../../../pages/contracts/baseResolver';
import { Input } from '@chakra-ui/react';
import BaseMethods from '../../../../../pages/contracts/baseMethods';
import { Card } from '@web3uikit/core';
import Address from 'components/elements/Address';
import { ethers } from 'ethers';

const BaseContracts: FC<IBaseContracts> = () => {
  const chainId = process.env.APP_CHAIN_ID;
  const [contract, setContract] = useState();

  const [conAdd, setconAdd] = useState('');
  const [deployed, setdeployed] = useState(false);

  /** Automatically builds write and read components for interacting with contract*/
  const displayedContractFunctions = useMemo(() => {
    if (!contract?.abi) {
      return [];
    }
    return contract.abi.filter((method: any) => method['type'] === 'function');
  }, [contract]);

  const add = (event) => {
    setconAdd(event.target.value);
  };

  const DeployedActive = useMemo(async () => {
    const provider = new ethers.getDefaultProvider(5);
    if (conAdd) {
      const code = await provider.getCode(conAdd, 'latest');
      code ? setdeployed(true) : setdeployed(false);
    }
  }, [chainId, contract]);

  return (
    <>
      <div>
        <div style={{ marginTop: '20px' }}>Check Contracts ✅</div>

        <Input
          style={{ marginTop: '10px', marginBottom: '20px' }}
          variant="flushed"
          placeholder="Contract Address"
          onChange={(e) => add(e)}
        />
      </div>
      <div
        style={{ margin: 'auto', display: 'flex', gap: '20px', marginTop: '25', marginBottom: '20px', width: '100%' }}
      >
        <Card
          style={{
            width: '60%',
            boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)',
            border: '1px solid #e7eaf3',
            borderRadius: '0.5rem',
          }}
          title={`Your contract: ${contract?.contractName}`}
        >
          <Address avatar="left" copyable address={conAdd} size={8} />
          <BaseResolver contract={contract} setContract={setContract} />
        </Card>

        <Card
          title={'Contract Events'}
          style={{
            width: '40%',
            boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)',
            border: '1px solid #e7eaf3',
            borderRadius: '0.5rem',
          }}
        ></Card>
      </div>
      <div style={{ width: '60%' }}>
        {deployed === true && (
          <>
            <BaseMethods
              address={conAdd}
              displayedContractFunctions={displayedContractFunctions}
              responses={contract}
            />
          </>
        )}

        {deployed === false && (
          <>{`The contract is not deployed to the active ${chainId} chain. Switch your active chain or try agan later.`}</>
        )}
      </div>
    </>
  );
};

export default BaseContracts;

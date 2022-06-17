import React, { useState, useMemo } from 'react';
import { useMoralis } from 'react-moralis';
import { DexProps } from './Dex.types';
import styles from './Dex.styles';
import { Button, Input, Typography, Icon, Modal } from 'web3uikit';
import { InchModal } from '@ethereum-boilerplate-v2/ui';
import useInchDex from '../../hooks/useInchDex';

const { DivStyled, CardStyled } = styles;

export const Dex: React.FC<DexProps> = ({ chain, customTokens = {} }) => {
  const { trySwap, tokenList, getQuote } = useInchDex(chain);
  const { Moralis, isInitialized, chainId } = useMoralis();
  const [isFromModalActive, setFromModalActive] = useState(false);
  const [isToModalActive, setToModalActive] = useState(false);
  const [fromToken, setFromToken] = useState<string>();
  const [toToken, setToToken] = useState<string>();

  console.log('isToModalActive', isToModalActive);

  const tokens = useMemo(() => {
    return { ...customTokens, ...tokenList };
  }, [customTokens, tokenList]);
  return (
    <>
      <DivStyled>
        <CardStyled>
          <div>From</div>
          <div
            style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '49.5%', float: 'left' }}>
              <Input type="number" placeholder="0.00" />
              {/* <Typography variant="body16">Hello</Typography> */}
            </div>

            <Button
              text="select a token"
              onClick={() => setFromModalActive(true)}
            />
          </div>
        </CardStyled>
        <div
          style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
        >
          <Icon fill="#000000" size={24} svg="arrowCircleDown" />
        </div>
        <CardStyled style={{ marginBottom: '15px' }}>
          <div>To</div>
          <div
            style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '49.5%', float: 'left' }}>
              <Input placeholder="0.00" />
              {/* <Typography variant="body16">Hello</Typography> */}
            </div>
            <div>
              <Button
                text="select a token"
                onClick={() => setToModalActive(true)}
              />
            </div>
          </div>
        </CardStyled>

        <Button
          size="large"
          text="Swap"
          onClick={() => console.log('hii')}
          disabled={true}
          theme="colored"
        />
      </DivStyled>

      <Modal
        isVisible={isFromModalActive}
        onCancel={() => setFromModalActive(false)}
        onCloseButtonPressed={() => setFromModalActive(false)}
        onOk={() => setFromModalActive(false)}
        title="Select a token"
        width="430px"
        canOverflow={true}
      >
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <InchModal
            open={isFromModalActive}
            onClose={() => setFromModalActive(false)}
            setToken={setFromToken}
            tokenList={tokens}
          />
        </div>
      </Modal>
      <Modal
        isVisible={isToModalActive}
        onCancel={() => setToModalActive(false)}
        onCloseButtonPressed={() => setToModalActive(false)}
        onOk={() => setToModalActive(false)}
        title="Select a token"
        width="430px"
        canOverflow={true}
      >
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <InchModal
            open={isToModalActive}
            onClose={() => setToModalActive(false)}
            setToken={setToToken}
            tokenList={tokens}
          />
        </div>
      </Modal>
    </>
  );
};

export default Dex;

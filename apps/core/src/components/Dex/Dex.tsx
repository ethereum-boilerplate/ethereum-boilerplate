import React, { useState, useMemo, useEffect } from 'react';
import { useMoralis, useTokenPrice } from 'react-moralis';
import { DexProps, Token } from './Dex.types';
import styles from './Dex.styles';
import { Button, Input, Typography, Icon, Modal, Avatar } from 'web3uikit';
import { InchModal, PriceSwap } from '@ethereum-boilerplate-v2/ui';
import useInchDex from '../../hooks/useInchDex';
import { getWrappedNative } from '../../helpers/networks';
import { tokenValue } from '../../helpers/formatters';
import color from '../../../../../libs/ui/src/styles/colors';

const { DivStyled, CardStyled, ButtonInputDivStyled, ButtonStyled } = styles;

const nativeAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

const chainIds = {
  '0x1': 'eth',
  '0x38': 'bsc',
  '0x89': 'polygon',
};
const getChainIdByName = (chainName: string) => {
  return (Object.keys(chainIds) as Array<keyof typeof chainIds>).find(
    (key) => chainIds[key] === chainName
  );
};

const IsNative = (address: string) =>
  address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
export const Dex: React.FC<DexProps> = ({ chain, customTokens = {} }) => {
  const { trySwap, tokenList, getQuote } = useInchDex(chain);
  const { Moralis, isInitialized, chainId } = useMoralis();
  const [isFromModalActive, setFromModalActive] = useState(false);
  const [isToModalActive, setToModalActive] = useState(false);
  const [fromToken, setFromToken] = useState<Token>();
  const [toToken, setToToken] = useState<Token>();
  const [fromAmount, setFromAmount] = useState<number>();
  const [quote, setQuote] = useState<any>();
  const [currentTrade, setCurrentTrade] = useState<object>();
  const { fetchTokenPrice } = useTokenPrice({
    address: '',
  });
  const [tokenPricesUSD, setTokenPricesUSD] = useState<{
    [key: string]: number;
  }>({});

  console.log('isToModalActive', isToModalActive);
  console.log('isFromModalActive', isFromModalActive);
  console.log('fromToken', fromToken);
  console.log('toToken', toToken);
  console.log('chainId', chainId, 'chain', chain);

  const tokens = useMemo(() => {
    return { ...customTokens, ...tokenList };
  }, [customTokens, tokenList]);

  const fromTokenPriceUsd = useMemo(() => {
    if (tokenPricesUSD && fromToken) {
      return tokenPricesUSD[fromToken['address']];
    } else {
      return null;
    }
  }, [tokenPricesUSD, fromToken]);

  const toTokenPriceUsd = useMemo(() => {
    if (tokenPricesUSD && toToken) {
      return tokenPricesUSD[toToken['address']];
    } else {
      return null;
    }
  }, [tokenPricesUSD, toToken]);

  const fromTokenAmountUsd = useMemo(() => {
    if (!fromTokenPriceUsd || !fromAmount) return null;
    return `~$ ${(fromAmount * fromTokenPriceUsd).toFixed(4)}`;
  }, [fromTokenPriceUsd, fromAmount]);

  const toTokenAmountUsd = useMemo(() => {
    if (!toTokenPriceUsd || !quote) return null;
    return `~$ ${(
      parseFloat(
        Moralis?.Units?.FromWei(quote?.toTokenAmount, quote?.toToken?.decimals)
      ) * toTokenPriceUsd
    ).toFixed(4)}`;
  }, [toTokenPriceUsd, quote]);
  // tokenPrices
  useEffect(() => {
    if (!isInitialized || !fromToken || !chain) return;
    // const validatedChain = chain ? getChainIdByName(chain) : chainId;
    const validatedChain = getChainIdByName(chain);
    if (validatedChain) {
      const tokenAddress = IsNative(fromToken['address'])
        ? getWrappedNative(validatedChain)
        : fromToken['address'];
      tokenAddress &&
        fetchTokenPrice({
          params: { chain: validatedChain, address: tokenAddress },
          onSuccess: (price) =>
            price &&
            setTokenPricesUSD({
              ...tokenPricesUSD,
              [fromToken['address']]: price['usdPrice'],
            }),
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chain, isInitialized, fromToken]);
  useEffect(() => {
    if (!isInitialized || !toToken || !chain) return;
    //  const validatedChain = chain ? getChainIdByName(chain) : chainId;
    const validatedChain = getChainIdByName(chain);
    if (validatedChain) {
      const tokenAddress = IsNative(toToken['address'])
        ? getWrappedNative(validatedChain)
        : toToken['address'];
      tokenAddress &&
        fetchTokenPrice({
          params: { chain: validatedChain, address: tokenAddress },
          onSuccess: (price) =>
            price &&
            setTokenPricesUSD({
              ...tokenPricesUSD,
              [toToken['address']]: price['usdPrice'],
            }),
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chain, isInitialized, toToken]);

  useEffect(() => {
    if (!tokens || fromToken) return;
    setFromToken(tokens[nativeAddress]);
  }, [tokens, fromToken]);

  const ButtonState = useMemo(() => {
    // if(chainId){
    //    if (chainIds?.[chainId] !== chain)
    //      return { isActive: false, text: `Switch to ${chain}` };
    // }
    if (!fromAmount) return { isActive: false, text: 'Enter an amount' };
    if (fromAmount && currentTrade) return { isActive: true, text: 'Swap' };
    return { isActive: false, text: 'Select tokens' };
  }, [fromAmount, currentTrade, chainId, chain]);

  useEffect(() => {
    if (fromToken && toToken && fromAmount)
      setCurrentTrade({ fromToken, toToken, fromAmount, chain });
  }, [toToken, fromToken, fromAmount, chain]);

  useEffect(() => {
    if (currentTrade) getQuote(currentTrade).then((quote) => setQuote(quote));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrade]);

  return (
    <>
      <DivStyled>
        <CardStyled>
          <div>From</div>
          <ButtonInputDivStyled>
            <div style={{ width: '49.5%', float: 'left' }}>
              <Input
                type="number"
                placeholder="0.00"
                onChange={(e) => setFromAmount(parseFloat(e.target.value))}
                value={fromAmount}
              />
              <Typography variant="body16">{fromTokenAmountUsd}</Typography>
            </div>
            {fromToken ? (
              <ButtonStyled onClick={() => setFromModalActive(true)}>
                <Avatar
                  isRounded
                  size={25}
                  theme="image"
                  image={fromToken.logoURI}
                />
                <Typography
                  variant="body18"
                  font-weight={500}
                  color={color.blue}
                >
                  {fromToken.symbol}
                </Typography>
                <Icon fill="#000000" size={24} svg="triangleDown" />
              </ButtonStyled>
            ) : (
              <Button
                text="select a token"
                onClick={() => setFromModalActive(true)}
              />
            )}
          </ButtonInputDivStyled>
        </CardStyled>
        <div
          style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
        >
          <Icon fill="#000000" size={24} svg="arrowCircleDown" />
        </div>
        <CardStyled style={{ marginBottom: '15px' }}>
          <div>To</div>
          <ButtonInputDivStyled>
            <div style={{ width: '49.5%', float: 'left' }}>
              <Input
                placeholder="0.00"
                value={
                  quote
                    ? parseFloat(
                        Moralis?.Units?.FromWei(
                          quote?.toTokenAmount,
                          quote?.toToken?.decimals
                        )
                      ).toFixed(6)
                    : ''
                }
              />
              <Typography variant="body16"> {toTokenAmountUsd}</Typography>
            </div>
            {toToken ? (
              <ButtonStyled onClick={() => setToModalActive(true)}>
                <Avatar
                  isRounded
                  size={25}
                  theme="image"
                  image={toToken.logoURI}
                />
                <Typography
                  variant="body18"
                  font-weight={500}
                  color={color.blue}
                >
                  {toToken.symbol}
                </Typography>
                <Icon fill="#000000" size={24} svg="triangleDown" />
              </ButtonStyled>
            ) : (
              <Button
                text="select a token"
                onClick={() => setToModalActive(true)}
              />
            )}
          </ButtonInputDivStyled>
        </CardStyled>
        {quote && (
          <div>
            <Typography>
              Estimated Gas: <Typography>{quote?.estimatedGas}</Typography>
            </Typography>
            <PriceSwap
              quote={quote}
              tokenPricesUSD={tokenPricesUSD}
              fromToken={fromToken}
              toToken={toToken}
            />
          </div>
        )}
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

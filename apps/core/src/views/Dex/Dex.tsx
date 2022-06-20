import React, { useState, useMemo, useEffect, useReducer } from 'react';
import { useMoralis, useTokenPrice } from 'react-moralis';
import { DexProps, Token } from './Dex.types';
import styles from './Dex.styles';
import { Button, Input, Typography, Icon, Modal, Avatar } from 'web3uikit';
import { PriceSwap } from './components/PriceSwap';
import { InchModal } from './components/InchModal';
import { reducer, initialState } from './Dex.reducer';
import useInchDex from '../../hooks/useInchDex';
import {
  getWrappedNative,
  color,
  getChainIdByName,
  IsNative,
  chainIds,
} from '@ethereum-boilerplate-v2/ui';

const {
  DivStyled,
  CardStyled,
  ButtonInputDivStyled,
  ButtonStyled,
  TypographyStyled,
} = styles;

const nativeAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

export const Dex: React.FC<DexProps> = ({ chain, customTokens = {} }) => {
  const { trySwap, tokenList, getQuote } = useInchDex(chain);
  const { Moralis, isInitialized, chainId } = useMoralis();
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isFromModalActive,
    isToModalActive,
    fromToken,
    toToken,
    fromAmount,
    quote,
    currentTrade,
    tokenPricesUSD,
  } = state;
  // const [isFromModalActive, setFromModalActive] = useState(false);
  // const [isToModalActive, setToModalActive] = useState(false);
  // const [fromToken, setFromToken] = useState<Token>();
  // const [toToken, setToToken] = useState<Token>();
  // const [fromAmount, setFromAmount] = useState<number>();
  // const [quote, setQuote] = useState<any>();
  // const [currentTrade, setCurrentTrade] = useState<object>();
  const { fetchTokenPrice } = useTokenPrice({
    address: '',
  });
  // const [tokenPricesUSD, setTokenPricesUSD] = useState<{
  //   [key: string]: number;
  // }>({});

  console.log('isToModalActive', isToModalActive);
  console.log('isFromModalActive', isFromModalActive);
  console.log('fromToken', fromToken);
  console.log('toToken', toToken);
  console.log('chainId', chainId, 'chain', chain);

  console.log('fetchToken', fetchTokenPrice);
  console.log('token list inside Dex', tokenList);

  const tokens = useMemo(() => {
    return { ...customTokens, ...tokenList };
  }, [customTokens, tokenList]);
  console.log('tokens', tokens);

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
            dispatch({
              type: 'set-tokenPriceUSD',
              payload: {
                ...tokenPricesUSD,
                [fromToken['address']]: price['usdPrice'],
              },
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
            dispatch({
              type: 'set-tokenPriceUSD',
              payload: {
                ...tokenPricesUSD,
                [toToken['address']]: price['usdPrice'],
              },
            }),
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chain, isInitialized, toToken]);

  useEffect(() => {
    if (!tokens || fromToken) {
      return;
    } else {
      // setFromToken(tokens[nativeAddress]);
      dispatch({ type: 'set-token-from', payload: tokens[nativeAddress] });
    }
  }, [tokens, fromToken]);

  const ButtonState = useMemo(() => {
    if (chainId) {
      // @ts-ignore
      if (chainIds[chainId] !== chain)
        return { isActive: false, text: `Switch to ${chain}` };
    }
    if (!fromAmount) return { isActive: false, text: 'Enter an amount' };
    if (fromAmount && currentTrade) return { isActive: true, text: 'Swap' };
    return { isActive: false, text: 'Select tokens' };
  }, [fromAmount, currentTrade, chainId, chain]);

  useEffect(() => {
    if (fromToken && toToken && fromAmount)
      dispatch({
        type: 'set-currentTrade',
        payload: { fromToken, toToken, fromAmount, chain },
      });
  }, [toToken, fromToken, fromAmount, chain]);

  useEffect(() => {
    if (currentTrade)
      getQuote(currentTrade).then((quote) =>
        dispatch({ type: 'set-quote', payload: quote })
      );
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
                onChange={(e) =>
                  dispatch({
                    type: 'set-amount-from',
                    payload: parseFloat(e.target.value),
                  })
                }
                value={fromAmount}
              />
              <Typography variant="body16">{fromTokenAmountUsd}</Typography>
            </div>
            {fromToken ? (
              <ButtonStyled
                onClick={() =>
                  dispatch({ type: 'set-modal-from', payload: true })
                }
              >
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
                onClick={() =>
                  dispatch({ type: 'set-modal-from', payload: true })
                }
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
              <ButtonStyled
                onClick={() =>
                  dispatch({ type: 'set-modal-to', payload: true })
                }
              >
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
                onClick={() =>
                  dispatch({ type: 'set-modal-to', payload: true })
                }
              />
            )}
          </ButtonInputDivStyled>
        </CardStyled>
        {quote && (
          <div>
            <TypographyStyled variant="subtitle2">
              Estimated Gas:{' '}
              <Typography variant="subtitle2">{quote?.estimatedGas}</Typography>
            </TypographyStyled>
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
          text={ButtonState.text}
          onClick={() => trySwap(currentTrade)}
          disabled={!ButtonState.isActive}
          theme="colored"
        />
      </DivStyled>

      <Modal
        isVisible={isFromModalActive}
        onCancel={() => dispatch({ type: 'set-modal-from', payload: false })}
        onCloseButtonPressed={() =>
          dispatch({ type: 'set-modal-from', payload: false })
        }
        onOk={() => dispatch({ type: 'set-modal-from', payload: false })}
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
            onClose={() => dispatch({ type: 'set-modal-from', payload: false })}
            setToken={dispatch}
            tokenList={tokens}
            type="from"
          />
        </div>
      </Modal>
      <Modal
        isVisible={isToModalActive}
        onCancel={() => dispatch({ type: 'set-modal-to', payload: false })}
        onCloseButtonPressed={() =>
          dispatch({ type: 'set-modal-to', payload: false })
        }
        onOk={() => dispatch({ type: 'set-modal-to', payload: false })}
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
            onClose={() => dispatch({ type: 'set-modal-to', payload: false })}
            setToken={dispatch}
            type="to"
            tokenList={tokens}
          />
        </div>
      </Modal>
    </>
  );
};

export default Dex;

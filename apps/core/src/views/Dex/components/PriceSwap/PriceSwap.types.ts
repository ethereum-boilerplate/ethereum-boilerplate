// import { Token } from '../InchModal/InchModal.types';

export interface PriceSwapProps {
  quote: {
    fromTokenAmount: number;
    toTokenAmount: number;
    statusCode?: number;
    message?: string;
  };
  tokenPricesUSD: { [key: string]: number };
  fromToken: Token | undefined;
  toToken: Token | undefined;
}

interface Token {
  address: string;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
  tags: string[];
}

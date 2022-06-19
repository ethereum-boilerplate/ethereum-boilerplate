import { Token } from '../InchModal/InchModal.types';

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

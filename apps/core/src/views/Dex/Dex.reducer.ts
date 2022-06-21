export interface Token {
  address: string;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
  tags: string[];
}

interface initialState {
  isFromModalActive: boolean;
  isToModalActive: boolean;
  fromToken: Token | null;
  toToken: Token | null;
  fromAmount: number | null;
  quote: any | null;
  currentTrade: any;
  tokenPricesUSD: { [key: string]: number } | null;
}

export const initialState: initialState = {
  isFromModalActive: false,
  isToModalActive: false,
  fromToken: null,
  toToken: null,
  fromAmount: null,
  quote: null,
  currentTrade: null,
  tokenPricesUSD: null,
};

export const reducer = (state: initialState, action: any) => {
  switch (action.type) {
    case 'set-modal-from':
      return { ...state, isFromModalActive: action.payload };
    case 'set-modal-to':
      return { ...state, isToModalActive: action.payload };
    case 'set-token-from':
      return { ...state, fromToken: action.payload };
    case 'set-token-to':
      return { ...state, toToken: action.payload };
    case 'set-amount-from':
      return { ...state, fromAmount: action.payload };
    case 'set-quote':
      return { ...state, quote: action.payload };
    case 'set-currentTrade':
      return { ...state, currentTrade: action.payload };
    case 'set-tokenPriceUSD': {
      return { ...state, tokenPricesUSD: action.payload };
    }

    default:
      return state;
  }
};

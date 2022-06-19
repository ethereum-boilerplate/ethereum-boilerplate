export interface DexProps {
  chain: string;
  customTokens?: any;
}

export interface Token {
  address: string;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
  tags: string[];
}

export interface InchModalProps {
  open: boolean;
  onClose: () => void;
  setToken: (token: Token) => void;
  tokenList: any;
}

export interface Token {
  address: string;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
  tags: string[];
}

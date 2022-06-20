export interface InchModalProps {
  open: boolean;
  onClose: () => void;
  setToken: (token: any) => void;
  tokenList: any;
  type: string;
}

export interface Token {
  address: string;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
  tags: string[];
}

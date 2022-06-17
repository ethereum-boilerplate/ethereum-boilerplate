export interface InchModalProps {
  open: boolean;
  onClose: () => void;
  setToken: (token: string) => void;
  tokenList: any;
}

import { InchModalProps } from './InchModal.types';
import styles from './InchModal.styles';

const { DivStyled, DivContainerStyled } = styles;

export const InchModal: React.FC<InchModalProps> = ({
  open,
  onClose,
  setToken,
  tokenList,
  type,
}) => {
  if (!open) return null;
  const dispatchType = (type: string) => {
    switch (type) {
      case 'from':
        return 'set-token-from';
      case 'to':
        return 'set-token-to';
      default:
        return;
    }
  };
  return (
    <DivContainerStyled>
      {!tokenList
        ? null
        : Object.keys(tokenList).map((token, index) => (
            <DivStyled
              key={index}
              onClick={() => {
                // setToken(tokenList[token]);
                setToken({
                  type: dispatchType(type),
                  payload: tokenList[token],
                });
                onClose();
              }}
            >
              <img
                style={{ width: '32px', height: '32px', marginRight: '20px' }}
                src={tokenList[token].logoURI}
                alt="noLogo"
              />
              <h4>{tokenList[token].name}</h4>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '14px',
                }}
              >
                {tokenList[token].symbol}
              </span>
            </DivStyled>
          ))}
    </DivContainerStyled>
  );
};

export default InchModal;

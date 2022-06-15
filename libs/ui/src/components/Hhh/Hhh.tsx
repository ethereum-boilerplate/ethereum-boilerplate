import { HhhProps } from "./Hhh.types"
import { Input, Typography } from 'web3uikit';
import styles from './Hhh.styles';

const { DivStyled } = styles;

export const Hhh: React.FC<HhhProps> = ({ 
  isDisabled = false,
  value = '',
  onChange,
}) => {
  return (
    <DivStyled 
      className="Hhh"
      data-testid="test-Hhh"
      isDisabled={isDisabled}
    >
      <Typography variant="h3">Wow here we are</Typography>
      <Input
        disabled={isDisabled}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={value}
        type="text"
      />
    </DivStyled>
  );

};

export default Hhh;

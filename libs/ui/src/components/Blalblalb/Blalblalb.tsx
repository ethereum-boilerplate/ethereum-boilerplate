import { BlalblalbProps } from "./Blalblalb.types"
import { Input, Typography } from 'web3uikit';
import styles from './Blalblalb.styles';

const { DivStyled } = styles;

export const Blalblalb: React.FC<BlalblalbProps> = ({ 
  isDisabled = false,
  value = '',
  onChange,
}) => {
  return (
    <DivStyled 
      className="Blalblalb"
      data-testid="test-Blalblalb"
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

export default Blalblalb;

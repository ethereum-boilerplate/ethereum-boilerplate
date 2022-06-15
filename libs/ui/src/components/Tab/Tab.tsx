import { TabProps } from "./Tab.types"
import { Input, Typography } from 'web3uikit';
import styles from './Tab.styles';

const { DivStyled } = styles;

export const Tab: React.FC<TabProps> = ({ 
  isDisabled = false,
  value = '',
  onChange,
}) => {
  return (
    <DivStyled 
      className="Tab"
      data-testid="test-Tab"
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

export default Tab;

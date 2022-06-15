import { TabProps } from "./Tab.types"
import styles from './Tab.styles';

const { DivStyled } = styles;

export const Tab: React.FC<TabProps> = () => {
  return (
    <DivStyled 
      className="Tab"
      data-testid="test-Tab"
    >
    </DivStyled>
  );

};

export default Tab;

import { HeaderProps } from './Header.types';
import styles from './Header.styles';
import { Tabs } from '../Tabs';
import { Logo } from 'web3uikit';
const { DivStyled } = styles;

export const Header: React.FC<HeaderProps> = ({ tabs }) => {
  return (
    <DivStyled data-testid="test-Header">
      <Logo size="regular" theme="icon" />
      <Tabs tabs={tabs} />
    </DivStyled>
  );
};

export default Header;

import { HeaderProps } from './Header.types';
import styles from './Header.styles';
import { Tabs } from '../Tabs';
import { ConnectButton } from 'web3uikit';

const { DivStyled } = styles;

export const Header: React.FC<HeaderProps> = () => {
  const tabs = [
    { name: 'DEx', to: '/Dex' },
    { name: 'Account', to: '/Account' },
    { name: 'NFT', to: '/NFT' },
  ];
  return (
    <DivStyled className="Header" data-testid="test-Header">
      <Tabs tabs={tabs} />
      <ConnectButton />
    </DivStyled>
  );
};

export default Header;

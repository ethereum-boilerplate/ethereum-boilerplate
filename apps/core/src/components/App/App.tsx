import { Header } from '@ethereum-boilerplate-v2/ui';
import { Dex } from '../../views/Dex';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
export const App: React.FC = () => {
  const tabs = [
    { name: 'Home', to: '/' },
    { name: 'Dex', to: '/dex' },
    { name: 'NFT', to: '/nft' },
    { name: 'Contract', to: '/contract' },
  ];
  return <Dex chain="eth" />;
};

export default App;

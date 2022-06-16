import { Tabs } from '@ethereum-boilerplate-v2/ui';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Tabs
        tabs={[
          { name: 'Home', to: '/home' },
          { name: 'DEx', to: '/dex' },
          { name: 'NFT', to: '/nft' },
          { name: 'Contract', to: '/contract' },
        ]}
      />
    </BrowserRouter>
  );
};

export default App;

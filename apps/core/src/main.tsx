import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { MoralisProvider } from 'react-moralis';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <MoralisProvider
      initializeOnMount
      appId={process.env['REACT_APP_MORALIS_APP_ID'] ?? ''}
      serverUrl={process.env['REACT_APP_MORALIS_SERVER_URL'] ?? ''}
    >
      <App />
    </MoralisProvider>
  </StrictMode>
);

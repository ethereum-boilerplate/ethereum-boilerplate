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
      appId="wEnpaKqVW3OoUhOmYEYOriKnZ3aLPP7UTHijjZAe"
      serverUrl="https://btkbtlqnyh7f.usemoralis.com:2053/server"
    >
      <App />
    </MoralisProvider>
  </StrictMode>
);

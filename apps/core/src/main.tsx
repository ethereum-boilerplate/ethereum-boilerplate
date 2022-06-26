import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { MoralisProvider } from 'react-moralis';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <MoralisProvider initializeOnMount appId="" serverUrl="">
      <App />
    </MoralisProvider>
  </StrictMode>
);

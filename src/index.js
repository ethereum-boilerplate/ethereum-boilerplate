import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import QuickStart from "components/QuickStart";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Application = () => {
  if (APP_ID && SERVER_URL)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <MoralisDappProvider>
          <App />
        </MoralisDappProvider>
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <QuickStart />
      </div>
    );
  }
};

/** Get your free Moralis Account https://moralis.io/ */
ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);

import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";
import InchModal from "./components/InchModal";
import useInch from "./hooks/useInch";
import styles from "./styles";

const chainIds = {
  "0x1": "eth",
  "0x38": "bsc",
  "0x89": "polygon",
};

const getChainById = (id) => chainIds[id];

function InchDex({ chain }) {
  const { trySwap, getQuote, getSupportedTokens, tokenList } = useInch();
  const { Moralis } = useMoralis();
  const { chainId } = useMoralisDapp();
  const [isFromModalActive, setFromModalActive] = useState(false);
  const [isToModalActive, setToModalActive] = useState(false);
  const [fromToken, setFromToken] = useState();
  const [toToken, setToToken] = useState();
  const [fromAmount, setFromAmount] = useState("");
  const [quote, setQuote] = useState();
  const [currentTrade, setCurrentTrade] = useState();

  const onChangeHandler = (event) => setFromAmount(event.target.value);

  useEffect(() => {
    if (fromToken && toToken && fromAmount)
      setCurrentTrade({ fromToken, toToken, fromAmount, chain });
  }, [toToken, fromToken, fromAmount, chain]);

  useEffect(() => {
    if (currentTrade) getQuote(currentTrade).then((quote) => setQuote(quote));
  }, [currentTrade]);

  if (getChainById(chainId) !== chain)
    return <>Switch to supported {chain} network or edit InchDex settings </>;

  return (
    <div style={styles.card}>
      <div>
        <div style={styles.header}>
          <h4>Exchange</h4>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="14" cy="6" r="2"></circle>
            <line x1="4" y1="6" x2="12" y2="6"></line>
            <line x1="16" y1="6" x2="20" y2="6"></line>
            <circle cx="8" cy="12" r="2"></circle>
            <line x1="4" y1="12" x2="6" y2="12"></line>
            <line x1="10" y1="12" x2="20" y2="12"></line>
            <circle cx="17" cy="18" r="2"></circle>
            <line x1="4" y1="18" x2="15" y2="18"></line>
            <line x1="19" y1="18" x2="20" y2="18"></line>
          </svg> */}
        </div>
        <div>
          <div style={styles.swapbox}>
            <div style={styles.swapboxHeader}>From</div>
            <div style={styles.swapboxSelect}>
              <input
                style={styles.swapboxInput}
                placeholder="0.00"
                type="number"
                onChange={onChangeHandler}
                value={fromAmount}
              />
              <div
                style={styles.selectedRow}
                onClick={() => {
                  setFromModalActive(true);
                  getSupportedTokens(chain);
                }}
              >
                <img
                  className="token_image"
                  style={styles.selectedToken}
                  src={fromToken?.logoURI}
                  alt={fromToken?.symbol}
                />
                <span>{fromToken?.symbol}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1={12} y1={5} x2={12} y2={19}></line>
              <line x1={16} y1={15} x2={12} y2={19}></line>
              <line x1={8} y1={15} x2={12} y2={19}></line>
            </svg>
          </div>
          <div style={styles.swapbox}>
            <div style={styles.swapboxHeader}>To</div>
            <div style={styles.swapboxSelect}>
              <input
                style={styles.swapboxInput}
                type="number"
                placeholder="0.00"
                value={
                  quote
                    ? Moralis.Units.FromWei(quote?.toTokenAmount, quote?.toToken.decimals).toFixed(
                        6
                      )
                    : ""
                }
                readOnly
              />
              <div
                style={styles.selectedRow}
                onClick={() => {
                  setToModalActive(true);
                  getSupportedTokens(chain);
                }}
              >
                <img style={styles.selectedToken} src={toToken?.logoURI} alt={toToken?.symbol} />
                <span>{toToken?.symbol}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            Estimated Gas: <span id="gas_estimate">{quote?.estimatedGas}</span>
          </div>
          <button
            style={styles.swapButton}
            onClick={() => trySwap(currentTrade)}
            disabled={!currentTrade}
          >
            Swap
          </button>
        </div>
      </div>
      <InchModal
        open={isFromModalActive}
        onClose={() => setFromModalActive(false)}
        setToken={setFromToken}
        tokenList={tokenList}
      />
      <InchModal
        open={isToModalActive}
        onClose={() => setToModalActive(false)}
        setToken={setToToken}
        tokenList={tokenList}
      />
    </div>
  );
}

export default InchDex;

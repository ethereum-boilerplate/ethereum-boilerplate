import React from "react";
import { useState } from "react/cjs/react.development";
import useCoin from "./hooks/useCoin";

const styles = {
  coin: {
    padding: "0 7px",
    height: "42px",
    gap: "5px",
    width: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "16px",
    color: "#041836",
    whiteSpace: "nowrap",
  },
};

function CoinPrice(props) {
  const { coinPrice } = useCoin(props);
  const [isUSDMode, setIsUSDMode] = useState(true);

  const toggleDisplayStyle = () => setIsUSDMode(isUSDMode ? false : true);

  const noLogoCoin = "https://etherscan.io/images/main/empty-token.png";

  return (
    <div style={styles.coin}>
      <img src={props.image || noLogoCoin} alt="logo" style={{ height: props?.size || "35px" }} />
      <span
        style={{ cursor: "pointer" }}
        onClick={toggleDisplayStyle}
        title={`Show in ${isUSDMode ? "ETH" : "USD"}`}
      >
        {coinPrice && (isUSDMode ? coinPrice.usdPrice : coinPrice.nativePrice)}
      </span>
    </div>
  );
}
export default CoinPrice;

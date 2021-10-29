import React, {useState} from "react";
import useTokenPrice from "../hooks/useTokenPrice";

const styles = {
  token: {
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
function TokenPrice(props) {
  const { tokenPrice } = useTokenPrice(props);
  const [isUSDMode, setIsUSDMode] = useState(true);

  const toggleDisplayStyle = () => setIsUSDMode(isUSDMode ? false : true);

  const noLogoToken = "https://etherscan.io/images/main/empty-token.png";

  return ( 
    <div style={styles.token}>
      <img src={props.image || noLogoToken} alt="logo" style={{ height: props?.size || "35px" }} />
      <span
        style={{ cursor: "pointer" }}
        onClick={toggleDisplayStyle}
        title={`Show in ${isUSDMode ? "ETH" : "USD"}`}
      >
        {tokenPrice && (isUSDMode ? tokenPrice.usdPrice : tokenPrice.nativePrice)}
      </span>
    </div>
  );
}
export default TokenPrice;

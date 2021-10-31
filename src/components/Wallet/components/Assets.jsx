import { useERC20Balance } from "hooks/useERC20Balance";
import { useMoralis } from "react-moralis";

const styles = {
  content: {
    width: "100%",
    maxHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "auto",
  },
  row: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "15px 20px",
    borderTop: "1px solid #e7eaf3",
  },
  right: {
    textAlign: "left",
    marginLeft: "15px",
  },
  text: { display: "inline", marginRight: "10px" },
};
export default function Assets() {
  const { assets } = useERC20Balance();
  const { Moralis } = useMoralis();

  if (!assets) return <>No Data</>;

  return (
    <div style={styles.content}>
      {assets.map((item, key) => (
        <div className="row" key={key} style={styles.row}>
          <div>
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.symbol}
                style={{
                  maxWidth: "35px",
                  maxHeight: "35px",
                  borderRadius: "15px",
                }}
              />
            ) : (
              <img
                src="https://etherscan.io/images/main/empty-token.png"
                alt=""
                style={{
                  maxWidth: "35px",
                  maxHeight: "35px",
                  borderRadius: "15px",
                }}
              />
            )}
          </div>
          <div style={styles.right}>
            <h4 style={styles.text}>{item.symbol}</h4>
            <h4 style={styles.text}>
              {parseFloat(Moralis.Units.FromWei(item.balance, item.decimals).toFixed(6))}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

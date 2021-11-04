import { useERC20Balance } from "hooks/useERC20Balance";
import { useMoralis } from "react-moralis";
import { Image, Select } from "antd";

export default function TokenSelector({ setToken }) {
  const { assets } = useERC20Balance();
  const { Moralis } = useMoralis();

  function handleChange(value) {
    const token = assets.find((token) => token.token_address === value);
    setToken(token);
  }

  return (
    <Select onChange={handleChange} size="large" style={{ width: "100%" }}>
      {assets &&
        assets.map((item, key) => (
          <Select.Option value={item["token_address"]} key={item["token_address"]}>
            <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "8px" }}>
              <Image
                src={item.logo || "https://etherscan.io/images/main/empty-token.png"}
                alt="nologo"
                width="24px"
                height="24px"
                preview={false}
                style={{ borderRadius: "15px" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
                <p>{item.symbol}</p>
                <p style={{ alignSelf: "right" }}>
                  ({parseFloat(Moralis.Units.FromWei(item.balance, item.decimals).toFixed(6))})
                </p>
              </div>
            </div>
          </Select.Option>
        ))}
    </Select>
  );
}

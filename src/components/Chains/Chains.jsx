import { useEffect, useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo } from "./Logos";
import { useChain, useMoralis } from "react-moralis";
import { HeaderRightBordersStyle } from "../../GlobalStyles";

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    height: "42px",
    fontWeight: "500",
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    padding: "0 7px",
    background: "none",
    color: "#E7EAF3",
  },
  button: HeaderRightBordersStyle,
};

const supportedChains = new Set(
  [
    "0x1", // Ethereum,
    "0x4", // Rinkeby,
    "0x3", // Ropsten,
    "0xa869", // Avalanche Testnet
    "0x13881", // Mumbai
  ]);

export const chainIdToNameAndLogo = new Map([
  ["0x4", ["Rinkeby Testnet", <ETHLogo />]],
  ["0xa86a", ["Avalanche", <AvaxLogo />]],
  ["0xa869", ["Avalanche Fuji Testnet", <AvaxLogo />]],
])

const menuItems = [
  // TODO make it multichain in the future
  // {
  //   key: "0x1",
  //   value: "Ethereum",
  //   icon: <ETHLogo />,
  // },
  // {
  //   key: "0x539",
  //   value: "Local Chain",
  //   icon: <ETHLogo />,
  // },
  // {
  //   key: "0x3",
  //   value: "Ropsten Testnet",
  //   icon: <ETHLogo />,
  // },
  // {
  //   key: "0x4",
  //   value: "Rinkeby Testnet",
  //   icon: <ETHLogo />,
  // },
  // {
  //   key: "0x2a",
  //   value: "Kovan Testnet",
  //   icon: <ETHLogo />,
  // },
  // {
  //   key: "0x5",
  //   value: "Goerli Testnet",
  //   icon: <ETHLogo />,
  // },
  // {
  //   key: "0x38",
  //   value: "Binance",
  //   icon: <BSCLogo />,
  // },
  // {
  //   key: "0x61",
  //   value: "Smart Chain Testnet",
  //   icon: <BSCLogo />,
  // },
  // {
  //   key: "0x89",
  //   value: "Polygon",
  //   icon: <PolygonLogo />,
  // },
  // {
  //   key: "0x13881",
  //   value: "Mumbai",
  //   icon: <PolygonLogo />,
  // },
  // {
  //   key: "0xa86a",
  //   value: "Avalanche",
  //   icon: <AvaxLogo />,
  // },
  {
    key: "0xa869",
    value: "Avalanche Testnet",
    icon: <AvaxLogo />,
  },
];

function Chains() {
  const { switchNetwork, chainId, chain } = useChain();
  const { isAuthenticated } = useMoralis();
  const [selected, setSelected] = useState({});

  console.log("Chains.jsx, chain", chain);
  console.log("Chains.jsx, chainId", chainId);

  useEffect(() => {
    if (!chainId) return null;
    const newSelected = menuItems.find((item) => item.key === chainId);
    setSelected(newSelected);
    console.log("current chainId: ", chainId);
  }, [chainId]);

  const handleMenuClick = (e) => {
    console.log("switch to: ", e.key);
    switchNetwork(e.key);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      style={HeaderRightBordersStyle}
    >
      {menuItems
        .filter(item => supportedChains.has(item.key))
        .map((item) => (
          <Menu.Item key={item.key} icon={item.icon} style={styles.item}>
            <span style={{ marginLeft: "5px" }}>{item.value}</span>
          </Menu.Item>
        ))}
    </Menu>
  );

  if (!chainId || !isAuthenticated) return null;
  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button key={selected?.key} icon={selected?.icon} style={{ ...styles.button, ...styles.item }}>
          <span style={{ marginLeft: "5px" }}>{selected?.value}</span>
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}

export default Chains;

import React, { useEffect, useState } from "react";
import useChain from "hooks/useChain";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo } from "./Logos";

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    height: "42px",
    fontWeight: "500",
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    padding: "0 10px",
  },
  button: {
    border: "2px solid rgb(231, 234, 243)",
    borderRadius: "12px",
  },
};

function Chains(props) {
  const { switchNetwork } = useChain();
  const { chainId: chain } = useMoralisDapp();
  const [chainId, setChainId] = useState();

  const [selected, setSelected] = useState({
    key: "0x89",
    value: "Polygon",
    icon: <PolygonLogo />,
  });

  useEffect(() => setChainId(chain), [chain]);

  const handleMenuClick = (e) => {
    console.log(e.key);
    const newSelected = menuItems.find((item) => item.key === e.key);
    switchNetwork(e.key).then(() => setSelected(newSelected));
  };

  // const menu = (
  //   <Menu onClick={handleMenuClick}>
  //     <Menu.Item key="Avalanche" icon={<AvaxLogo />}>
  //       Avalanche
  //     </Menu.Item>
  //     <Menu.Item key="Binance" icon={<BSCLogo />}>
  //       Binance
  //     </Menu.Item>
  //     <Menu.Item key="Ethereum" icon={<ETHLogo />}>
  //       Ethereum
  //     </Menu.Item>
  //     <Menu.Item key="Polygon" icon={<PolygonLogo />}>
  //       Polygon
  //     </Menu.Item>
  //   </Menu>
  // );

  const menuItems = [
    {
      key: "0xa86a",
      value: "Avalanche",
      icon: <AvaxLogo />,
    },
    {
      key: "0x38",
      value: "Binance",
      icon: <BSCLogo />,
    },
    {
      key: "0x1",
      value: "Ethereum",
      icon: <ETHLogo />,
    },
    {
      key: "0x89",
      value: "Polygon",
      icon: <PolygonLogo />,
    },
  ];

  const menu = (
    <Menu onClick={handleMenuClick}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon} style={styles.item}>
          <span style={{ marginLeft: "5px" }}>{item.value}</span>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      {/* {props?.avalanche && (
        <Avalanche onClick={() => switchNetwork("0xa86a")} activeChain={chainId === "0xa86a"} />
      )}
      {props?.polygon && (
        <Polygon onClick={() => switchNetwork("0x89")} activeChain={chainId === "0x89"} />
      )}
      {props?.bsc && (
        <Binance onClick={() => switchNetwork("0x38")} activeChain={chainId === "0x38"} />
      )}
      {props?.eth && (
        <Ethereum onClick={() => switchNetwork("0x1")} activeChain={chainId === "0x1"} />
      )} */}
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button
          key={selected.key}
          icon={selected.icon}
          style={{ ...styles.button, ...styles.item }}
        >
          <span style={{ marginLeft: "5px" }}>{selected.value}</span>
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}

export default Chains;

import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "700",
        width: "100%",
        justifyContent: "right",
        background: "none",
        padding: "0",
      }}
      selectedKeys={[pathname]}
    >
      <Menu.Item key="/avatars">
        <NavLink to="/avatars">Your GymBuddies</NavLink>
      </Menu.Item>
      <Menu.Item key="/mint">
        <NavLink to="/mint">Mint</NavLink>
      </Menu.Item>
      <Menu.Item key="/marketplace" id="marketplace-many-item">
        <NavLink to="/marketplace">Marketplace</NavLink>
      </Menu.Item>
      <Menu.Item key="/rewards">
        <NavLink to="/rewards">Rewards</NavLink>
      </Menu.Item>
      <Menu.Item
        onClick={() =>
          window.open(
            "https://docs.metagymland.com/",
            "_blank"
          )
        }
      >Whitepaper
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;

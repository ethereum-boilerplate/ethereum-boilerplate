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
        fontWeight: "400",
        width: "100%",
        justifyContent: "right",
      }}
      selectedKeys={[pathname]}
    >
      <Menu.Item key="/avatars">
        <NavLink to="/avatars">👤&nbsp;&nbsp;Your (MGL) NFTs</NavLink>
      </Menu.Item>
      <Menu.Item key="/marketplace" id="marketplace-many-item">
        <NavLink to="/marketplace">🛒&nbsp;&nbsp;Marketplace</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;

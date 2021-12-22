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
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      selectedKeys={[pathname]}
    >
      <Menu.Item key="/avatars">
        <NavLink to="/avatars">🖼{" "}Your MGL NFTs</NavLink>
      </Menu.Item>
      <Menu.Item key="/marketplace">
        <NavLink to="/marketplace">💹 marketplace</NavLink>
      </Menu.Item>
      <Menu.Item key="/contract">
        <NavLink to="/contract">📄 Contract(to delete)</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;

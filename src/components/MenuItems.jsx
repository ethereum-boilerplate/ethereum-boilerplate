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
        fontSize: "20px",
        fontWeight: "700",
        width: "100%",
        justifyContent: "left",
        marginLeft: "-15px",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item style={{ padding: "0 8px" }} key="/">
        <NavLink to="/">Unlockable</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;

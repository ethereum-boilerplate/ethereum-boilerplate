import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      className="nav-bar"
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/quickstart">
        <NavLink className="nav-link" to="/quickstart">🚀 Quick Start</NavLink>
      </Menu.Item>
      <Menu.Item key="/createtasks">
        <NavLink className="nav-link"  to="/createtasks">🎗 Create Tasks</NavLink>
      </Menu.Item>
      <Menu.Item key="/dotasks">
        <NavLink className="nav-link"  to="/dotasks">🛠 Do Tasks</NavLink>
      </Menu.Item>
      <Menu.Item key="/wallet">
        <NavLink className="nav-link"  to="/wallet">👛 Wallet</NavLink>
      </Menu.Item>
      <Menu.Item key="/1inch">
        <NavLink className="nav-link"  to="/1inch">🏦 Bonds</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;

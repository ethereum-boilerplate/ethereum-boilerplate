import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
// import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <MenuItems />
          <div style={styles.headerRight}>
            <Chains />
            <TokenPrice
              address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
              size="40px"
            />
            <NativeBalance />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/quickstart">
              <QuickStart isServerInfo={isServerInfo} />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/1inch">
              <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="1">
                  <DEX chain="bsc" />
                </Tabs.TabPane>
                {/* <Tabs.TabPane tab={<span>Ethereum</span>} key="2">
                  <DEX chain="eth" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                  <DEX chain="polygon" />
                </Tabs.TabPane> */}
              </Tabs>
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/onramp">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/">
              <Redirect to="/1inch" />
            </Route>
            <Route path="/ethereum-boilerplate">
              <Redirect to="/1inch" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
          ⭐️ Please star this{" "}
          <a href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/" target="_blank" rel="noopener noreferrer">
            boilerplate
          </a>
          , every star makes us very happy!
        </Text>

        <Text style={{ display: "block" }}>
          🙋 You have questions? Ask them on the {""}
          <a target="_blank" rel="noopener noreferrer" href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29">
            Moralis forum
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          📖 Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
          >
            Moralis
          </a>
        </Text>
      </Footer> */}
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <svg width="60" height="38" viewBox="0 0 766 536" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.82" d="M403.008 421.394C513.465 421.394 603.008 331.851 603.008 221.394C603.008 110.937 513.465 21.3938 403.008 21.3938C292.551 21.3938 203.008 110.937 203.008 221.394C203.008 331.851 292.551 421.394 403.008 421.394Z" fill="url(#paint0_linear_4_406)"/>
<path opacity="0.72" d="M736.507 378.642C736.507 414.858 722.12 449.591 696.511 475.2C670.902 500.809 636.169 515.196 599.953 515.196C575.259 515.26 551.022 508.538 529.89 495.764L303.419 498.495L471.486 334.314C482.383 304.266 503.475 278.993 531.089 262.896C558.702 246.8 591.087 240.899 622.603 246.223C654.119 251.546 682.77 267.756 703.564 292.03C724.358 316.303 735.979 347.102 736.402 379.062L736.507 378.642Z" fill="url(#paint1_linear_4_406)"/>
<path opacity="0.84" d="M211.614 522.549C314.529 522.549 397.959 439.12 397.959 336.205C397.959 233.289 314.529 149.86 211.614 149.86C108.699 149.86 25.2695 233.289 25.2695 336.205C25.2695 439.12 108.699 522.549 211.614 522.549Z" fill="url(#paint2_linear_4_406)"/>
<path d="M582.203 510.889C598.493 513.83 615.178 513.83 631.468 510.889C665.328 504.89 695.766 486.56 716.904 459.436C738.042 432.312 748.381 398.319 745.927 364.019C743.472 329.719 728.397 297.544 703.612 273.707C678.827 249.87 646.09 236.06 611.72 234.944H606.783C578.431 234.879 550.744 243.533 527.476 259.734V259.734C515.163 268.436 504.343 279.079 495.438 291.246" stroke="white" stroke-width="38" stroke-miterlimit="10"/>
<path d="M611.719 234.944C611.719 230.953 611.719 226.961 611.719 222.969C611.716 209.068 610.308 195.202 607.518 181.583C598.422 137.616 575.068 97.8808 541.08 68.544C507.092 39.2073 464.372 21.9096 419.548 19.3356C374.724 16.7616 330.303 29.0551 293.181 54.3083C256.058 79.5616 228.309 116.362 214.24 158.999" stroke="white" stroke-width="38" stroke-miterlimit="10"/>
<path d="M360.98 421.393C359.614 421.393 358.249 420.763 356.988 420.448" stroke="white" stroke-width="52.521" stroke-miterlimit="10"/>
<path d="M332.624 218.873C308.301 191.284 276.08 171.848 240.332 163.201C204.584 154.555 167.041 157.117 132.799 170.54C98.5575 183.963 69.275 207.596 48.9264 238.233C28.5778 268.87 18.1486 305.026 19.0544 341.793C19.9601 378.561 32.157 414.16 53.9895 443.757C75.822 473.355 106.233 495.518 141.094 507.239C175.955 518.959 213.579 519.67 248.857 509.273C284.136 498.877 315.362 477.877 338.296 449.125" stroke="white" stroke-width="38" stroke-miterlimit="10"/>
<path d="M243.545 512.045H238.503H264.344H577.684H595.436" stroke="white" stroke-width="38" stroke-miterlimit="10"/>
<path d="M276.21 510.889L307.513 479.272L341.021 445.448L392.282 393.663L424.005 361.415L424.32 361.205L503.206 281.583" stroke="white" stroke-width="38" stroke-miterlimit="10"/>
<defs>
<linearGradient id="paint0_linear_4_406" x1="203.008" y1="221.394" x2="603.008" y2="221.394" gradientUnits="userSpaceOnUse">
<stop stop-color="#002FD4"/>
<stop offset="1" stop-color="#00E0FF"/>
</linearGradient>
<linearGradient id="paint1_linear_4_406" x1="303.734" y1="378.537" x2="736.507" y2="378.537" gradientUnits="userSpaceOnUse">
<stop stop-color="#61DDFA"/>
<stop offset="1" stop-color="#AD23C0"/>
</linearGradient>
<linearGradient id="paint2_linear_4_406" x1="25.2695" y1="336.205" x2="397.959" y2="336.205" gradientUnits="userSpaceOnUse">
<stop offset="0.04" stop-color="#3B23C0"/>
<stop offset="0.17" stop-color="#251A9D"/>
<stop offset="0.31" stop-color="#10107B"/>
<stop offset="0.39" stop-color="#080D6E"/>
<stop offset="0.48" stop-color="#0A1171"/>
<stop offset="0.56" stop-color="#0F1D79"/>
<stop offset="0.65" stop-color="#173186"/>
<stop offset="0.73" stop-color="#234D99"/>
<stop offset="0.81" stop-color="#3370B1"/>
<stop offset="0.9" stop-color="#459CCF"/>
<stop offset="0.98" stop-color="#5BCFF1"/>
<stop offset="1" stop-color="#61DDFA"/>
</linearGradient>
</defs>
</svg>

  </div>
);

export default App;

import { Header } from "antd/lib/layout/layout";
import { ConnectButton } from "web3uikit";
import { Chains } from "./Chains";
import MenuItems from "./MenuItems";
import MoralisLogo from "./MoralisLogo";
import TokenPrice from "./TokenPrice";

const styles = {
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
const GlobalHeader = () => {
  return (
    //@ts-ignore
    <Header style={styles.header}>
      <MoralisLogo />
      <MenuItems />
      <div style={styles.headerRight}>
        <Chains />
        <TokenPrice
          address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
          chain="eth"
          image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
          size="40px"
        />
        <ConnectButton />
        {/* <Account /> */}
      </div>
    </Header>
  );
};

export default GlobalHeader;

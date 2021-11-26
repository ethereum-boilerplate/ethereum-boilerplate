import Blockies from "react-blockies";
import { useMoralis } from "react-moralis";

/**
 * Shows a blockie image for the provided wallet address
 * @param {*} props
 * @returns <Blockies> JSX Elemenet
 */

function Blockie(props) {
  const { account } = useMoralis();
  if ((!props.address && !props.currentWallet) || !account) return null;

  return (
    <Blockies
      seed={props.currentWallet ? account.toLowerCase() : props.address.toLowerCase()}
      className="identicon"
      {...props}
    />
  );
}

export default Blockie;

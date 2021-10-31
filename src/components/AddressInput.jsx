import React, { useEffect, useState } from "react";
import { getEllipsisTxt } from "../helpers/formatters";
import Blockie from "./Blockie";
import "./addressinput.css";

const styles = {
  avatar: {
    width: "30px",
    alignItems: "center",
    display: "flex",
  },
};

function AddressInput(props) {
  const [address, setAddress] = useState();
  const [validatedAddress, setValidatedAddress] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => props.onChange(address), [address]);

  const Cross = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="3.5"
      stroke="#E33132"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setValidatedAddress("")}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <div className={`inputContainer ${validatedAddress && "validated"}`}>
      <div style={styles.avatar}>{address ? <Blockie address={address.toLowerCase()} size={7} /> : <WalletSVG />}</div>
      <input
        className={`addressinput ${validatedAddress && "inputvalidated"}`}
        autoFocus={props.autoFocus}
        onChange={(e) => {
          const text = e.target.value;
          setAddress(text);
          if (text.length === 42) setValidatedAddress(getEllipsisTxt(text, 10));
        }}
        placeholder={props.placeholder ? props.placeholder : "Public address 0x"}
        maxLength="42"
        disabled={validatedAddress}
        value={validatedAddress || address || ""}
      />
      {validatedAddress && <Cross />}
    </div>
  );
}

export default AddressInput;

const WalletSVG = () => (
  <svg width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 5V2C14 1.73478 13.8946 1.48043 13.7071 1.29289C13.5196 1.10536 13.2652 1 13 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3M1 3C1 3.53043 1.21071 4.03914 1.58579 4.41421C1.96086 4.78929 2.46957 5 3 5H15C15.2652 5 15.5196 5.10536 15.7071 5.29289C15.8946 5.48043 16 5.73478 16 6V9M1 3V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V13"
      stroke="#757575"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 9V13H13C12.4696 13 11.9609 12.7893 11.5858 12.4142C11.2107 12.0391 11 11.5304 11 11C11 10.4696 11.2107 9.96086 11.5858 9.58579C11.9609 9.21071 12.4696 9 13 9H17Z"
      stroke="#757575"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

import { useCallback, useEffect, useState } from "react";
import { getEllipsisTxt } from "../helpers/formatters";
import Blockie from "./Blockie";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function AddressInput(props) {
  const [address, setAddress] = useState("");
  const [validatedAddress, setValidatedAddress] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (validatedAddress) props.onChange(address);
  }, [address]);

  const updateAddress = useCallback((address) => {
    if (address.length === 42) setValidatedAddress(getEllipsisTxt(address, 10));
    setAddress(address);
  }, []);

  const Cross = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#E33132"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setValidatedAddress("")}
      style={{ cursor: "pointer" }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <Input
      size="large"
      placeholder={props.placeholder ? props.placeholder : "Public address 0x"}
      prefix={
        address ? (
          <Blockie address={address.toLowerCase()} size={8} scale={3} />
        ) : (
          <SearchOutlined />
        )
      }
      suffix={validatedAddress && <Cross />}
      autoFocus={props.autoFocus}
      value={validatedAddress || address}
      onChange={(e) => {
        updateAddress(e.target.value);
      }}
      disabled={validatedAddress}
      style={
        validatedAddress
          ? { ...props?.style, border: "1px solid rgb(33, 191, 150)" }
          : { ...props?.style }
      }
    />
  );
}

export default AddressInput;

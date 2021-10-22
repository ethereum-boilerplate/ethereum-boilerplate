import React, { useState, useMemo } from "react";

function Binance({ onClick, activeChain }) {
  const [isActive, setActive] = useState();

  const style = {
    cursor: "pointer",
    opacity: isActive ? "1" : "0.5",
    transition: "all 0.2s",
    filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
  };

  useMemo(() => setActive(activeChain), [activeChain]);

  function toggleState() {
    !activeChain && isActive ? setActive(false) : setActive(true);
  }

  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => toggleState()}
      onMouseLeave={() => toggleState()}
      style={style}
      onClick={onClick}
    >
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V20C30 25.5228 25.5228 30 20 30H10C4.47715 30 0 25.5228 0 20V10Z"
        fill="#F3BA2F"
      />
      <path
        d="M11.3588 13.5038L15 9.8625L18.6431 13.5056L20.7619 11.3869L15 5.625L9.24 11.385L11.3588 13.5038ZM5.625 15L7.74375 12.8812L9.8625 15L7.74375 17.1188L5.625 15ZM11.3588 16.4963L15 20.1375L18.6431 16.4944L20.7619 18.6122L15 24.375L9.24 18.615L9.23719 18.6122L11.3588 16.4963ZM20.1375 15L22.2563 12.8812L24.375 15L22.2563 17.1188L20.1375 15ZM17.1488 14.9981H17.1506V15L15 17.1506L12.8522 15.0037L12.8484 15L12.8522 14.9972L13.2281 14.6203L13.4109 14.4375L15 12.8494L17.1497 14.9991L17.1488 14.9981Z"
        fill="white"
      />
    </svg>
  );
}

export default Binance;

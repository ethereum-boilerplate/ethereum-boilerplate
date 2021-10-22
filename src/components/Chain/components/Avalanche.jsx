import React, { useMemo, useState } from "react";

export default function Avalanche({ onClick, activeChain }) {
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
      onClick={onClick}
      onMouseEnter={() => toggleState()}
      onMouseLeave={() => toggleState()}
      style={style}
    >
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V20C30 25.5228 25.5228 30 20 30H10C4.47715 30 0 25.5228 0 20V10Z"
        fill="#E84142"
      />
      <path
        d="M20.2914 15.3898C20.8111 14.4921 21.6497 14.4921 22.1693 15.3898L25.4056 21.0709C25.9252 21.9685 25.5 22.7008 24.4607 22.7008H17.941C16.9134 22.7008 16.4882 21.9685 16.9961 21.0709L20.2914 15.3898ZM14.0315 4.45277C14.5512 3.55513 15.378 3.55513 15.8977 4.45277L16.6182 5.75198L18.3189 8.74017C18.7323 9.59056 18.7323 10.5945 18.3189 11.4449L12.6142 21.3307C12.0945 22.1339 11.2323 22.6417 10.2756 22.7008H5.53942C4.50005 22.7008 4.07485 21.9803 4.59454 21.0709L14.0315 4.45277Z"
        fill="white"
      />
    </svg>
  );
}

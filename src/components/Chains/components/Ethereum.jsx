import React, { useMemo, useState } from "react";

function Ethereum({ onClick, activeChain }) {
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
        fill="#627EEA"
      />
      <path d="M15.0294 3.75V12.0656L22.0578 15.2062L15.0294 3.75Z" fill="white" fillOpacity="0.602" />
      <path d="M15.0294 3.75L8 15.2062L15.0294 12.0656V3.75Z" fill="white" />
      <path d="M15.0294 20.595V26.2453L22.0625 16.515L15.0294 20.595Z" fill="white" fillOpacity="0.602" />
      <path d="M15.0294 26.2453V20.594L8 16.515L15.0294 26.2453Z" fill="white" />
      <path d="M15.0294 19.2872L22.0578 15.2063L15.0294 12.0675V19.2872Z" fill="white" fillOpacity="0.2" />
      <path d="M8 15.2063L15.0294 19.2872V12.0675L8 15.2063Z" fill="white" fillOpacity="0.602" />
    </svg>
  );
}

export default Ethereum;

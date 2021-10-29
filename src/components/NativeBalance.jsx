import React from "react";
import useNativeBalance from "hooks/useNativeBalance";

function NativeBalance(props) {
  const { nativeBalance } = useNativeBalance(props);

  return <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>{nativeBalance}</div>;
}

export default NativeBalance;

// src/components/templates/hooks/useWalletStatus.ts

import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

/**
 * useWalletStatus
 * A simple custom hook to check if a wallet is connected
 * and return the current wallet address & chain.
 */

export const useWalletStatus = () => {
  const { isAuthenticated, user, chainId, logout } = useMoralis();
  const [status, setStatus] = useState({
    connected: false,
    address: "",
    chain: "",
  });

  useEffect(() => {
    if (isAuthenticated && user) {
      setStatus({
        connected: true,
        address: user.get("ethAddress"),
        chain: chainId || "unknown",
      });
    } else {
      setStatus({ connected: false, address: "", chain: "" });
    }
  }, [isAuthenticated, user, chainId]);

  return { ...status, logout };
};

import React from "react";

function InchModal({ open, onClose, setToken, tokenList }) {
  if (!open) return null;

  return (
    <div style={{ overflow: "auto", height: "500px" }}>
      {!tokenList
        ? null
        : Object.keys(tokenList).map((token, index) => (
            <div
              style={{
                padding: "5px 20px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setToken(tokenList[token]);
                onClose();
              }}
              key={index}
            >
              <img
                style={{
                  height: "32px",
                  width: "32px",
                  marginRight: "20px",
                }}
                src={tokenList[token].logoURI}
                alt="noLogo"
              />
              <div>
                <h4>{tokenList[token].name}</h4>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "14px",
                  }}
                >
                  {tokenList[token].symbol}
                </span>
              </div>
            </div>
          ))}
    </div>
  );
}

export default InchModal;

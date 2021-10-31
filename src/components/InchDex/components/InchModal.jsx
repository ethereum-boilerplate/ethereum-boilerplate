import React from "react";

const styles = {
  modal: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "20px",
  },
  modalContent: {
    maxWidth: "430px",
    width: "100%",
    height: "500px",
    marginTop: "-300px",
    padding: "20px",
    background: "#FFFFFF",
    borderRadius: "20px",
  },
  tokens: {
    height: "90%",
    overflow: "auto",
  },
  tokenRow: {
    padding: "5px 0",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  logo: {
    height: "32px",
    width: "32px",
    marginRight: "10px",
  },
};

function InchModal({ open, onClose, setToken, tokenList }) {
  if (!open) return null;

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <div style={styles.modalHeader}>
          <h4>Select a Token</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={onClose}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1={18} y1={6} x2={6} y2={18}/>
            <line x1={6} y1={6} x2={18} y2={18}/>
          </svg>
        </div>
        <div style={styles.tokens}>
          {!tokenList
            ? null
            : Object.keys(tokenList).map((token, index) => (
                <div
                  style={styles.tokenRow}
                  onClick={() => {
                    setToken(tokenList[token]);
                    onClose();
                  }}
                  key={index}
                >
                  <img style={styles.logo} src={tokenList[token].logoURI} alt="noLogo"/>
                  <div>
                    <h4>{tokenList[token].name}</h4>
                    <span style={{ fontWeight: "600", fontSize: "15px", lineHeight: "14px" }}>
                      {tokenList[token].symbol}
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default InchModal;

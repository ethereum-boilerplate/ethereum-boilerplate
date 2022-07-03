import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { SnapChatLogo } from "../Logos";
import QRCode from "qrcode";

const SnapArBtn = ({ snapARLink }) => {
  const [snapQRCodeDataURI, setSnapQRCodeDataURI] = useState(null);

  useEffect(() => {
    QRCode.toDataURL(snapARLink).then((data) => {
      setSnapQRCodeDataURI(data);
    });
  });
  return (
    <div
      className="snap-btn"
      style={{
        backgroundColor: "#F6F403",
        color: "black",
        zIndex: "2",
        margin: "1rem",
        padding: "0.5rem",
        borderRadius: "50%",
        border: "1px solid black",
        height: "42px",
        width: "42px",
        // grid props
        gridArea: "overlap",
        alignSelf: "start",
        justifySelf: "end",
      }}
      onClick={() => {
        Modal.info({
          title: "Try me in Snapchat",
          centered: true,
          bodyStyle: {
            textAlign: "center",
          },
          okText: "close",
          icon: <SnapChatLogo />,
          content: (
            <div
              style={{
                textAlign: "center",
              }}
            >
              <div>
                <p>Grab your phone</p>
                <p>and scan the QR code</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={snapQRCodeDataURI} />
              </div>
            </div>
          ),
        });
      }}
    >
      <SnapChatLogo width={24} height={24} />
    </div>
  );
};

export default SnapArBtn;

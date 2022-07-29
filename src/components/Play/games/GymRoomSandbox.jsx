import React from "react";
import { useParams } from "react-router";
import GymRoom from "./GymRoom";

const GymRoomSandbox = () => {
  const { miniGameId } = useParams();

  const avatar = {
    uri: "https://gateway.pinata.cloud/ipfs/QmPUQSULAxGXK321PMJKE5Qcs3xHvRuxDzDUjoB8g9cmzD/gbpx10.png",
    tokenAddress: "123",
    name: "sandbox",
    tokenId: "1",
    snapARLink: "",
  };
  return <GymRoom avatar={avatar} useWebcam={false} miniGameId={miniGameId} />;
};

export default GymRoomSandbox;

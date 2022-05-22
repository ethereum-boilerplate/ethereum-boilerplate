import React from "react";
import GymRoom from "./GymRoom";

const GymRoomSandbox = () => {
    const avatar = {
        uri: 'https://gateway.pinata.cloud/ipfs/QmPUQSULAxGXK321PMJKE5Qcs3xHvRuxDzDUjoB8g9cmzD/gbpx10.png',
        tokenAddress: '123',
        tokenId: '1',
    };
    return (<GymRoom avatar={avatar} useWebcam={false} />);
};

export default GymRoomSandbox;

import React from "react";
import GymRoom from "./GymRoom";

const GymRoomSandbox = () => {
    const avatar = {
        uri: 'https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/images/0.png',
        // uri: 'https://gateway.pinata.cloud/ipfs/QmXtFd8Fy1qnYchuY2bKLzcbfDrVRjoQCuWJzSLXio74yp',
        tokenAddress: '123',
        tokenId: '1',
    };
    return (<GymRoom avatar={avatar} useWebcam={false} />);
};

export default GymRoomSandbox;

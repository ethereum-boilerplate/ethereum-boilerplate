import React, { useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
    const [deviceId, setDeviceId] = useState({});
    const [devices, setDevices] = useState([]);

    const handleDevices = useCallback(
        mediaDevices =>
            setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
        [setDevices]
    );

    useEffect(
        () => {
            navigator.mediaDevices.enumerateDevices().then(handleDevices);
        },
        [handleDevices]
    );

    return (
        <>
            {devices.map((device, key) => (
                <div>
                    <Webcam 
                        audio={false} 
                        videoConstraints={{ deviceId: device.deviceId }} />
                    {device.label || `Device ${key + 1}`}
                </div>

            ))}
        </>
    );
};

export default WebcamCapture;

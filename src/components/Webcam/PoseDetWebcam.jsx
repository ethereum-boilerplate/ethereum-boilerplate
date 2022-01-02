import React, { useContext, useRef, useEffect } from "react";
import { WebcamCtx } from "index";
import Webcam from "react-webcam";

const PoseDetWebcam = ({ styleProps }) => {
    const { webcamId, setWebcamId, webcamRef } = useContext(WebcamCtx);
    const canvasRef = useRef(null);

    const startPredictions = async () => {
        requestAnimationFrame(() => {
            startPredictions();
        })
        detectPose();
    };

    console.log('PoseDetWebcam webcamRef', webcamRef);
    console.log('PoseDetWebcam webcamId', webcamId);

    const detectPose = async () => {
        if (webCamAndCanvasAreInit()) {
            doPredictionsCanvasSetup();
            // Get Video Properties
            const video = webcamRef.current.video;
            // Draw mesh
            const ctx = canvasRef.current.getContext("2d");
            // testing
            ctx.fillStyle = '#04AA6D';
            ctx.strokeStyle = '#04AA6D';
            ctx.beginPath();
            ctx.arc(50, 50, 20, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
        }
    };

    const webCamAndCanvasAreInit = () => {
        return webcamRef &&
            webcamRef.current &&
            webcamRef.current.video.readyState === 4 &&
            canvasRef &&
            canvasRef.current
    };

    const doPredictionsCanvasSetup = () => {
        // Get Video Properties
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
    };

    useEffect(() => {
        startPredictions();
    }, []);

    const getVideoConstraints = () => {
        if (webcamId) {
            return { deviceId: webcamId }
        }
        return {}
    }

    return (
        <>
            <Webcam
                audio={false}
                videoConstraints={getVideoConstraints()}
                mirrored={true}
                className={"webcam"}
                ref={webcamRef}
                muted={true}
                style={{
                    objectFit: "cover",
                    borderRadius: "1rem",
                    position: "absolute",
                    height: "auto",
                    zindex: 9,
                    // params
                    ...styleProps,
                }}
            />
            <canvas
                ref={canvasRef}
                className={"webcam-canvas"}
                style={{
                    objectFit: "cover",
                    borderRadius: "1rem",
                    position: "absolute",
                    height: "auto",
                    zindex: 8,
                    // params
                    ...styleProps,
                }}
            />
        </>
    );
}

export default PoseDetWebcam;

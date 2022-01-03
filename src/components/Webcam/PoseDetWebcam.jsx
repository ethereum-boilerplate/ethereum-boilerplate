import React, { useContext, useRef, useEffect } from "react";
import { WebcamCtx, PoseDetectorCtx } from "index";
import Webcam from "react-webcam";
import { drawPose } from "./pose-drawing";

const PoseDetWebcam = ({ sizeProps, styleProps }) => {
    const { webcamId, setWebcamId } = useContext(WebcamCtx);
    const { poseDetector } = useContext(PoseDetectorCtx);
    const canvasRef = useRef(null);
    const webcamRef = useRef(null);

    console.log('poseDetector PoseDetWebcam', poseDetector);
    console.log('PoseDetWebcam webcamRef', webcamRef);
    console.log('PoseDetWebcam webcamId', webcamId);

    useEffect(async () => {
        poseDetector.onResults(onResults);
        startPredictions()
    }, []);

    let then = Date.now();
    const fps = 15;
    const interval = 1000 / fps;
    let noCamError = true;
    let camErrCnt = 0;
    const startPredictions = async () => {
        requestAnimationFrame(() => {
            startPredictions();
        })
        if (webCamAndCanvasAreInit()) {
            const videoElement = webcamRef.current.video;
            const now = Date.now();
            const delta = now - then;
            if (delta > interval) {
                then = now - (delta % interval);
                try {
                    if (noCamError) await poseDetector
                        .send({ image: videoElement });
                } catch (error) {
                    poseDetector.reset();
                    noCamError = false;
                    camErrCnt += 1;
                    const wait = 300 * camErrCnt
                    console.error(
                        `error catched, resetting the AI 
                        and waiting for ${wait / 1000} seconds`,
                        error);
                    setTimeout(() => {
                        noCamError = true
                    }, wait)
                }
            }
        }
    };

    // HERE: handle game logic events driven by poses
    const onResults = (results) => {
        if (webCamAndCanvasAreInit()) {
            doPredictionsCanvasSetup();
            drawPose(canvasRef, results);
        }
    };

    const webCamAndCanvasAreInit = () => {
        return webcamRef &&
            webcamRef.current &&
            webcamRef.current.video.readyState === 4 &&
            (webcamRef.current.video.webkitDecodedFrameCount
                || webcamRef.current.video.mozDecodedFrames) &&
            canvasRef &&
            canvasRef.current;
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

    const getVideoConstraints = () => {
        if (webcamId) {
            return { deviceId: webcamId }
        }
        return {}
    }

    return (
        <div style={{
            display: "grid",
            gridTemplateRows: "1fr",
            gridTemplateColumns: "1fr",
            gridTemplateAreas: "overlap",
        }}>
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
                    zIndex: 8,
                    // params
                    ...sizeProps,
                    ...styleProps,
                    // grid props
                    gridArea: "overlap",
                    alignSelf: "center",
                    justifySelf: "center",
                }}
            />
            <canvas
                ref={canvasRef}
                className={"webcam-canvas"}
                style={{
                    objectFit: "cover",
                    borderRadius: "1rem",
                    zIndex: 9,
                    // params
                    ...sizeProps,
                    // grid props
                    gridArea: "overlap",
                    alignSelf: "center",
                    justifySelf: "center",
                }}
            />
        </div>
    );
}

export default PoseDetWebcam;

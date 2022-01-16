import React, { useContext, useRef, useEffect } from "react";
import { WebcamCtx, PoseDetectorCtx } from "index";
import Webcam from "react-webcam";
import { drawPose } from "./pose-drawing";
import { updateGPoseState } from "../gpose/functions";

const PoseDetWebcam = ({ sizeProps, styleProps }) => {
    const { webcamId, setWebcamId } = useContext(WebcamCtx);
    const { poseDetector } = useContext(PoseDetectorCtx);
    const canvasRef = useRef(null);
    const webcamRef = useRef(null);

    console.log('poseDetector PoseDetWebcam', poseDetector);
    console.log('PoseDetWebcam webcamRef', webcamRef);
    console.log('PoseDetWebcam webcamId', webcamId);

    useEffect(() => {
        poseDetector.onResults(onResults);
        startPredictions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getDeviceId = () => {
        return webcamRef?.current?.stream?.getVideoTracks()?.[0]?.getSettings()?.deviceId;
    }

    useEffect(() => {
        const checkCurWebcamId = setInterval(() => {
            if (!webcamId) {
                const deviceId = getDeviceId();
                console.log(
                    'webcamId is empty', webcamId);
                console.log('inferring current webcamId', deviceId);
                if (deviceId) {
                    setWebcamId(deviceId);
                    console.log('clear checkCurWebcamId', checkCurWebcamId);
                    clearInterval(checkCurWebcamId);
                }
            }
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    const wait = 500 * camErrCnt
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
            const { poseLandmarks } = results
            if (poseLandmarks) {
                const curPose = updateGPoseState(results);
                // console.log('curPose', curPose);
            }
        }
    };

    const webCamAndCanvasAreInit = () => {
        return webcamRef &&
            webcamRef.current &&
            webcamRef.current.video.readyState === 4 &&
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
        // if it is the same device do not force re-render
        if (webcamId && webcamId === getDeviceId()) {
            return {}
        } else if (webcamId) {
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
                id={"pose-det-webcam"}
                ref={webcamRef}
                muted={true}
                style={{
                    objectFit: "cover",
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
                id={"pose-det-webcam-canvas"}
                style={{
                    objectFit: "cover",
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

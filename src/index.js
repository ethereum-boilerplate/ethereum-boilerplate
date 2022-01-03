import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import Home from "components/Home";
import { Pose } from '@mediapipe/pose';
import * as mpPose from '@mediapipe/pose';

// Moralis vals
const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

// Avatar global state
export const AvatarCtx = React.createContext();
const AvatarCtxProvider = ({ children }) => {
  const [avatar, setAvatar] = useState(null);
  return (
    <AvatarCtx.Provider value={[avatar, setAvatar]}>
      {children}
    </AvatarCtx.Provider>
  );
};

// Webcam global state
export const WebcamCtx = React.createContext();
const WebcamCtxProvider = ({ children }) => {
  const [webcamId, setWebcamId] = useState(null);

  return (
    <WebcamCtx.Provider value={{
      webcamId,
      setWebcamId,
    }}>
      {children}
    </WebcamCtx.Provider>
  );
};

// PoseDetector global var
export const PoseDetectorCtx = React.createContext();
const PoseDetectorCtxProvider = ({ children }) => {
  const poseDetector = new Pose({
    locateFile: (file) => {
      const path = `https://cdn.jsdelivr.net/npm/@mediapipe/pose@${mpPose.VERSION}/${file}`
      console.log('mediapipe path', path);
      return path;
    }
  });
  const ConfidenceScore = 0.65;
  poseDetector.setOptions({
    modelComplexity: 0,
    smoothLandmarks: true,
    selfieMode: true,
    //   enableSegmentation: true,
    // smoothSegmentation: true,
    minDetectionConfidence: ConfidenceScore,
    minTrackingConfidence: ConfidenceScore,
  });

  useEffect(() => {
    console.log('poseDetector loaded', poseDetector);
    poseDetector.initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PoseDetectorCtx.Provider value={{ poseDetector }}>
      {children}
    </PoseDetectorCtx.Provider>
  );
};

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  //Validate
  if (!APP_ID || !SERVER_URL) throw new Error("Missing Moralis Application ID or Server URL. Make sure to set your .env file.");
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <PoseDetectorCtxProvider >
          <AvatarCtxProvider >
            <WebcamCtxProvider >
              <App isServerInfo />
            </WebcamCtxProvider>
          </AvatarCtxProvider>
        </PoseDetectorCtxProvider>
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Home />
      </div>
    );
  }
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById("root")
);

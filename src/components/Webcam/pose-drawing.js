import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import {
    POSE_CONNECTIONS, POSE_LANDMARKS_LEFT,
    POSE_LANDMARKS_RIGHT, POSE_LANDMARKS_NEUTRAL
} from '@mediapipe/pose';
import { ConfidenceScore } from "../../AIConfig";
import * as gstate from "../gpose/state";
import * as gpose from "../gpose/pose";


const IDLE_POSE_LANDMARKS_COLOR = "#FF0000";
const IDLE_POSE_LINES_COLOR = "#00FF00";
const VisibilityMin = ConfidenceScore;
const ACTIVE_COLOR = "#F96F0A";
const ACTIVE_LINE_WIDTH = 8;
const IDLE_CONN_LINE_WIDTH = 4;
const LANDMARKS_STYLE = { color: 'black', fillColor: 'white', }

const drawLine = (p1, p2, color, ctx, width, height, lineWidth) => {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(p1.x * width, p1.y * height)
    ctx.lineTo(p2.x, p2.y * height);
    ctx.stroke();
};

export const drawPose = (canvasRef, results) => {
    // Get Canvas
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const canvasCtx = canvasRef.current.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Only overwrite existing pixels.
    canvasCtx.globalCompositeOperation = 'source-in';
    canvasCtx.fillStyle = '#00FF00';
    canvasCtx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    // Only overwrite missing pixels.
    canvasCtx.globalCompositeOperation = 'destination-atop';

    // Draw testing circle
    // canvasCtx.fillStyle = '#04AA6D';
    // canvasCtx.strokeStyle = '#04AA6D';
    // canvasCtx.beginPath();
    // canvasCtx.arc(50, 50, 20, 0, 2 * Math.PI);
    // canvasCtx.stroke();
    // canvasCtx.fill();

    // Draw Pose mesh
    canvasCtx.globalCompositeOperation = 'source-over';
    if (results.poseLandmarks) {
        const CurPose = gstate.getPose();
        // console.log('results', results);
        const nose = results.poseLandmarks[0];

        if (gstate.isNonIdle()) {
            canvasCtx.beginPath(); 
            // canvasCtx.fillStyle = ACTIVE_COLOR;
            canvasCtx.strokeStyle = ACTIVE_COLOR;
            canvasCtx.lineWidth = ACTIVE_LINE_WIDTH * 2;
            canvasCtx.strokeRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }

        // this is in selfie mode
        // so left is right
        // right is left
        const n2rEndColor = CurPose === gpose.HTL ? ACTIVE_COLOR : "#1990FF";
        const n2rlineWidth = CurPose === gpose.HTL ? ACTIVE_LINE_WIDTH : 3;
        drawLine(nose, { x: 0, y: nose.y }, n2rEndColor, canvasCtx,
            width, height, n2rlineWidth);
        // path from nose to left end
        const n2lEndColor = CurPose === gpose.HTR ? ACTIVE_COLOR : "#20BF96";
        const n2llineWidth = CurPose === gpose.HTR ? ACTIVE_LINE_WIDTH : 3;
        drawLine(nose, { x: canvasRef?.current.width, y: nose.y }, n2lEndColor, canvasCtx,
            width, height, n2llineWidth);

        // connectors
        drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,
            {
                color: IDLE_POSE_LINES_COLOR,
                lineWidth: IDLE_CONN_LINE_WIDTH,
                visibilityMin: VisibilityMin,
            });


        // active connectors left
        if (CurPose === gpose.LA_UP || CurPose === gpose.BA_UP) {
            drawConnectors(canvasCtx, Object.values({
                LEFT_SHOULDER: 12,
                LEFT_ELBOW: 14,
                LEFT_WRIST: 16,
            }).map(index => results.poseLandmarks[index]), POSE_CONNECTIONS,
                {
                    color: ACTIVE_COLOR,
                    lineWidth: ACTIVE_LINE_WIDTH,
                    visibilityMin: VisibilityMin,
                });
        }

        // active connectors right
        if (CurPose === gpose.RA_UP || CurPose === gpose.BA_UP) {
            drawConnectors(canvasCtx, Object.values({
                LEFT_SHOULDER: 11,
                LEFT_ELBOW: 13,
                LEFT_WRIST: 15,
            }).map(index => results.poseLandmarks[index]), POSE_CONNECTIONS,
                {
                    color: ACTIVE_COLOR,
                    lineWidth: ACTIVE_LINE_WIDTH,
                    visibilityMin: VisibilityMin,
                });
        }

        // landmarks
        // left
        drawLandmarks(canvasCtx, Object.values(POSE_LANDMARKS_LEFT)
            .map(index => results.poseLandmarks[index]),
            {
                ...LANDMARKS_STYLE,
                lineWidth: 1,
                visibilityMin: VisibilityMin,
            });
        // right
        drawLandmarks(canvasCtx, Object.values(POSE_LANDMARKS_RIGHT)
            .map(index => results.poseLandmarks[index]),
            {
                ...LANDMARKS_STYLE,
                lineWidth: 1,
                visibilityMin: VisibilityMin,
            });
        // neutral
        drawLandmarks(canvasCtx, Object.values(POSE_LANDMARKS_NEUTRAL)
            .map(index => results.poseLandmarks[index]),
            {
                ...LANDMARKS_STYLE,
                lineWidth: 1,
                visibilityMin: VisibilityMin,
            });

        const le = {
            // LEFT_EYE_INNER: 1, 
            LEFT_EYE: 2,
            // LEFT_EYE_OUTER: 3
        }
        const mainEyeColor = "#2450F7";
        const mainEyeLineWidth = 12;
        drawLandmarks(canvasCtx, Object.values(le)
            .map(index => results.poseLandmarks[index]),
            {
                color: mainEyeColor, fillColor: mainEyeColor,
                lineWidth: mainEyeLineWidth,
                visibilityMin: VisibilityMin,
            });

        const re = {
            // RIGHT_EYE_INNER: 4, 
            RIGHT_EYE: 5,
            // RIGHT_EYE_OUTER: 6
        }
        drawLandmarks(canvasCtx, Object.values(re)
            .map(index => results.poseLandmarks[index]),
            {
                color: mainEyeColor, fillColor: mainEyeColor,
                lineWidth: mainEyeLineWidth,
                visibilityMin: VisibilityMin,
            });
    }
    canvasCtx.restore();
};

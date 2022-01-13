import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import {
    POSE_CONNECTIONS, POSE_LANDMARKS_LEFT,
    POSE_LANDMARKS_RIGHT, POSE_LANDMARKS_NEUTRAL
} from '@mediapipe/pose';
import { ConfidenceScore } from "../../AIConfig";
import * as gstate from "../gpose/state";
import * as gpose from "../gpose/pose";


// const IDLE_POSE_LANDMARKS_COLOR = "#FF0000";
const IDLE_POSE_LINES_COLOR = "#00FF00";
const VisibilityMin = ConfidenceScore;
const ACTIVE_COLOR = "#F96F0A";
const ACTIVE_LINE_WIDTH = 8;
const IDLE_CONN_LINE_WIDTH = 4;
const LANDMARKS_STYLE = { color: 'black', fillColor: 'white', }
const NOSE_LINE_WIDTH_IDLE = 3;

const roundedRect = (ctx, x, y, width, height) => {
    const radius = 35
    ctx.beginPath();
    ctx.lineWidth = ACTIVE_LINE_WIDTH;
    ctx.strokeStyle = ACTIVE_COLOR;
    ctx.lineJoin = "round";
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
}

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

    // Draw Pose mesh
    canvasCtx.globalCompositeOperation = 'source-over';
    if (results.poseLandmarks) {
        const nose = results.poseLandmarks[0];
        drawLine(nose, { x: 0, y: nose.y }, "#1990FF", canvasCtx,
            width, height, NOSE_LINE_WIDTH_IDLE);
        // path from nose to left end
        drawLine(nose, { x: canvasRef?.current.width, y: nose.y },
            "#20BF96", canvasCtx,
            width, height, NOSE_LINE_WIDTH_IDLE);

        // connectors
        drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,
            {
                color: IDLE_POSE_LINES_COLOR,
                lineWidth: IDLE_CONN_LINE_WIDTH,
                visibilityMin: VisibilityMin,
            });

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

        // active state
        const CurPose = gstate.getPose();
        if (gstate.isNonIdle()) {
            roundedRect(canvasCtx,
                0 + (ACTIVE_LINE_WIDTH / 2),
                0 + (ACTIVE_LINE_WIDTH / 2),
                canvasRef.current.width - ACTIVE_LINE_WIDTH,
                canvasRef.current.height - ACTIVE_LINE_WIDTH,
            );
        }
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
        // this is in selfie mode
        // so left is right
        // right is left
        if (CurPose === gpose.HTL) {
            drawLine(nose, { x: 0, y: nose.y }, ACTIVE_COLOR, canvasCtx,
                width, height, ACTIVE_LINE_WIDTH);
        }
        if (CurPose === gpose.HTR) {
            drawLine(nose, { x: canvasRef?.current.width, y: nose.y }, ACTIVE_COLOR,
                canvasCtx, width, height, ACTIVE_LINE_WIDTH);
        }
    }
    canvasCtx.restore();
};

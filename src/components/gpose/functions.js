import { ConfidenceScore } from "../../AIConfig";
import { getAngleBetween } from './angles';
import * as pose from "./pose";
import * as gstate from "./state";

const mapResults = (results) => {
    return mapMediaPipeResults(results);
};

const mapMediaPipeResults = (results) => {
    // poseLandmarks has 33 landmarks
    const { poseLandmarks } = results
    // const poseLandmarks = results.poseLandmarks;
    console.log('poseLandmarks', poseLandmarks, results);
    const posLandXY = poseLandmarks.map(pl => {
        return {
            x: pl.x,
            y: pl.y,
            score: pl.visibility,
        }
    });
    // remeber this is in selfie mode
    // everything is flipped due to selfie mode
    // see: https://google.github.io/mediapipe/solutions/pose#pose-landmark-model-blazepose-ghum-3d
    return {
        nose: posLandXY[0],
        leftShoulder: posLandXY[12], // normally 11 (flipped)
        rightShoulder: posLandXY[11], // normally 12 (flipped)
        leftElbow: posLandXY[14], // normally 13 (flipped)
        rightElbow: posLandXY[13], // normally 14 (flipped)
        leftEye: posLandXY[6], // 4, 5, 6 (inner, eye, outer) (flipped)
        rightEye: posLandXY[3], // 1, 2, 3 (inner, eye, outer) (flipped)
    };
};

// HYPER_PARAMS
// TODO more investigation why this works
// angle between elbow and shoulder
// that will indicate that the arm is raised up
const e2sActivateAngle = 52;
const scoreThreshold = ConfidenceScore;
// vertical distance between left eye and nose 
// that will indicate that head is tilted
const e2nYDistanceActivation = 0.01;

const resToGPose = (results) => {
    const parsedRes = mapResults(results);

    const { nose, leftEye, rightEye,
        leftShoulder, rightShoulder,
        leftElbow, rightElbow } = parsedRes;

    // TODO investigate more how this logic works in terms of flipping
    const leftElbowToSholder = getAngleBetween(leftElbow, leftShoulder) * -1
    const rightElbowToSholder = getAngleBetween(rightShoulder, rightElbow)

    const bothArmsUp = (leftElbowToSholder > e2sActivateAngle)
        && (rightElbowToSholder > e2sActivateAngle)
    const moveUp = (leftElbowToSholder > e2sActivateAngle
        && rightElbowToSholder < e2sActivateAngle) && !bothArmsUp
    const moveDown = (rightElbowToSholder > e2sActivateAngle
        && leftElbowToSholder < e2sActivateAngle) && !bothArmsUp

    const noseToLeftEyeYdistance = nose.y - leftEye.y
    const noseToRightEyeYdistance = nose.y - rightEye.y

    // vissibility TODO treshold settings here may be unecessary
    const noseVissible = nose.score > scoreThreshold
    const lEVissible = leftEye.score > scoreThreshold
    const REVissible = rightEye.score > scoreThreshold

    console.log('leftElbow.y', leftElbow.y);
    console.log('rightElbow.y', rightElbow.y);
    console.log('noseToLeftEyeYdistance', noseToLeftEyeYdistance);
    console.log('noseToRightEyeYdistance', noseToRightEyeYdistance);

    if (noseVissible && lEVissible
        && noseToLeftEyeYdistance < e2nYDistanceActivation) {
        return pose.HTL;
    } else if (noseVissible && REVissible
        && noseToRightEyeYdistance < e2nYDistanceActivation) {
        return pose.HTR;
    } else if (bothArmsUp) {
        return pose.BA_UP;
    } else if (moveUp) {
        return pose.LA_UP;
    } else if (moveDown) {
        return pose.RA_UP;
    } else {
        return pose.IDLE;
    }
};

const updateGPoseState = (results) => { // accepts pose prediction results
    const curState = resToGPose(results);
    gstate.setPose(curState);
    return curState;
}

export { updateGPoseState };

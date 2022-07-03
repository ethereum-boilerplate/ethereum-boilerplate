import { IDLE } from "./pose";

let _currentPose = IDLE;

const setPose = (_m) => {
  _currentPose = _m;
};

const getPose = () => {
  return _currentPose;
};

const isNonIdle = () => {
  return _currentPose !== IDLE;
};

export { getPose, isNonIdle, setPose };

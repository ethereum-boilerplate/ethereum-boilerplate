let _currentWebcamBG = "";

const setWebcamBG = (_bg) => {
  _currentWebcamBG = _bg;
};

const getWebcamBG = () => {
  return _currentWebcamBG;
};

export { setWebcamBG, getWebcamBG };

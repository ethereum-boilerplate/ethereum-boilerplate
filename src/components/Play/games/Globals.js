let _mainRoomPlayerExitPos;

export const setMainRoomPlayerExitPos = (_x, _y) => {
  _mainRoomPlayerExitPos = {
    x: _x,
    y: _y,
  };
};

export const getMainRoomPlayerExitPos = () => {
  return _mainRoomPlayerExitPos;
};

export const playerHasExitPos = () => {
  return !!_mainRoomPlayerExitPos;
};

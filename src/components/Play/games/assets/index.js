export const GYM_ROOM_MAP = 'gym_room';
export const GYM_ROOM_TILES = 'gym_room_tiles';

// NEW
export const GYM_ROOM_TILESET_V2 = "gym_room_tileset";

export const ASTEROIDS = 'asteroids';
export const AIRPLANE = 'airplane';
export const BTC = 'bitcoin';
export const PUMP_OPEN = 'pump_open';
export const PUMP_CLOSED = 'pump_closed';
export const SAD_WOJAK = 'sad_wojak';
export const GREEN_WOJAK = 'green_wojak';

export const GYM_ROOM_BG = 'sky';


// Save all in game assets in the public folder
export const assets = [
  {
    key: GYM_ROOM_BG,
    src: `assets/images/${GYM_ROOM_BG}.png`,
    type: 'IMAGE',
  },
  {
    key: GREEN_WOJAK,
    src: `assets/images/${GREEN_WOJAK}.png`,
    type: 'IMAGE',
  },
  {
    key: SAD_WOJAK,
    src: `assets/images/${SAD_WOJAK}.png`,
    type: 'IMAGE',
  },
  {
    key: PUMP_OPEN,
    src: `assets/images/${PUMP_OPEN}.png`,
    type: 'IMAGE',
  },
  {
    key: PUMP_CLOSED,
    src: `assets/images/${PUMP_CLOSED}.png`,
    type: 'IMAGE',
  },
  {
    key: ASTEROIDS,
    src: `assets/images/${ASTEROIDS}.png`,
    type: 'IMAGE',
  },
  {
    key: AIRPLANE,
    src: `assets/images/${AIRPLANE}.png`,
    type: 'IMAGE',
  },
  {
    key: BTC,
    src: `assets/images/${BTC}.png`,
    type: 'IMAGE',
  },
  {
    key: GYM_ROOM_MAP,
    src: 'assets/tilemap_map/gym_room.json',
    type: 'TILEMAP_MAP',
  },
  {
    key: GYM_ROOM_TILESET_V2,
    src: `assets/tilemap_tiles/${GYM_ROOM_TILESET_V2}.png`,
    type: 'TILEMAP_TILES',
  },
];

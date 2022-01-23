export const FULLSCREEN = 'fullscreen';
export const BACK_ARROW = 'back_arrow';
export const CLICK = 'click';
export const GYM_ROOM_MAP = 'gym_room';
export const GYM_ROOM_TILES = 'gym_room_tiles';
export const GYM_ROOM_MAT_SKY = 'gym_room_mat_sky';
export const GYM_ROOM_MAT_SPACE = 'gym_room_mat_space';

export const GYM_ROOM_DANGEON_MAP = 'gym_land_dangeon';
export const GYM_ROOM_DANGEON_TILES = 'dangeon';
export const ASTEROIDS = 'asteroids';
export const AIRPLANE = 'airplane';
export const BTC = 'bitcoin';
export const PUMP_OPEN = 'pump_open';
export const PUMP_CLOSED = 'pump_closed';
export const SAD_WOJAK = 'sad_wojak';
export const GREEN_WOJAK = 'green_wojak';


// Save all in game assets in the public folder
export const assets = [
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
    key: BACK_ARROW,
    src: 'assets/icons/back_arrow.png',
    type: 'IMAGE',
  },
  {
    key: GYM_ROOM_MAP,
    src: 'assets/tilemap_map/gym_room.json',
    type: 'TILEMAP_MAP',
  },
  {
    key: GYM_ROOM_TILES,
    src: 'assets/tilemap_tiles/gym_room_sqrs.png',
    type: 'TILEMAP_TILES',
  },
  // {
  //   key: GYM_ROOM_DANGEON_MAP,
  //   src: 'assets/tilemap_map/gym_land_dangeon.json',
  //   type: 'TILEMAP_MAP',
  // },
  // {
  //   key: GYM_ROOM_DANGEON_TILES,
  //   src: 'assets/tilemap_tiles/dangeon.png',
  //   type: 'TILEMAP_TILES',
  // },
  {
    key: GYM_ROOM_MAT_SKY,
    src: 'assets/tilemap_tiles/mat_sky.png',
    type: 'TILEMAP_TILES',
  },
  {
    key: GYM_ROOM_MAT_SPACE,
    src: 'assets/tilemap_tiles/mat_space.png',
    type: 'TILEMAP_TILES',
  },
];

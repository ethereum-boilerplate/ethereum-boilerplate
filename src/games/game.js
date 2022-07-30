import Phaser from "phaser";
import { SpaceStretchScene } from "./minigames/SpaceStretchScene";
import { FlyFitScene } from "./minigames/FlyFitScene";
import { ChartSquats } from "./minigames/ChartSquats";
import { BootScene } from "./gym-room-boot/BootScene";
import { MatrixScene } from "./minigames/MatrixScene";
import { RushScene } from "./minigames/RushScene";
import { InvadersScene } from "./minigames/invaders/InvadersScene";

export { getGameConfig, preBoot };

const getGameConfig = ({ mainScene }) => {
  if (!mainScene) {
    throw Error("[game] mainScene param must be passed");
  }
  const [width, height] = setWidthAndHeight();
  const Scenes = [
    BootScene,
    mainScene,
    SpaceStretchScene,
    FlyFitScene,
    ChartSquats,
    MatrixScene,
    RushScene,
    InvadersScene,
  ];

  return {
    type: Phaser.AUTO,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
        // debug: "debug",
      },
    },
    scale: {
      mode: Phaser.Scale.NONE,
      width,
      height,
    },
    scene: Scenes,
    // audio: {
    //     noAudio: true
    // },
    render: {
      pixelArt: true,
    },
    fps: {
      target: 60,
    },
  };
};

const setWidthAndHeight = () => {
  let width = window.innerWidth;
  // let height = width / 1.778;
  let height = window.innerHeight;

  if (height > window.innerHeight) {
    height = window.innerHeight;
    // keeping for reference
    // width = height * 1.778;
  }
  return [width, height];
};

const preBoot = ({ game, avatar, setMinigame, pickedMiniGame, user }) => {
  game.registry.merge({
    avatar,
    setMinigame,
    pickedMiniGame,
    user,
  });
};

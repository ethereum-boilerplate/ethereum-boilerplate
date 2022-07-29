import React, { useState, useEffect, useContext } from "react";
import { useMoralis } from "react-moralis";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import { GymRoomScene } from "../../games/gym-room/GymRoomScene";
import { SpaceStretchScene } from "../../games/minigames/SpaceStretchScene";
import { FlyFitScene } from "../../games/minigames/FlyFitScene";
import { ChartSquats } from "../../games/minigames/ChartSquats";
import { BootScene } from "../../games/gym-room-boot/BootScene";
import { MatrixScene } from "../../games/minigames/MatrixScene";
import { RushScene } from "../../games/minigames/RushScene";
import { MiniGameCtx } from "index";
import PoseDetWebcam from "components/Webcam/PoseDetWebcam";
import SideMenu from "./GymRoomSideMenu";

const menuHeight = 0;

const setWidthAndHeight = () => {
  let width = window.innerWidth;
  // let height = width / 1.778;
  let height = window.innerHeight;

  if (height > window.innerHeight) {
    height = window.innerHeight;
    // keeping for reference
    // width = height * 1.778;
  }
  return [width, height - menuHeight];
};

const getConfig = (mainScene) => {
  const [width, height] = setWidthAndHeight();
  const Scenes = [
    BootScene,
    mainScene,
    SpaceStretchScene,
    FlyFitScene,
    ChartSquats,
    MatrixScene,
    RushScene,
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

const GymRoom = ({ avatar, useWebcam = true, miniGameId = null }) => {
  // run game
  const [initialised, setInitialised] = useState(true);
  const [config, setConfig] = useState();
  const { setMinigame } = useContext(MiniGameCtx);
  const { user } = useMoralis();

  const startGame = () => {
    if (miniGameId) {
      setMinigame(miniGameId);
    }
    setConfig({
      ...getConfig(GymRoomScene),
      callbacks: {
        preBoot: (game) => {
          // Makes sure the game doesnt create another game on rerender
          setInitialised(false);
          game.registry.merge({
            avatar,
            setMinigame,
            pickedMiniGame: miniGameId,
            user,
          });
        },
      },
    });
  };

  useEffect(() => {
    startGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <IonPhaser
      initialize={initialised}
      game={config}
      id="phaser-app"
      style={{
        position: "absolute",
        top: "0px",
        bottom: "0px",
        width: "100%",
        height: "100%",
        zIndex: "1",
      }}
    >
      <SideMenu />

      {useWebcam && (
        <div
          style={{
            position: "fixed",
            top: "1%",
            left: "45%",
            bottom: "0px",
          }}
        >
          <PoseDetWebcam
            sizeProps={{
              width: "220px",
              height: "auto",
              borderRadius: "14px",
            }}
            styleProps={{
              boxShadow: "0 0 10px 2px #202020",
            }}
          />
        </div>
      )}
    </IonPhaser>
  );
};

export default GymRoom;

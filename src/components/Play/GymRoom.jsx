import React, { useState, useEffect, useContext } from "react";
import { useMoralis } from "react-moralis";
import { IonPhaser } from "@ion-phaser/react";
import { GymRoomScene } from "../../games/gym-room/GymRoomScene";
import { MiniGameCtx } from "index";
import PoseDetWebcam from "components/Webcam/PoseDetWebcam";
import SideMenu from "./GymRoomSideMenu";
import { getGameConfig, preBoot } from "games/game";

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
      ...getGameConfig({ mainScene: GymRoomScene }),
      callbacks: {
        preBoot: (game) => {
          // Makes sure the game doesnt create another game on rerender
          setInitialised(false);
          preBoot({
            game,
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

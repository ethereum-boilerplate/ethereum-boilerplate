import React, { useState, useEffect, useContext } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import { GymRoomScene } from "./GymRoomScene";
import { BootScene } from "./BootScene";
import Webcam from "react-webcam";
import { WebcamCtx } from "index";


const menuHeight = 60;
// keeping for reference
const contentMargin = 40;

const setWidthAndHeight = () => {
    let width = window.innerWidth;
    let height = width / 1.778;

    if (height > window.innerHeight) {
        height = window.innerHeight;
        // keeping for reference
        // width = height * 1.778;
    }
    return [width, height - menuHeight];
}

const getConfig = (mainScene) => {
    const [width, height] = setWidthAndHeight();
    const Scenes = [BootScene, mainScene];

    return {
        type: Phaser.AUTO,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                // debug: "debug"
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
            pixelArt: true
        },
        fps: {
            target: 30,
        },
    }
}

const GymRoom = ({ avatar }) => {
    console.log('GymRoom avatar', avatar);
    // run game
    const [initialised, setInitialised] = useState(true);
    const [config, setConfig] = useState();
    const deviceId = useContext(WebcamCtx);

    const startGame = () => {
        setConfig({
            ...getConfig(GymRoomScene),
            callbacks: {
                preBoot: (game) => {
                    // Makes sure the game doesnt create another game on rerender
                    setInitialised(false);
                    console.log('Updating game registry', avatar);
                    game.registry.merge({
                        avatar,
                    });
                },
            },
        });
    };

    useEffect(() => {
        startGame();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <IonPhaser
        initialize={initialised}
        game={config}
        id="phaser-app"
        style={{
            marginTop: "-40px",
        }}
    >
        <div style={{
                position: "absolute",
                top: "1%",
                left: "45%",
            }}>
                <Webcam
                    audio={false}
                    videoConstraints={{ deviceId: deviceId }}
                    mirrored={true}
                    className={"webcam"}
                    style={{
                        objectFit: "cover",
                        borderRadius: "1rem",
                        width: "35%",
                        boxShadow: "0 0 10px 2px #202020",
                    }}
                />
            </div>
    </IonPhaser>;
};

export default GymRoom;

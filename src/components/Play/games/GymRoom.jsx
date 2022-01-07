import React, { useState, useEffect, useContext } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import { GymRoomScene } from "./GymRoomScene";
import { SpaceStretchScene } from "./SpaceStretchScene";
import { FlyFitScene } from "./FlyFitScene";
import { CosmicCardioScene } from "./CosmicCardioScene";
import { BootScene } from "./BootScene";
import { WebcamCtx } from "index";
import PoseDetWebcam from "components/Webcam/PoseDetWebcam";
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';

const menuHeight = 60;

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
    const Scenes = [BootScene, mainScene,
        SpaceStretchScene, FlyFitScene, CosmicCardioScene];

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
        plugins: {
            scene: [{
                key: 'rexUI',
                plugin: UIPlugin,
                mapping: 'rexUI'
            }]
        },
        scene: Scenes,
        // audio: {
        //     noAudio: true
        // },
        render: {
            pixelArt: true
        },
        fps: {
            target: 60,
        },
    }
}

const GymRoom = ({ avatar }) => {
    console.log('GymRoom avatar', avatar);
    // run game
    const [initialised, setInitialised] = useState(true);
    const [config, setConfig] = useState();
    const { webcamId, webcamRef } = useContext(WebcamCtx);

    console.log('GymRoom webcamRef', webcamRef);
    console.log('GymRoom webcamId', webcamId);

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

    return (<IonPhaser
        initialize={initialised}
        game={config}
        id="phaser-app"
        style={{
            marginTop: "-40px",
        }}
    >
        <div style={{
            position: "fixed",
            top: "1%",
            left: "45%",
            width: "220px",
            height: "auto",
        }} >
            <PoseDetWebcam
                sizeProps={{
                    width: "100%",
                    height: "auto",
                }}
                styleProps={{
                    boxShadow: "0 0 10px 2px #202020",
                }}
            />
        </div>
    </IonPhaser>);
};

export default GymRoom;

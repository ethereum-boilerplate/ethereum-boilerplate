import React, { useState, useEffect } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import { GymRoomScene } from "./GymRoomScene";
import { SpaceStretchScene } from "./SpaceStretchScene";
import { FlyFitScene } from "./FlyFitScene";
import { CosmicCardioScene } from "./CosmicCardioScene";

import { BootScene } from "./BootScene";
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

const GymRoomSandbox = () => {
    const avatar = {
        uri: 'https://ipfs.moralis.io:2053/ipfs/QmVF53rCjFiFSXyJd64NgeGioQG93gegdsymyMWtJLG9Ev/images/0.png',
        tokenAddress: '123',
        tokenId: '1',
    };
    console.log('GymRoomSandbox avatar', avatar);
    // run game
    const [initialised, setInitialised] = useState(true);
    const [config, setConfig] = useState();

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
    </IonPhaser>);
};

export default GymRoomSandbox;

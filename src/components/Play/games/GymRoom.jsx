import React, { useState, useEffect } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import gymFloorImg from "./assets/gym-room/gymfloor.png";
import leftShevronSvg from "./assets/icons/chevron_left.svg";
import { getGameWidth, getGameHeight, getRelative } from "./helpers";
import { Player } from "./objects";

const setWidthAndHeight = () => {
    let width = window.innerWidth;
    let height = width / 1.778;

    if (height > window.innerHeight) {
        height = window.innerHeight;
        width = height * 1.778;
    }
    return [width, height];
}

const getConfig = (scene) => {
    const [width, height] = setWidthAndHeight();
    const Scenes = [scene];

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
        audio: {
            noAudio: true
        },
        render: {
            pixelArt: true
        },
        fps: {
            target: 30,
        },
    }
}

const BG_KEY = "gymfloor";
const PLAYER_KEY = "avatar";
const LEFT_CHEVRON = 'left_chevron';
const PLAYER_SCALE = 0.15;

const SceneConfig = {
    active: false,
    visible: false,
    key: "gym-main-room",
};

const GymRoom = ({ avatar }) => {
    console.log('GymRoom avatar', avatar);
    // run game
    class GymRoomScene extends Phaser.Scene {
        constructor() {
            super(SceneConfig);
        }

        preload() {
            const selectedAvatar = this.game.registry.values.avatar;
            this.load.image(PLAYER_KEY, selectedAvatar.uri);
            this.load.image(BG_KEY, gymFloorImg);
            this.load.image(LEFT_CHEVRON, leftShevronSvg);
        }

        create() {
            // Add layout
            const width = getGameWidth(this);
            const height = getGameHeight(this);

            this.add.image(width / 2, height / 2, BG_KEY)
                .setDisplaySize(width, height);
            this.createBackButton();

            // Add a player sprite that can be moved around.
            this.player = new Player({
                scene: this,
                x: width / 2,
                y: height / 2,
                key: PLAYER_KEY,
            });
            this.player.setScale(PLAYER_SCALE);
        }

        createBackButton = () => {
            this.add
                .image(getRelative(54, this), getRelative(54, this), LEFT_CHEVRON)
                .setOrigin(0)
                .setInteractive({ useHandCursor: true })
                .setDisplaySize(getRelative(94, this), getRelative(94, this))
                .on("pointerdown", () => {
                    this.back?.play();
                    window.history.back();
                });
        };

        update(time, delta) {
            // Every frame, we update the player
            this.player?.update();
        }
    }

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
    }, []);

    return <IonPhaser initialize={initialised} game={config} id="phaser-app" />;
};

export default GymRoom;

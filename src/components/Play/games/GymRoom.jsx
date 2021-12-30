import React, { useState, useEffect } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import gymFloorImg from "./assets/gym-room/gymfloor.png";
import leftShevronSvg from "./assets/icons/chevron_left.svg";
import { getGameWidth, getGameHeight, getRelative } from "./helpers";

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

const PLAYER_SPEED = 100;
const BG_KEY = "gymfloor";
const PLAYER_KEY = "avatar";
const LEFT_CHEVRON = 'left_chevron';

const GymRoom = ({ avatar }) => {
    console.log('GymRoom avatar', avatar);
    // run game
    class GymRoomScene extends Phaser.Scene {
        constructor() {
            super({ key: 'gym-main-room' });
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

            this.player = this.physics.add.image(200, 300, PLAYER_KEY);
            const player = this.player;
            player.setScale(0.15);
            player.setCollideWorldBounds(true);

            // cursors
            this.cursors = this.input.keyboard.createCursorKeys();
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
            this.handlePlayerMoves();
        }

        handlePlayerMoves() {
            const player = this.player;
            if (this.cursors.up.isDown) {
                player.setVelocity(0, -PLAYER_SPEED);

            } else if (this.cursors.down.isDown) {
                player.setVelocity(0, PLAYER_SPEED);

            } else if (this.cursors.left.isDown) {
                player.setVelocity(-PLAYER_SPEED, 0);

            } else if (this.cursors.right.isDown) {
                player.setVelocity(PLAYER_SPEED, 0);
            } else {
                // idle
                player.setVelocity(0, 0);
            }
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

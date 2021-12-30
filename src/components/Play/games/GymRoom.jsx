import React, { useState, useEffect } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import gymFloorImg from "./assets/gym-room/gymfloor.png";
import { getGameWidth, getGameHeight } from "./helpers";

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

const PlayerSpeed = 100;

const GymRoom = ({ avatar }) => {
    console.log('GymRoom avatar', avatar);
    // run game
    class GymRoomScene extends Phaser.Scene {
        constructor() {
            super({ key: 'gym-main-room' });
        }

        preload() {
            const selectedAvatar = this.game.registry.values.avatar;
            console.log('loading game avatar', selectedAvatar);
            this.load.image('avatar', selectedAvatar.uri);
            this.load.image('gymfloor', gymFloorImg);
            console.log('loading background', gymFloorImg);
        }

        create() {
            // background
            const width = getGameWidth(this);
            const height = getGameHeight(this);

            console.log('width, height', width, height);
            this.bg = this.add.image(width / 2, height / 2, 'gymfloor');
            this.bg.setDisplaySize(width, height);

            this.player = this.physics.add.image(200, 300, 'avatar');
            const player = this.player;
            player.setScale(0.15);
            player.setCollideWorldBounds(true);

            // cursors
            this.cursors = this.input.keyboard.createCursorKeys();
        }

        update(time, delta) {
            this.handlePlayerMoves();
        }

        handlePlayerMoves() {
            const player = this.player;
            if (this.cursors.up.isDown) {
                player.setVelocity(0, -PlayerSpeed);

            } else if (this.cursors.down.isDown) {
                player.setVelocity(0, PlayerSpeed);

            } else if (this.cursors.left.isDown) {
                player.setVelocity(-PlayerSpeed, 0);

            } else if (this.cursors.right.isDown) {
                player.setVelocity(PlayerSpeed, 0);
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

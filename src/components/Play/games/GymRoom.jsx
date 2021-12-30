import React, { useState, useEffect } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";

const getConfig = (scene) => {
    let width = window.innerWidth;
    let height = width / 1.778;

    if (height > window.innerHeight) {
        height = window.innerHeight;
        width = height * 1.778;
    }

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
        }

        create() {
            this.player = this.physics.add.image(200, 300, 'avatar');
            this.player.setScale(0.15);
            this.cursors = this.input.keyboard.createCursorKeys();
        }

        update(time, delta) {
            this.handlePlayerMoves();
        }

        handlePlayerMoves() {
            if (this.cursors.up.isDown) {
                this.player.setVelocity(0, -PlayerSpeed)

            } else if (this.cursors.down.isDown) {
                this.player.setVelocity(0, PlayerSpeed)

            } else if (this.cursors.left.isDown) {
                this.player.setVelocity(-PlayerSpeed, 0)

            } else if (this.cursors.right.isDown) {
                this.player.setVelocity(PlayerSpeed, 0)
            } else {
                // idle
                this.player.setVelocity(0, 0)
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

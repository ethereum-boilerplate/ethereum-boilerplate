import Phaser from "phaser";
import { getGameWidth, getGameHeight } from "./helpers";
import { Player } from "./objects";
import {
    PLAYER_KEY, PLAYER_SCALE,
    GYM_ROOM_SCENE, SPACE_STRETCH_SCENE
} from "./shared";
import { createTextBox } from "./utils/text";
import {
    ASTEROIDS,
} from "./assets";
import * as gstate from "../../gpose/state";
import * as gpose from "../../gpose/pose";
import {
    highlightTextColorNum,
    mainBgColorNum,
    highlightTextColor,
} from "../../../GlobalStyles";
import party from "party-js";


const SceneConfig = {
    active: false,
    visible: false,
    key: SPACE_STRETCH_SCENE,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 3000 }
        }
    }
};

const asteroidScale = 1;
const maxAsteroidPlatformsCnt = 7;
const scoreBoardTextStyle = {
    fill: highlightTextColor,
    font: '900 20px Orbitron',
}
const roboTextTimeouts = [];
const playerSpeed = 100;


export class SpaceStretchScene extends Phaser.Scene {
    constructor() {
        super(SceneConfig);
    }

    init = (data) => {
        this.selectedAvatar = data.selectedAvatar;
        console.log('selectedAvatar', this.selectedAvatar);
    };

    color(i) {
        return 0xffffff
        // keeping for reference
        // return 0x001100 * (i % 15) + 0x000033 * (i % 5);
    }

    draw() {
        this.shapes.forEach((shape, i) => {
            this.graphics
                .fillStyle(this.color(i), 0.5)
                .fillCircleShape(shape);
        }, this);
    }

    drawGround(width, height) {
        const groundHeight = height * 0.02;
        const rect = new Phaser.Geom.Rectangle(0, height - groundHeight, width, groundHeight);
        this.graphics
            .fillStyle(0xB8ABB2, 1)
            .fillRectShape(rect);
        return rect;
    }

    create() {
        this.won = false;
        // basic props
        const width = getGameWidth(this);
        const height = getGameHeight(this);
        // background
        this.cameras.main.backgroundColor.setTo(31, 31, 30);
        this.graphics = this.add.graphics();
        this.graphics.clear();
        const ground = this.drawGround(width, height);
        this.shapes = new Array(15).fill(null).map(
            () => new Phaser.Geom.Circle(
                Phaser.Math.Between(0, width),
                Phaser.Math.Between(0, height),
                Phaser.Math.Between(1, 3)
            ));
        this.draw();
        // constrols
        this.input.keyboard.on('keydown', (event) => {
            const code = event.keyCode;
            if (code == Phaser.Input.Keyboard.KeyCodes.ESC) {
                roboTextTimeouts.forEach(t => clearTimeout(t));
                this.scene.start(GYM_ROOM_SCENE);
            }
        }, this);

        this.lastMovetime = Date.now()
        this.score = 0
        this.cursors = this.input.keyboard.createCursorKeys()
        this.landingAcceleration = 2

        // openingText
        // hint
        const hintTextBox = createTextBox(this,
            (width / 2) + width / 4, height * 0.025,
            { wrapWidth: 280 },
        );
        hintTextBox.setDepth(1);
        hintTextBox.setScrollFactor(0, 0);
        hintTextBox.start("🤖", 50);
        roboTextTimeouts.push(setTimeout(() => {
            hintTextBox.start(`🤖 Land 🚀 on asteroids 🪨\nand crush them 💥`, 50);
            roboTextTimeouts.push(setTimeout(() => hintTextBox.start("🤖", 50), 60000));
        }, 500));

        // Add the scoreboard in
        this.scoreBoard = this.add.text(
            width * 0.05, height * 0.015,
            "🪨🪨🪨  0", scoreBoardTextStyle);
        this.add.text(
            width * 0.05, height * 0.04,
            "press ESC to go back", {
            fill: '#FFBE59',
            font: '900 17px Orbitron',
        });

        const asteroidGroupProps = {
            immovable: true,
            allowGravity: false,
        }
        const asteroids = this.physics.add.group(asteroidGroupProps)
        const worldWidth = this.physics.world.bounds.width
        const worldHeight = this.physics.world.bounds.height
        this.placedAsteroidPlatforms = 0

        const placeAsteroids = () => {
            const yOffset = 32 * 1.5
            const xOffset = worldWidth * .1
            const step = 100
            let asteroidYPos = yOffset + 45
            for (let i = 0; i < maxAsteroidPlatformsCnt; i++) {
                if (asteroidYPos < worldHeight - (yOffset + 10)) {
                    // add biased randomnes to keep some tiles on left some on right
                    let x = 0
                    if (i % 2 == 0) {
                        // bias towards left
                        x = Phaser.Math.Between(xOffset, worldWidth / 2.3)
                    } else {
                        // bias towards right
                        x = Phaser.Math.Between(worldWidth / 1.3, worldWidth - xOffset)
                    }
                    const asteroidTile = asteroids.create(x, asteroidYPos, ASTEROIDS)
                    asteroidTile.setScale(asteroidScale)
                    asteroidYPos += step
                    this.placedAsteroidPlatforms += 1
                }
            }
        }

        placeAsteroids();

        // player
        this.player = new Player({
            scene: this,
            x: Phaser.Math.Between(width * 0.1,
                this.physics.world.bounds.width - 80),
            y: this.physics.world.bounds.height,
            key: PLAYER_KEY,
        });
        this.player.setScale(PLAYER_SCALE);
        this.player.setDepth(1);
        this.player.body.setCollideWorldBounds(true);

        // this.physics.add.collider(this.player, ground);

        const onCollide = (avatar, asteroids) => {
            if (avatar.body.onFloor()) {
                this.score += 1
                asteroids.setTint("0x33dd33")
                asteroids.setImmovable(false)
                asteroids.setVelocityY(600)
                this.scoreBoard.setText(`🪨🪨🪨  ${this.score}`)
                this.scoreBoard.setStyle(scoreBoardTextStyle)
            }
        }

        this.physics.add.collider(this.player, asteroids, onCollide, null, this);
    }

    youWonMsg() {
        const canvasParent = document.querySelector('#phaser-app canvas');
        if (canvasParent) party.confetti(canvasParent);
        // setInterval(() => {
        //     party.confetti(canvasParent);
        // }, 1000);

        const width = getGameWidth(this);
        const height = getGameHeight(this);

        const msg = "All 🪨🪨🪨 are crushed 🎉\n" +
            "\n\n" +
            "Press X to 🎮 restart\n" +
            "Press ESC to exit";

        const youWonText = createTextBox(this,
            width / 2,
            (height / 2) - height * .2,
            { wrapWidth: 280 },
            mainBgColorNum,
            highlightTextColorNum
        )
        youWonText.setOrigin(0.5).setDepth(1).setScrollFactor(0, 0);
        youWonText.start(msg, 50);

        this.input.on("pointerdown", () => this.scene.start(SPACE_STRETCH_SCENE));

        this.input.keyboard.on(
            'keydown',
            event => {
                const code = event.keyCode
                if (code == Phaser.Input.Keyboard.KeyCodes.X) {
                    this.scene.start(SPACE_STRETCH_SCENE);
                }
            },
            this
        );
    }

    update(time, delta) {
        if (!this.won && this.score == this.placedAsteroidPlatforms) {
            this.won = true;
            this.youWonMsg();
            return
        }

        const now = Date.now()
        const timeDiff = (now - this.lastMovetime) / 1000
        const player = this.player;
        player.body.setVelocityX(0);
        player.body.setVelocityY(0);

        const isIdle = !gstate.isNonIdle();
        if (!isIdle) {
            // reset
            this.landingAcceleration = 2;
        }
        // deffer gravity from in move state
        if (timeDiff > 0.8) {
            if (isIdle) {
                player.body.setAllowGravity(true)
                player.body.setVelocityY(playerSpeed)
            }
        }
        // if not in move for longer start accelerating gravity
        if (timeDiff > 3) {
            if (isIdle) {
                player.body.setVelocityY(playerSpeed + this.landingAcceleration)
                this.landingAcceleration += 1.2
            }
        }
        const curPose = gstate.getPose();
        if (player.cursorKeys?.left.isDown || curPose === gpose.HTL) {
            player.body.setVelocityX((playerSpeed * 0.8) * -1);
            player.body.setAllowGravity(false)
            this.lastMovetime = now
        } else if (player.cursorKeys?.right.isDown || curPose === gpose.HTR) {
            player.body.setVelocityX(playerSpeed * 0.8);
            player.body.setAllowGravity(false)
            this.lastMovetime = now
        } else if (player.cursorKeys?.up.isDown || curPose === gpose.BA_UP) {
            player.body.setVelocityY((playerSpeed) * -1);
            player.body.setAllowGravity(false)
            this.lastMovetime = now
        }
    }
}

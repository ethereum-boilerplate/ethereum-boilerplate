import Phaser from "phaser";
import { getGameWidth, getGameHeight } from "./helpers";
import { Player } from "./objects";
import { PLAYER_KEY, PLAYER_SCALE, GYM_ROOM_SCENE, SPACE_STRETCH_SCENE } from "./shared";
import { createTextBox } from "./utils/text";
import {
    ASTEROIDS,
} from "./assets";

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
const textStyle = {
    fontSize: '20px',
    fill: '#fff',
    fontFamily: 'Orbitron'
}

export class SpaceStretchScene extends Phaser.Scene {
    constructor() {
        super(SceneConfig);
    }

    init = (data) => {
        this.selectedAvatar = data.selectedAvatar;
        console.log('selectedAvatar', this.selectedAvatar);
    };

    create() {
        // bg color
        this.cameras.main.backgroundColor.setTo(31, 31, 30);
        // constrols
        this.input.keyboard.on('keydown', (event) => {
            const code = event.keyCode;
            if (code == Phaser.Input.Keyboard.KeyCodes.ESC) {
                this.scene.start(GYM_ROOM_SCENE);
            }
        }, this);

        // basic props
        const width = getGameWidth(this);
        const height = getGameHeight(this);

        this.lastMovetime = Date.now()
        this.score = 0
        this.cursors = this.input.keyboard.createCursorKeys()
        this.landingAcceleration = 2

        // openingText
        // hint
        const hintTextBox = createTextBox(this,
            (width / 2) + width / 4, height * 0.025,
            { wrapWidth: 280 })
        hintTextBox.setDepth(1);
        hintTextBox.setScrollFactor(0, 0);
        hintTextBox.start("🤖", 50);
        setTimeout(() => {
            hintTextBox.start(`🤖 Land 🚀 on asteroids 🪨\nand crush them 💥`, 50);
            setTimeout(() => hintTextBox.start("🤖", 50), 5000);
        }, 1500);

        // Add the scoreboard in
        this.scoreBoard = this.add.text(
            width * 0.05, height * 0.015,
            "SCORE: 0", textStyle);

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

        const onCollide = (avatar, asteroids) => {
            if (avatar.body.onFloor()) {
                this.score += 1
                asteroids.setTint("0x33dd33")
                asteroids.setImmovable(false)
                asteroids.setVelocityY(600)
                this.scoreBoard.setText(`SCORE: ${this.score}`)
                this.scoreBoard.setStyle(textStyle)
            }
        }

        this.physics.add.collider(this.player, asteroids, onCollide, null, this);
    }

    update(time, delta) {
        // Every frame, we update the player
        this.player?.update();
    }
}

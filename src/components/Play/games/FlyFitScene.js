import Phaser from "phaser";
import { getGameWidth, getGameHeight } from "./helpers";
import { Player } from "./objects";
import { PLAYER_KEY, PLAYER_SCALE, GYM_ROOM_SCENE, FLY_FIT_SCENE } from "./shared";
import {
    BTC,
} from "./assets";
import { createTextBox } from "./utils/text";
import party from "party-js";
import * as gstate from "../../gpose/state";
import * as gpose from "../../gpose/pose";
import {
    mainBgColor,
} from "../../../GlobalStyles";


const SceneConfig = {
    active: false,
    visible: false,
    key: FLY_FIT_SCENE,
};

const roboTextTimeouts = [];
const playerNgSpeed = 30
const playerSpeed = 80;
const btcScale = 0.11;
const btcCnt = 12;

export class FlyFitScene extends Phaser.Scene {
    constructor() {
        super(SceneConfig);
    }

    init = (data) => {
        this.selectedAvatar = data.selectedAvatar;
        console.log('selectedAvatar', this.selectedAvatar);
    };

    create() {
        // basic props
        this.won = false;
        const width = getGameWidth(this);
        const height = getGameHeight(this);

        this.graphics = this.add.graphics();
        this.graphics.clear();
        const rect = new Phaser.Geom.Rectangle(0, 0, width, height);
        this.graphics.fillGradientStyle(0xdce7fc, 0x82b1ff, 0x4281ff, 0x4287f5, 1)
            .fillRectShape(rect);

        // constrols
        this.input.keyboard.on('keydown', (event) => {
            const code = event.keyCode;
            if (code == Phaser.Input.Keyboard.KeyCodes.ESC) {
                roboTextTimeouts.forEach(t => clearTimeout(t));
                this.scene.start(GYM_ROOM_SCENE);
            }
        }, this);

        // text
        this.scoreBoard = this.add.text(
            width * 0.05, height * 0.015,
            "SCORE: 0", {
            fill: '#ba3a3a',
            font: '900 20px Orbitron',
        });
        this.add.text(
            width * 0.05, height * 0.04,
            "press ESC to go back", {
            fill: mainBgColor,
            font: '900 17px Orbitron',
        });

        // hint
        const hintTextBox = createTextBox(this,
            (width / 2) + width / 4, height * 0.025,
            { wrapWidth: 280 })
        hintTextBox.setDepth(1);
        hintTextBox.setScrollFactor(0, 0);
        hintTextBox.start("🤖", 50);
        roboTextTimeouts.push(setTimeout(() => {
            hintTextBox.start(`🤖 BTC fly in the sky\b try to catch them`, 50);
            roboTextTimeouts.push(setTimeout(() => hintTextBox.start("🤖", 50), 60000));
        }, 500));

        // player
        this.player = new Player({
            scene: this,
            x: width / 2,
            y: height / 2,
            key: PLAYER_KEY,
        });
        this.player.setScale(PLAYER_SCALE);
        this.player.body.setCollideWorldBounds(true);
        this.player.setDepth(2);

        this.score = 0;
        const btcGroup = this.physics.add.group({
            key: BTC,
            quantity: btcCnt,
            collideWorldBounds: true,
        })

        const btcRect = new Phaser.Geom.Rectangle(width * 0.04, height * 0.13,
            width - width * 0.04, height - height * 0.13, 0x4e342e);
        // for degub
        // this.graphics.fillGradientStyle(0x023246, 0x1E0338, 0x300240, 0x370232, 1)
        //     .fillRectShape(btcRect);
        btcGroup.getChildren().forEach(dog => dog.setScale(btcScale).setDepth(1));
        Phaser.Actions.RandomRectangle(btcGroup.getChildren(), btcRect);

        this.physics.add.overlap(this.player, btcGroup, collectBtc, null, this)
        function collectBtc(avatar, btcItem) {
            btcItem.destroy()
            this.score += 1
            this.scoreBoard.setText(`SCORE: ${this.score}`)
        }
    }

    youWonMsg() {
        const canvasParent = document.querySelector('#phaser-app canvas');
        if (canvasParent) party.confetti(canvasParent);
        // setInterval(() => {
        //     party.confetti(canvasParent);
        // }, 1000);

        const width = getGameWidth(this);
        const height = getGameHeight(this);

        const msg = "You catched all flying BTCs 🎉\n" +
            "\n\n" +
            "Press X to 🎮 restart\n" +
            "Press ESC to exit";

        const youWonText = createTextBox(this,
            width / 2,
            (height / 2) - height * .2,
            { wrapWidth: 280 },
        )
        youWonText.setOrigin(0.5).setDepth(1).setScrollFactor(0, 0);
        youWonText.start(msg, 50);

        this.input.on("pointerdown", () => this.scene.start(FLY_FIT_SCENE));

        this.input.keyboard.on(
            'keydown',
            event => {
                const code = event.keyCode
                if (code == Phaser.Input.Keyboard.KeyCodes.X) {
                    this.scene.start(FLY_FIT_SCENE);
                }
            },
            this
        );
    }

    update(time, delta) {
        if (!this.won && this.score == btcCnt) {
            this.won = true;
            this.youWonMsg();
            return
        }
        // Every frame, we update the player
        this.handlePlayerMoves();
    }

    handlePlayerMoves() {
        const player = this.player;
        player.body.setAngularVelocity(0);
        player.body.setVelocity(0, 0);
        player.body.setAcceleration(0)

        const curPose = gstate.getPose();
        if (player.cursorKeys?.up.isDown || curPose === gpose.BA_UP) {
            // -90 guaranties that the move will straight from head 
            // otherwise it would look like moving left
            const ng = player.angle - 90;
            const vec = this.physics.velocityFromAngle(ng, playerSpeed)
            player.body.setVelocity(vec.x, vec.y);
        } else if (player.cursorKeys?.left.isDown || curPose === gpose.HTL) {
            player.body.setAngularVelocity(playerNgSpeed * -1);
        } else if (player.cursorKeys?.right.isDown || curPose === gpose.HTR) {
            player.body.setAngularVelocity(playerNgSpeed);
        }
    }
}

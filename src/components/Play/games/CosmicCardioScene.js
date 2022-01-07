import Phaser from "phaser";
import { getGameWidth, getGameHeight, getRelative } from "./helpers";
import { Player } from "./objects";
import { PLAYER_KEY, PLAYER_SCALE, GYM_ROOM_SCENE, COSMIC_CARDIO_SCENE } from "./shared";
import {
    BACK_ARROW,
} from "./assets";
import { createTextBox } from "./utils/text";


const SceneConfig = {
    active: false,
    visible: false,
    key: COSMIC_CARDIO_SCENE,
};

export class CosmicCardioScene extends Phaser.Scene {
    constructor() {
        super(SceneConfig);
    }

    init = (data) => {
        this.selectedAvatar = data.selectedAvatar;
        console.log('selectedAvatar', this.selectedAvatar);
    };

    create() {
        this.cameras.main.backgroundColor.setTo(32,191,150);
        // constrols
        this.input.keyboard.on('keydown', (event) => {
            const code = event.keyCode;
            if (code == Phaser.Input.Keyboard.KeyCodes.ESC) {
                this.scene.start(GYM_ROOM_SCENE);
            }
        }, this);

        // Add layout
        const width = getGameWidth(this);
        const height = getGameHeight(this);

        // text
        const textStyle = {
            font: 'bold 32px Orbitron',
            fill: '#FA34F3',
            backgroundColor: '#251F54',
            padding: 30,
            align: 'center',
        }
        const infoText = this.add.text(
            width / 2,
            (height / 2) - height * .2,
            `Welcome to ${COSMIC_CARDIO_SCENE}
            \n press ESC to go back`,
            textStyle
        )
        infoText.setOrigin(0.5)
        infoText.setShadow(3, 3, 'rgba(0,0,0,0.2)', 2);

        // back
        // this.createBackButton();

        // hint
        // hint
        const hintTextBox = createTextBox(this,
            (width / 2) + width / 4, height * 0.025,
            { wrapWidth: 280 })
        hintTextBox.setDepth(1);
        hintTextBox.setScrollFactor(0, 0);
        hintTextBox.start("🤖", 50);

        // player
        this.player = new Player({
            scene: this,
            x: width / 2,
            y: height / 2,
            key: PLAYER_KEY,
        });
        this.player.setScale(PLAYER_SCALE);
        this.player.setDepth(1);
    }

    createBackButton = () => {
        this.add
            .image(getRelative(10, this), getRelative(24, this), BACK_ARROW)
            .setOrigin(0)
            .setInteractive({ useHandCursor: true })
            .setDisplaySize(getRelative(54, this), getRelative(54, this))
            .on("pointerdown", () => {
                this.scene.start(GYM_ROOM_SCENE);
            });
    };

    update(time, delta) {
        // Every frame, we update the player
        this.player?.update();
    }
}

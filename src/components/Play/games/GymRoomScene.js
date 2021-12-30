import Phaser from "phaser";
import gymFloorImg from "./assets/gym-room/gymfloor.png";
import leftShevronSvg from "./assets/icons/chevron_left.svg";
import { getGameWidth, getGameHeight, getRelative } from "./helpers";
import { Player } from "./objects";
import { BG_KEY, PLAYER_KEY, LEFT_CHEVRON, PLAYER_SCALE } from "./shared";

const SceneConfig = {
    active: false,
    visible: false,
    key: "gym-main-room",
};

export class GymRoomScene extends Phaser.Scene {
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


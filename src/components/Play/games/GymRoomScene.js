import Phaser from "phaser";
import { getGameWidth, getGameHeight, getRelative } from "./helpers";
import { Player } from "./objects";
import { PLAYER_KEY, PLAYER_SCALE, GYM_ROOM_SCENE } from "./shared";
import { LEFT_CHEVRON, BG } from "./assets";

const SceneConfig = {
    active: false,
    visible: false,
    key: GYM_ROOM_SCENE,
};

export class GymRoomScene extends Phaser.Scene {
    constructor() {
        super(SceneConfig);
    }

    init = (data) => {
        this.selectedAvatar = data.selectedAvatar;
        console.log('selectedAvatar', this.selectedAvatar);
    };

    // preload() {
    //     const selectedAvatar = this.game.registry.values.avatar;
    //     this.load.image(PLAYER_KEY, selectedAvatar.uri);
    //     this.load.image(BG_KEY, gymFloorImg);
    //     this.load.image(LEFT_CHEVRON, leftShevronSvg);
    // }

    create() {
        // Add layout
        const width = getGameWidth(this);
        const height = getGameHeight(this);

        this.add.image(width / 2, height / 2, BG)
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

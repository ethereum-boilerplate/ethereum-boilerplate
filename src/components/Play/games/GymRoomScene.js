import Phaser from "phaser";
import { getGameWidth, getGameHeight, getRelative } from "./helpers";
import { Player } from "./objects";
import { PLAYER_KEY, PLAYER_SCALE, GYM_ROOM_SCENE } from "./shared";
import {
    LEFT_CHEVRON,
    BG,
    GYM_ROOM_MAP,
    GYM_ROOM_TILES,
    GYM_ROOM_MAT_SKY,
    GYM_ROOM_MAT_SPACE,

    GYM_ROOM_DANGEON_MAP,
    GYM_ROOM_DANGEON_TILES,
} from "./assets";

const SceneConfig = {
    active: false,
    visible: false,
    key: GYM_ROOM_SCENE,
};

const mapScale = 1.2

export class GymRoomScene extends Phaser.Scene {
    constructor() {
        super(SceneConfig);
    }

    init = (data) => {
        this.selectedAvatar = data.selectedAvatar;
        console.log('selectedAvatar', this.selectedAvatar);
    };

    create() {
        // Add layout
        const width = getGameWidth(this);
        const height = getGameHeight(this);

        // bg image
        this.add.image(width / 2, height / 2, BG)
            .setDisplaySize(width, height);

        // map
        const map = this.make.tilemap({ key: GYM_ROOM_DANGEON_MAP })

        const tileset_main = map.addTilesetImage('dangeon', GYM_ROOM_DANGEON_TILES, 16, 16)
        const groundLayer = map
            .createLayer('floor', tileset_main, (width / 4), 0);

        const wallsLayer = map
            .createLayer('walls', tileset_main, (width / 4), 0);
        groundLayer.setScale(mapScale);

        // collide with all walls
        wallsLayer.setScale(mapScale);
        wallsLayer.setCollisionByExclusion([-1]);

        // back btn   
        // uncomment if you want to have sound on exit
        // this.back = this.sound.add(CLICK, { loop: false });
        this.createBackButton();

        // Add a player sprite that can be moved around.
        this.player = new Player({
            scene: this,
            x: width / 2,
            y: height / 2,
            key: PLAYER_KEY,
        });
        this.player.setScale(PLAYER_SCALE);

        // colliders
        this.physics.add.collider(this.player, wallsLayer);
    }

    createBackButton = () => {
        this.add
            .image(getRelative(10, this), getRelative(24, this), LEFT_CHEVRON)
            .setOrigin(0)
            .setInteractive({ useHandCursor: true })
            .setDisplaySize(getRelative(54, this), getRelative(54, this))
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

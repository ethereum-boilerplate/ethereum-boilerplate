import Phaser from "phaser";
import { getGameWidth, getGameHeight, getRelative } from "./helpers";
import { Player } from "./objects";
import { PLAYER_KEY, PLAYER_SCALE, GYM_ROOM_SCENE } from "./shared";
import {
    BACK_ARROW,
    BG,
    GYM_ROOM_MAP,
    GYM_ROOM_TILES,
    GYM_ROOM_MAT_SKY,
    GYM_ROOM_MAT_SPACE,
    CONCRETE_BG,

    GYM_ROOM_DANGEON_MAP,
    GYM_ROOM_DANGEON_TILES,
} from "./assets";
import { createTextBox } from "./utils/text";
import { TextBox } from 'phaser3-rex-plugins/templates/ui/ui-components';
import { debugCollisonBounds } from './utils/collision_debugger'

const debugCollisons = false;

const SceneConfig = {
    active: false,
    visible: false,
    key: GYM_ROOM_SCENE,
};

const mapScale = 0.6;
const tileMapSizing = 36;

const set = new Set();

let sceneToGoOnXclick = null;

export class GymRoomScene extends Phaser.Scene {
    constructor() {
        super(SceneConfig);
    }

    init = (data) => {
        this.selectedAvatar = data.selectedAvatar;
        console.log('selectedAvatar', this.selectedAvatar);
    };

    create() {
        this.cameras.main.backgroundColor.setTo(179, 201, 217);
        // constrols
        this.input.keyboard.on('keydown', (event) => {
            const code = event.keyCode;
            if (sceneToGoOnXclick && code == Phaser.Input.Keyboard.KeyCodes.X) {
                this.scene.start(sceneToGoOnXclick);
            }
        }, this);

        // Add layout
        const width = getGameWidth(this);
        const height = getGameHeight(this);

        // bg image
        // this.add.image(width / 2, height / 2, BG)
        //     .setDisplaySize(width, height);

        // map
        const map = this.make.tilemap({
            key: GYM_ROOM_MAP,
            tileWidth: tileMapSizing,
            tileHeight: tileMapSizing,
        })

        // const tileset_bg = map.addTilesetImage(
        //     CONCRETE_BG, // ? filename ?? name of the tileset in json file
        //     CONCRETE_BG, // key
        //     tileMapSizing,
        //     tileMapSizing
        // );

        const tileset_main = map.addTilesetImage(
            'gym_room_sqrs', // ? filename ?? name of the tileset in json file
            GYM_ROOM_TILES, // key
            tileMapSizing,
            tileMapSizing
        );
        const groundLayer = map
            .createLayer('floor', [tileset_main,
                // tileset_bg
            ],
                (width / 5), height * 0.02
            );

        const wallsLayer = map
            .createLayer('walls', tileset_main,
                (width / 5), height * 0.02
            );
        groundLayer.setScale(mapScale);

        // collide with all walls
        wallsLayer.setScale(mapScale);
        // wallsLayer.setCollisionByExclusion([-1]);
        wallsLayer.setCollisionByProperty({
            collides: true
        })

        const mat_sky = map.addTilesetImage(
            'mat_sky', // ? filename ?? name of the tileset in json file
            GYM_ROOM_MAT_SKY, // key
            tileMapSizing,
            tileMapSizing
        );

        const mat_space = map.addTilesetImage(
            'mat_space', // ? filename ?? name of the tileset in json file
            GYM_ROOM_MAT_SPACE, // key
            tileMapSizing,
            tileMapSizing
        );

        const itemsLayer = map
            .createLayer('items', [tileset_main, mat_sky, mat_space],
                (width / 5), (height * 0.02)
            );
        itemsLayer.setScale(mapScale);

        // map.createLayer('script', [tileset_main, mat_sky, mat_space], (width / 5), (height * 0.02));
        // TODO check later
        // itemsLayer.forEachTile(t => {
        //     let spriteShadow = t
        //     let scaleY = t
        //     spriteShadow.y = spriteShadow.y + (spriteShadow.height * (1 - scaleY)) / 2;
        //     spriteShadow.scaleY = scaleY;
        //     spriteShadow.tint = 0x000000;
        //     spriteShadow.alpha = 0.5;
        //     spriteShadow.setPipeline("skewQuad");
        //     spriteShadow.pipeline.set1f("inHorizontalSkew", 0.2);
        // })
        // itemsLayer.setCollisionByExclusion([-1]);

        // back btn   
        // uncomment if you want to have sound on exit
        // this.back = this.sound.add(CLICK, { loop: false });
        // this.createBackButton();

        // Add a player sprite that can be moved around.
        // this.playerContainer = this.add.container(
        //     // (width / 5), (height * 0.02)
        // );

        const playerObjLayer = map.getObjectLayer('player')
        this.player = new Player({
            scene: this,
            x: playerObjLayer.objects[0].x * mapScale,
            y: playerObjLayer.objects[0].y * mapScale,
            key: PLAYER_KEY,
        });
        // this.player
        this.player.setScale(PLAYER_SCALE);
        this.player.setDepth(1);

        // Phaser.Display.Align.In.BottomCenter(this.player);

        // const text = this.add.text(0, 0, "Some text", { font: "16px Arial", fill: "#ffffff" });

        // this.playerContainer.add([text]);
        // this.player.copyPosition()
        this.cameras.main.startFollow(this.player);

        // colliders
        this.physics.add.collider(this.player, wallsLayer);

        // text
        const hintTextBox = createTextBox(this,
            // (width / 2) - width * 0.1, height - 100,
            (width / 2) + width / 4, height * 0.025,
            {
                wrapWidth: 280,
                // fixedWidth: 300,
            }
        )

        hintTextBox.setDepth(1);
        hintTextBox.start("🤖", 50);
        setTimeout(() => {
            hintTextBox.start(
                `🤖 Welcome 👋,
                \ngo to the MetaGym
                \nand do some stretches 💪
                `, 50);
        }, 1000);

        hintTextBox.setScrollFactor(0, 0);

        const scriptLayer = map.getObjectLayer('script')
        console.log('scriptLayer.objects', scriptLayer.objects);
        scriptLayer.objects.forEach(object => {
            const x = (object.x * mapScale) + (width / 5)
            const y = object.y * mapScale + height * 0.02
            // object.setScale(mapScale)
            let tmp = this.add.rectangle(x, y,
                object.width * mapScale, object.height * mapScale).setOrigin(0)
            tmp.properties = [{ name: object.name }]
            // this.add.text(
            //     x,
            //     y,
            //     `${object.name}`,
            //     { font: "16px Arial", fill: "#ffffff" })
            // .setOrigin((width / 5), (height * 0.02));
            // tmp.properties = object.properties.reduce(
            //     (obj, item) => Object.assign(obj, { [item.name]: item.value }), {}
            // );
            this.physics.world.enable(tmp, 1);
            this.physics.add.overlap(this.player, tmp, (avatar, other) => {
                console.log('overlap', avatar, other);
                // other.body.dis
                // check if it was triggered already, or disable collider on enter
                // and enable on exit on outer edge collider
                if (!set.has(object.name)) {
                    sceneToGoOnXclick = object.name;
                    hintTextBox.start(`clik X to play ${object.name} 🚀`, 50);
                    // setTimeout(() => {
                    //     if (hintTextBox) {
                    //         hintTextBox.start("🤖", 50);
                    //     }
                    // }, 5000);
                    set.add(object.name);
                }
            }, null, this);
        })

        // debugging
        if (debugCollisons) {
            debugCollisonBounds(wallsLayer, this);
        }
    }

    createBackButton = () => {
        this.add
            .image(getRelative(10, this), getRelative(24, this), BACK_ARROW)
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

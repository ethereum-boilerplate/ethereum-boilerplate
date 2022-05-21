import Phaser from "phaser";
import { assets } from "./assets";
import { GYM_ROOM_SCENE, PLAYER_KEY } from "./shared";
import { getGameWidth, getGameHeight } from "./helpers";

const sceneConfig = {
    active: false,
    visible: false,
    key: "Boot",
};

/**
 * The initial scene that loads all necessary assets to the game.
 */
export class BootScene extends Phaser.Scene {
    assetsLoaded;
    selectedAvatar;
    loadIndex;
    progressBarContainer;
    progressBar;
    loadingText;

    constructor() {
        super(sceneConfig);
        this.loadIndex = 0;
    }

    preload = () => {
        // Construct progress bar
        this.createProgressBar();

        // Construct avatar game object from registry
        this.selectedAvatar = this.game.registry.values.avatar;

        // Listener that triggers when an asset has loaded
        this.load.on(
            "filecomplete",
            key => {
                // As the spritesheet is the last asset to load in, we can attempt to start the game
                if (key === PLAYER_KEY) {
                    this.assetsLoaded = true;
                    this.loadingText?.setText(`Loading Player Avatar...`);
                    this.startGame();
                }
                if (this.loadIndex === assets.length && this.selectedAvatar) {
                    this.load.crossOrigin = "anonymous";
                    this.load.image(PLAYER_KEY, this.selectedAvatar.uri);
                } else {
                    this.loadNextFile(this.loadIndex);
                }
            },
            this
        );
        this.loadNextFile(0);
    };

    /**
     * If all the assets are loaded in, start game
     */
    startGame = () => {
        if (this.assetsLoaded) {
            this.scene.start(GYM_ROOM_SCENE, { selectedAvatar: this.selectedAvatar });
        }
    };

    /**
     * Renders UI component to display loading progress
     */
    createProgressBar = () => {
        const width = getGameWidth(this) * 0.5;
        const height = 12;
        this.progressBarContainer = this.add
            .rectangle(
                getGameWidth(this) / 2,
                getGameHeight(this) / 2,
                width,
                height,
                0x12032e
            )
            .setOrigin(0.5);

        this.progressBar = this.add
            .rectangle(
                (getGameWidth(this) - width) / 2,
                getGameHeight(this) / 2,
                0,
                height,
                0x6d18f8
            )
            .setOrigin(0, 0.5);

        this.loadingText = this.add
            .text(getGameWidth(this) / 2, getGameHeight(this) / 2 - 32, "Loading...")
            .setFontSize(24)
            .setOrigin(0.5);
    };

    /**
     * Iterates through each file in the assets array
     */
    loadNextFile = (index) => {
        const file = assets[index];
        this.loadIndex++;

        if (this.loadingText && this.progressBar && this.progressBarContainer) {
            // this.loadingText.setText(`Loading: ${file.key}`);
            this.loadingText.setText('Loading...');
            this.progressBar.width =
                (this.progressBarContainer.width / assets.length) * index;
        }

        switch (file.type) {
            case "IMAGE":
                this.load.image(file.key, file.src);
                break;
            case "SVG":
                this.load.svg(file.key, file.src);
                break;
            case "AUDIO":
                this.load.audio(file.key, [file.src]);
                break;
            case "SPRITESHEET":
                this.load.spritesheet(
                    file.key,
                    file.src,
                    file.data
                );
                break;
            case "TILEMAP_TILES":
                this.load.image(file.key, file.src);
                break;
            case "TILEMAP_MAP":
                this.load.tilemapTiledJSON(file.key, file.src);
                break;
            default:
                break;
        }
    };

    // TODO, keeping for reference
    /**
     * Constructs and loads in the Aavegotchi spritesheet, you can use customiseSVG() to create custom poses and animations
     */
    // loadInGotchiSpritesheet = async (
    //     gotchiObject: AavegotchiGameObject
    // ) => {
    //     const svg = gotchiObject.svg;
    //     const spriteMatrix = [
    //         // Front
    //         [
    //             customiseSvg(svg[0], { removeBg: true }),
    //             customiseSvg(svg[0], {
    //                 armsUp: true,
    //                 eyes: "happy",
    //                 float: true,
    //                 removeBg: true,
    //             }),
    //         ],
    //         // Left
    //         [
    //             customiseSvg(svg[1], { removeBg: true }),
    //         ],
    //         // Right
    //         [
    //             customiseSvg(svg[2], { removeBg: true }),
    //         ],
    //         // Right
    //         [
    //             customiseSvg(svg[3], { removeBg: true }),
    //         ]
    //     ];
    //     const { src, dimensions } = await constructSpritesheet(spriteMatrix);
    //     this.load.spritesheet(gotchiObject.spritesheetKey, src, {
    //         frameWidth: dimensions.width / dimensions.x,
    //         frameHeight: dimensions.height / dimensions.y,
    //     });
    //     this.load.start();
    // };
}

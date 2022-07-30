import Phaser from "phaser";
import { getGameWidth, getGameHeight } from "../helpers";
import { PlayerWithName } from "../objects";
import { RUSH } from "../shared";
import { createTextBox } from "../utils/text";
import { mainBgColorNum, highlightTextColorNum } from "../../GlobalStyles";
import { SceneInMetaGymRoom } from "../base-scenes/ts/scene-in-metagym-room";
import * as gstate from "../../components/gpose/state";
import * as gpose from "../../components/gpose/pose";
import { RUSH_BG } from "../gym-room-boot/assets";
import { MovesSpeedCaluclator } from "../mechanics/moves-speed-caluclator";
import TextBox from "phaser3-rex-plugins/templates/ui/textbox/TextBox";

const SceneConfig = {
  active: false,
  visible: false,
  key: RUSH,
};

export class RushScene extends SceneInMetaGymRoom {
  player: any; // TODO define type
  lanes!: Phaser.GameObjects.TileSprite;
  cursorKeys!: Phaser.Types.Input.Keyboard.CursorKeys;
  movesSpeedCaluclator!: MovesSpeedCaluclator;
  leftUpCircle!: Phaser.GameObjects.Graphics;
  rightUpCircle!: Phaser.GameObjects.Graphics;
  rightButtomCircle!: Phaser.GameObjects.Graphics;
  leftButtomCircle!: Phaser.GameObjects.Graphics;
  statsBox!: TextBox;
  flipFlop = false;

  constructor() {
    super(SceneConfig);
  }

  preload() {
    this.load.image(RUSH_BG, `assets/images/${RUSH_BG}.png`);
  }

  create() {
    // basic props
    const width = getGameWidth(this);
    const height = getGameHeight(this);

    // basics
    this.handleExit({
      thisSceneKey: RUSH,
    });

    // bg
    this.lanes = this.add
      .tileSprite(width / 2, height / 2, width, height, RUSH_BG)
      .setScrollFactor(0);

    this.createTextBoxes();

    // player
    this.player = new PlayerWithName({
      scene: this,
      x: width / 2,
      y: height - height * 0.08,
      name: this.selectedAvatar?.name,
    });

    // player moves indicator graphics
    this.createPlayerOuterGraphics();

    // cursorKeys for debug
    this.cursorKeys = this.player.cursorKeys;

    // camera
    this.cameras.main.setOrigin(0.48, 0.88);
    this.cameras.main.startFollow(this.player);

    // speed calculation
    this.movesSpeedCaluclator = new MovesSpeedCaluclator({
      timeNow: Date.now(),
      maxAgeOnSecondsInLastSpeeds: 3,
    });
  }

  private createPlayerOuterGraphics() {
    const width = getGameWidth(this);
    const height = getGameHeight(this);

    const graphicsUpY = height / 1.15;
    const graphicsBottomY = height - height * 0.06;
    this.leftUpCircle = this.add
      .graphics()
      .fillStyle(0x06ff00, 0.8)
      .fillCircle(width - width * 0.54, graphicsUpY, 15);

    this.rightUpCircle = this.add
      .graphics()
      .fillStyle(0x06ff00, 0.8)
      .fillCircle(width - width * 0.46, graphicsUpY, 15);

    this.rightButtomCircle = this.add
      .graphics()
      .fillStyle(0xff0000, 0.8)
      .fillCircle(width - width * 0.46, graphicsBottomY, 15);
    this.leftButtomCircle = this.add
      .graphics()
      .fillStyle(0xff0000, 0.8)
      .fillCircle(width - width * 0.54, graphicsBottomY, 15);
  }

  // eslint-disable-next-line no-unused-vars
  update(time: number, delta: number) {
    if (
      this.movesSpeedCaluclator.secondsPassed({
        timeNow: Date.now(),
        seconds: 2,
      })
    ) {
      this.movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: Date.now(),
      });
      const currentSpeedLabel = this.movesSpeedCaluclator.currentSpeedLabel;
      const averageMovesPerSecond =
        this.movesSpeedCaluclator.averageMovesPerSecond;
      this.statsBox.start(
        `Current speed: ${currentSpeedLabel}` +
          "\n" +
          `Average moves per second:\n${averageMovesPerSecond.toFixed(2)}`,
        0,
      );
    }

    this.leftButtomCircle.setAlpha(0.2);
    this.rightButtomCircle.setAlpha(0.2);
    this.leftUpCircle.setAlpha(0.2);
    this.rightUpCircle.setAlpha(0.2);

    const curPose = gstate.getPose();
    // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
    const velocity = new Phaser.Math.Vector2(0, 0);
    // Horizontal movement
    switch (true) {
      case this.cursorKeys?.left.isDown || curPose === gpose.HTL:
        velocity.x -= 1;
        this.leftButtomCircle.setAlpha(0.8);
        break;
      case this.cursorKeys?.right.isDown || curPose === gpose.HTR:
        velocity.x += 1;
        this.rightButtomCircle.setAlpha(0.8);
        break;
      default:
      // do nothing
    }

    // Vertical movement
    let movedUp = false;
    switch (true) {
      case this.cursorKeys?.down.isDown || curPose === gpose.LA_UP:
        this.leftUpCircle.setAlpha(0.8);
        movedUp = true;
        break;
      case this.cursorKeys?.up.isDown ||
        curPose === gpose.RA_UP ||
        curPose === gpose.BA_UP:
        this.rightUpCircle.setAlpha(0.8);
        movedUp = true;
        break;
      default:
        this.flipFlop = false;
      // do nothing
    }

    if (movedUp) {
      velocity.y -= 1;
      if (!this.flipFlop) {
        this.flipFlop = true;
        this.movesSpeedCaluclator.incrementDistanceTraveled();
      }
    }

    const speed = this.movesSpeedCaluclator.resolveSpeed({
      baseSpeed: 150,
    });

    // We normalize the velocity so that the player is always moving at the same speed, regardless of direction.
    const normalizedVelocity = velocity.normalize();
    const normalizedYVelocity =
      this.movesSpeedCaluclator.resolvePlayerYVelocity(normalizedVelocity);
    this.player.body.setVelocity(
      normalizedVelocity.x * speed,
      normalizedYVelocity * speed,
    );

    this.lanes.tilePositionY = this.cameras.main.scrollY;
    this.lanes.tilePositionX = this.cameras.main.scrollX;

    this.leftButtomCircle.y = this.cameras.main.scrollY;
    this.leftButtomCircle.x = this.cameras.main.scrollX;
    this.rightButtomCircle.y = this.cameras.main.scrollY;
    this.rightButtomCircle.x = this.cameras.main.scrollX;
    this.rightUpCircle.y = this.cameras.main.scrollY;
    this.rightUpCircle.x = this.cameras.main.scrollX;
    this.leftUpCircle.x = this.cameras.main.scrollX;
    this.leftUpCircle.y = this.cameras.main.scrollY;
  }

  createTextBoxes() {
    const width = getGameWidth(this);
    const height = getGameHeight(this);

    createTextBox(
      this,
      width * 0.05,
      height * 0.015,
      { wrapWidth: 280 },
      mainBgColorNum,
      highlightTextColorNum,
    )
      .start("press ESC to go back", 10)
      .setScrollFactor(0, 0);

    const hintTextBox = createTextBox(
      this,
      width / 2 + width / 4,
      height * 0.015,
      { wrapWidth: 280 },
      0xfffefe,
      0x00ff00,
      "center",
      "#212125",
    );
    hintTextBox.setDepth(1);
    hintTextBox.setScrollFactor(0, 0);
    hintTextBox.start("🤖 Welcome in MetaGymLand RUSH minigame", 50);

    // stats
    this.statsBox = createTextBox(
      this,
      width * 0.05,
      height * 0.09,
      { wrapWidth: 280 },
      0xfffefe,
      0x00ff00,
      "center",
      "#212125",
    )
      .setScrollFactor(0, 0)
      .start("Current speed: 0", 0);
  }
}

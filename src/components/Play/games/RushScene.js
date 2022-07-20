import Phaser from "phaser";
import { getGameWidth, getGameHeight } from "./helpers";
import { Player } from "./objects";
import { PLAYER_KEY, PLAYER_SCALE, GYM_ROOM_SCENE, RUSH } from "./shared";
import { createTextBox } from "./utils/text";
import { mainBgColorNum, highlightTextColorNum } from "../../../GlobalStyles";
import { EarnableScene } from "./EarnableScene";
import * as gstate from "../../gpose/state";
import * as gpose from "../../gpose/pose";

const SceneConfig = {
  active: false,
  visible: false,
  key: RUSH,
};

export class RushScene extends EarnableScene {
  constructor() {
    super(SceneConfig);
  }

  init = (data) => {
    this.selectedAvatar = data.selectedAvatar;
  };

  exit() {
    this.game.registry.values?.setMinigame(GYM_ROOM_SCENE);
    this.scene.start(GYM_ROOM_SCENE);
  }

  create() {
    // basic props
    const width = getGameWidth(this);
    const height = getGameHeight(this);

    // constrols
    this.input.keyboard.on(
      "keydown",
      async (event) => {
        const code = event.keyCode;
        if (
          code === Phaser.Input.Keyboard.KeyCodes.ESC ||
          code === Phaser.Input.Keyboard.KeyCodes.X
        ) {
          await this.updateXP();
        }
        if (code === Phaser.Input.Keyboard.KeyCodes.X) {
          this.scene.start(RUSH);
        }
        if (code === Phaser.Input.Keyboard.KeyCodes.ESC) {
          this.exit();
        }
      },
      this,
    );

    createTextBox(
      this,
      width * 0.05,
      height * 0.015,
      { wrapWidth: 280 },
      mainBgColorNum,
      highlightTextColorNum,
    ).start("press ESC to go back", 10);

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

    // player
    this.player = new Player({
      scene: this,
      x: Phaser.Math.Between(width * 0.1, this.physics.world.bounds.width - 80),
      y: this.physics.world.bounds.height,
      key: PLAYER_KEY,
    });
    this.player.setScale(PLAYER_SCALE);
    this.player.setDepth(1);
    this.player.body.setCollideWorldBounds(true);
  }

  // eslint-disable-next-line no-unused-vars
  update(time, delta) {
    this.player?.update();
  }

  handlePlayerMoves() {
    const curPose = gstate.getPose();
    // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
    const velocity = new Phaser.Math.Vector2(0, 0);
    // Horizontal movement
    switch (true) {
      case this.cursorKeys?.left.isDown || curPose === gpose.HTL:
        velocity.x -= 1;
        // this.anims.play('left', true);
        break;
      case this.cursorKeys?.right.isDown || curPose === gpose.HTR:
        velocity.x += 1;
        // this.anims.play('right', true);
        break;
      default:
      // do nothing
    }

    // Vertical movement
    switch (true) {
      case this.cursorKeys?.down.isDown ||
        curPose === gpose.LA_UP ||
        curPose === gpose.NDWN:
        velocity.y += 1;
        // this.anims.play('idle', false);
        break;
      case this.cursorKeys?.up.isDown ||
        curPose === gpose.RA_UP ||
        curPose === gpose.BA_UP:
        velocity.y -= 1;
        // this.anims.play('up', true);
        break;
      default:
      // do nothing
    }

    // We normalize the velocity so that the player is always moving at the same speed, regardless of direction.
    const normalizedVelocity = velocity.normalize();
    this.body.setVelocity(
      normalizedVelocity.x * this.speed,
      normalizedVelocity.y * this.speed,
    );
  }
}

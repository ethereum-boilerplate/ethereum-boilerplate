import Phaser from "phaser";
import { Player } from "./player";
import { PLAYER_KEY, PLAYER_SCALE } from "../shared";
import * as gstate from "../../../gpose/state";
import * as gpose from "../../../gpose/pose";

export class PlayerWithName extends Phaser.GameObjects.Container {
  cursorKeys;
  speed = 150;

  constructor({ scene, x, y, name }) {
    const playerUsername = scene.add
      .text(0, 0, name ?? "", {
        fontFamily: "Arial",
        color: "#FFFEFE",
        stroke: "#030303",
        strokeThickness: 3,
        align: "center",
      })
      .setFontSize(18)
      .setOrigin(0, 1);

    const playerSprite = new Player({
      scene,
      x: 0,
      y: 0,
      key: PLAYER_KEY,
    });
    playerSprite.setScale(PLAYER_SCALE);
    super(scene, x - playerSprite.width / 2, y - playerSprite.height / 2, [
      playerSprite,
      playerUsername,
    ]);
    this.playerSprite = playerSprite;

    // physics
    scene.physics.world.enable(this);
    scene.add.existing(this);
    // this.body.setImmovable(true);

    // input
    this.cursorKeys = scene.input.keyboard.createCursorKeys();
  }

  update(allowSquats = false) {
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
        (allowSquats && curPose === gpose.NDWN):
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

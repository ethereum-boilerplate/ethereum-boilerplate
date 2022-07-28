import Phaser from "phaser";

export class RectObstacle extends Phaser.GameObjects.Rectangle {
  constructor({ scene, x, y }) {
    super(scene, x, y);

    const width = 120;
    const height = 30;
    const color = 0x898988;

    this.obstacleGraphics = this.scene.add.rectangle(
      x,
      y,
      width,
      height,
      color,
    );
    this.scene.physics.world.enable([this.obstacleGraphics]);

    // this.obstacleGraphics.body.setVelocityY(50)
    this.obstacleGraphics.body.setImmovable(true);
  }

  collideWith(obj) {
    this.scene.physics.add.collider(obj, this.obstacleGraphics);
  }

  setVelocityY(vel) {
    this.obstacleGraphics.body.setVelocityY(vel);
  }
}

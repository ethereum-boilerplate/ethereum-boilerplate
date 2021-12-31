import Phaser from "phaser";

export class Player extends Phaser.GameObjects.Image {
    cursorKeys;
    speed = 200;

    constructor({ scene, x, y, key }) {
        super(scene, x, y, key);

        // sprite
        this.setOrigin(0, 0);

        // TODO Add animations
        // this.anims.create({
        //     key: 'idle',
        //     frames: this.anims.generateFrameNumbers(key || '', { start: 0, end: 1 }),
        //     frameRate: 2,
        //     repeat: -1,
        //   });

        // physics
        this.scene.physics.world.enable(this);
        this.body.setCollideWorldBounds(true);

        // input
        this.cursorKeys = scene.input.keyboard.createCursorKeys();

        this.scene.add.existing(this);
    }

    update() {
        // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
        const velocity = new Phaser.Math.Vector2(0, 0);
        // Horizontal movement
        switch (true) {
            case this.cursorKeys?.left.isDown:
                velocity.x -= 1;
                // this.anims.play('left', true);
                break;
            case this.cursorKeys?.right.isDown:
                velocity.x += 1;
                // this.anims.play('right', true);
                break;
            default:
            // do nothing
        }

        // Vertical movement
        switch (true) {
            case this.cursorKeys?.down.isDown:
                velocity.y += 1;
                // this.anims.play('idle', false);
                break;
            case this.cursorKeys?.up.isDown:
                velocity.y -= 1;
                // this.anims.play('up', true);
                break;
            default:
            // do nothing
        }

        // We normalize the velocity so that the player is always moving at the same speed, regardless of direction.
        const normalizedVelocity = velocity.normalize();
        this.body
            .setVelocity(normalizedVelocity.x * this.speed,
                normalizedVelocity.y * this.speed);
    }
}

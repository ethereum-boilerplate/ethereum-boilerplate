import Phaser from "phaser";
import { getGameWidth, getGameHeight } from "../helpers";
import { Player, RectObstacle } from "../objects";
import { PLAYER_KEY, PLAYER_SCALE, GYM_ROOM_SCENE, RUSH } from "../shared";
import { createTextBox } from "./utils/text";
import { mainBgColorNum, highlightTextColorNum } from "../../GlobalStyles";
import { EarnableScene } from "./base-scenes/EarnableScene";
import * as gstate from "../../components/gpose/state";
import * as gpose from "../../components/gpose/pose";
import { RUSH_BG } from "../gym-room-boot/assets";

const SceneConfig = {
  active: false,
  visible: false,
  key: RUSH,
};

// kept for reference
export class RushSceneOld extends EarnableScene {
  constructor() {
    super(SceneConfig);
  }

  init = (data) => {
    this.selectedAvatar = data.selectedAvatar;
    console.log("this.selectedAvatar", this.selectedAvatar);
  };

  exit() {
    this.game.registry.values?.setMinigame(GYM_ROOM_SCENE);
    this.scene.start(GYM_ROOM_SCENE);
  }

  create() {
    // basic props
    const width = getGameWidth(this);
    const height = getGameHeight(this);

    // bg
    this.rushBg = this.add.tileSprite(
      width / 2,
      height / 2,
      width,
      height,
      RUSH_BG,
    );

    // graphics
    const mainGraphics = this.add.graphics();
    mainGraphics.fillStyle(0xff0000, 0.8);
    this.rightCircle = mainGraphics.fillCircle(
      width - width * 0.4,
      height - height * 0.08,
      30,
    );
    this.leftCircle = mainGraphics.fillCircle(
      width - width * 0.6,
      height - height * 0.08,
      30,
    );

    const centerCircleGraphics = this.add.graphics();
    centerCircleGraphics.fillStyle(0x06ff00, 0.8);
    this.centerCircle = centerCircleGraphics.fillCircle(
      width / 2,
      height / 1.4,
      25,
    );

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
    const playerSprite = new Player({
      scene: this,
      x: 0,
      y: 0,
      key: PLAYER_KEY,
    });
    // playerSprite.setOrigin(0.5, 0.5);
    playerSprite.setScale(PLAYER_SCALE);
    // playerSprite.setDepth(1);
    // playerSprite.setBounce(1, 1).setCollideWorldBounds(true);

    this.cursorKeys = playerSprite.cursorKeys;

    const playerUsername = this.add
      .text(0, 0, this.selectedAvatar?.name, {
        fontFamily: InGameFont,
        color: "#FFFEFE",
        stroke: "#030303",
        strokeThickness: 3,
      })
      .setFontSize(18)
      .setOrigin(0, 1);

    const playerContainer = this.add.container(
      width / 2 - playerSprite.width / 2,
      height - height * 0.08 - playerSprite.height / 2,
      [playerSprite, playerUsername],
    );

    this.player = playerContainer;

    this.obstacleGraphics = new RectObstacle({
      scene: this,
      x: width / 2,
      y: height / 2,
    });
    this.obstacleGraphics.collideWith(this.player);

    // this.cameras.main.startFollow(this.player);

    // set initial values
    this.currentSpeed = 0;
    this.flipFlop = false;
    this.last5Ups = new Deque();
    this.distanceTraveled = 0;
    this.startTime = Date.now();
    this.curVel = 0;
    // velocity gauge
    this.scoreBoard = this.add.text(
      width * 0.05,
      height * 0.1,
      "Moves Per Second: 0",
      {
        fill: "#ba3a3a",
        font: "900 20px InGameFont",
      },
    );

    this.scoreBoard2 = this.add.text(width * 0.05, height * 0.15, "Stats", {
      fill: "#48A869",
      font: "900 20px InGameFont",
    });

    this.matchText = this.add.text(width * 0.08, height / 2, "", {
      fill: "#48A869",
      font: "900 20px InGameFont",
    });

    this.lastSpeeds = new Map();
    this.curMove = Date.now();
    this.lastMoveTs = new Date("12-12-2020").getTime();

    this.matched = 0;

    this.cycleStart = Date.now();

    this.blinkStartTime = Date.now();
  }

  calculateCurrentSpeed() {
    const vel =
      this.distanceTraveledInInterval /
      ((Date.now() - this.intervalStartTime) / 1000);
    this.lastSpeeds.set(Date.now(), vel);
    this.intervalStartTime = Date.now();
    this.distanceTraveledInInterval = 0;

    const _median = (vals) => {
      const sorted = vals.sort((a, b) => a - b);
      const half = Math.floor(sorted.length / 2);

      if (sorted.length % 2) return sorted[half];

      return (sorted[half - 1] + sorted[half]) / 2.0;
    };

    const medianVel = this.lastSpeeds.size
      ? _median(Array.from(this.lastSpeeds.values()))
      : 0.0;

    let speedLabel = "IDLE";
    if (medianVel > 0 && medianVel < 0.8) {
      speedLabel = "SLOWLY";
    } else if (medianVel > 0.8 && medianVel < 1.8) {
      speedLabel = "MEDIUM";
    } else if (medianVel > 1.8) {
      speedLabel = "FAST";
    } else if (medianVel > 2.8) {
      speedLabel = "VERY_FAST";
    }
    const factor = medianVel ? medianVel * 2 : 0;
    let boost = 1;
    if (speedLabel === "MEDIUM") {
      boost = 2;
    } else if (speedLabel === "FAST") {
      boost = 3;
    }
    return factor * boost;
  }

  // eslint-disable-next-line no-unused-vars
  update(time, delta) {
    this.obstacleGraphics.setVelocityY(50);
    if ((Date.now() - this.startTime) / 1000 > 3) {
      const vel =
        this.distanceTraveled / ((Date.now() - this.startTime) / 1000);
      this.lastSpeeds.set(Date.now(), vel);
      this.startTime = Date.now();
      this.distanceTraveled = 0;
    }

    this.leftCircle.setAlpha(0.2);
    this.rightCircle.setAlpha(0.2);

    this.centerCircle.setAlpha(0.2);
    const timeNow = Date.now();
    if (Math.round((timeNow - this.startTime) / 1000) === 1) {
      this.centerCircle.setAlpha(0.8);
      this.blinkStartTime = Date.now();
    }

    const medianVel = this.lastSpeeds.size
      ? median(Array.from(this.lastSpeeds.values()))
      : 0.0;

    let speedLabel = "IDLE";
    if (medianVel > 0 && medianVel < 0.8) {
      speedLabel = "SLOWLY";
    } else if (medianVel > 0.8 && medianVel < 1.8) {
      speedLabel = "MEDIUM";
    } else if (medianVel > 1.8) {
      speedLabel = "FAST";
    } else if (medianVel > 2.8) {
      speedLabel = "VERY_FAST";
    }

    //  Scroll the background
    const factor = medianVel ? medianVel * 2 : 0;
    let boost = 1;
    if (speedLabel === "MEDIUM") {
      boost = 2;
    } else if (speedLabel === "FAST") {
      boost = 3;
    }
    this.rushBg.tilePositionY -= factor * boost;

    this.scoreBoard.setText(
      `Avg Moves Per 3 Second: ${medianVel.toFixed(2)} (${speedLabel})`,
    );

    for (const ts of this.lastSpeeds.keys()) {
      const secondsAgo = (Date.now() - ts) / 1000;
      if (secondsAgo > 3) {
        this.lastSpeeds.delete(ts);
      }
    }

    this.handlePlayerMoves(time, delta);

    if (
      this.centerCircle.alpha === 0.8 &&
      this.leftCircle.alpha === 0.8 &&
      medianVel
    ) {
      this.matched += 1;
    }

    // match text logic to consider
    // if (
    //   this.centerCircle.alpha === 0.8 &&
    //   this.leftCircle.alpha === 0.8 &&
    //   medianVel
    // ) {
    //   this.matchText.setText("MATCH!");
    // } else {
    //   this.matchText.setText("");
    // }
  }

  resolveBlinkInterval() {
    const elaspedTiemInSec = (Date.now() - this.cycleStart) / 1000;
    if (elaspedTiemInSec < 10) {
      return 1000;
    } else if (elaspedTiemInSec > 10 && elaspedTiemInSec < 20) {
      return 500;
    } else if (elaspedTiemInSec > 20 && elaspedTiemInSec < 50) {
      return 250;
    }
    if (elaspedTiemInSec > 50) {
      this.cycleStart = Date.now();
    }
    return 1000;
  }

  // eslint-disable-next-line no-unused-vars
  handlePlayerMoves(time, delta) {
    const player = this.player;
    const height = getGameHeight(this);
    if (player.y < height * 0.15) {
      player.y = this.physics.world.bounds.height;
    }
    // time, delta example output
    // {time: 23744.10000000149, delta: 16.65000000074506}

    // calc speed here
    if (!this.last5Ups.isEmpty) {
      const curTime = time;
      // eslint-disable-next-line no-unused-vars
      const lastMoveTimeAgo = (curTime - this.last5Ups.front()) / 1000;
      const medianDeltasBetweenLast5Moves = this.last5Ups.medianDeltas() / 1000;
      this.scoreBoard2.setText(
        `last move seconds ago: ${lastMoveTimeAgo.toFixed(2)}` +
          "\n" +
          `median gap between last 5 moves ${medianDeltasBetweenLast5Moves.toFixed(
            2,
          )}`,
      );
    }

    // maintain queue
    if (this.last5Ups.length >= 5) {
      this.last5Ups.removeRear();
    }

    const curPose = gstate.getPose();
    // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
    // const velocity = new Phaser.Math.Vector2(0, 0);
    // Horizontal movement
    switch (true) {
      case this.cursorKeys?.left.isDown || curPose === gpose.HTL:
        player.x -= 3;
        this.centerCircle.x -= 3;
        this.leftCircle.x -= 3;
        // this.anims.play('left', true);
        break;
      case this.cursorKeys?.right.isDown || curPose === gpose.HTR:
        player.x += 3;
        this.centerCircle.x += 3;
        this.leftCircle.x += 3;
        // this.anims.play('right', true);
        break;
      default:
      // do nothing
    }

    // Vertical movement
    switch (true) {
      case this.cursorKeys?.down.isDown || curPose === gpose.LA_UP:
        if (!this.flipFlop) {
          this.flipFlop = true;
          this.distanceTraveled += 1;
          this.last5Ups.addFront(time);
          this.lastMoveTs = Date.now();
        }
        this.leftCircle.setAlpha(0.8);
        break;
      case this.cursorKeys?.up.isDown ||
        curPose === gpose.RA_UP ||
        curPose === gpose.BA_UP:
        if (!this.flipFlop) {
          this.flipFlop = true;
          this.distanceTraveled += 1;
          this.last5Ups.addFront(time);
          this.lastMoveTs = Date.now();
        }
        this.rightCircle.setAlpha(0.8);
        break;
      default:
        this.flipFlop = false;
      // do nothing
    }

    // const normalizedVelocity = velocity.normalize();
    // player.body.setVelocity(
    //   normalizedVelocity.x * 150,
    //   normalizedVelocity.y * 150,
    // );
  }
}

class Deque {
  constructor() {
    this.items = [];
  }

  get isEmpty() {
    return !this.items.length;
  }

  front() {
    return this.items[0];
  }

  diff() {
    const elems = this.items;
    return elems.slice(1).map((n, i) => {
      return elems[i] - n;
    });
  }

  medianDeltas() {
    return median(this.diff());
  }

  deltaBetweenCurrTimeAndPAssedTimes(curTime) {
    return curTime - this.average();
  }

  rear() {
    return this.items[this.items.length - 1];
  }

  addFront(item) {
    this.items.unshift(item);
  }

  addRear(item) {
    this.items.push(item);
  }

  removeFront() {
    return this.items.shift();
  }

  removeRear() {
    return this.items.pop();
  }

  get length() {
    return this.items.length;
  }
}

const median = (vals) => {
  const sorted = vals.sort((a, b) => a - b);
  const half = Math.floor(sorted.length / 2);

  if (sorted.length % 2) return sorted[half];

  return (sorted[half - 1] + sorted[half]) / 2.0;
};

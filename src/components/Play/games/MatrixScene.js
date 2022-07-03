import Phaser from "phaser";
import { getGameWidth, getGameHeight } from "./helpers";
import { Player } from "./objects";
import { PLAYER_KEY, PLAYER_SCALE, GYM_ROOM_SCENE, MATRIX } from "./shared";
import { FONT, PILL_BLUE, PILL_RED } from "./assets";
import { createTextBox } from "./utils/text";
import { mainBgColorNum, highlightTextColorNum } from "../../../GlobalStyles";
import { EarnableScene } from "./EarnableScene";

const SceneConfig = {
  active: false,
  visible: false,
  key: MATRIX,
};

export class MatrixScene extends EarnableScene {
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
          this.scene.start(MATRIX);
        }
        if (code === Phaser.Input.Keyboard.KeyCodes.ESC) {
          this.exit();
        }
      },
      this,
    );

    // matrix
    const codeRain = {
      width: 60,
      height: 40,
      cellWidth: 32,
      cellHeight: 32,
      getPoints: function (quantity) {
        var cols = new Array(codeRain.width).fill(0);
        var lastCol = cols.length - 1;
        var Between = Phaser.Math.Between;
        var RND = Phaser.Math.RND;
        var points = [];

        for (var i = 0; i < quantity; i++) {
          var col = Between(0, lastCol);
          var row = (cols[col] += 1);

          if (RND.frac() < 0.01) {
            row *= RND.frac();
          }

          row %= codeRain.height;
          row |= 0;

          points[i] = new Phaser.Math.Vector2(32 * col, 32 * row);
        }

        return points;
      },
    };

    this.add.particles(FONT).createEmitter({
      alpha: { start: 1, end: 0.25, ease: "Expo.easeOut" },
      angle: 0,
      blendMode: "ADD",
      emitZone: { source: codeRain, type: "edge", quantity: 2000 },
      frame: Phaser.Utils.Array.NumberArray(8, 58),
      frequency: 100,
      lifespan: 6000,
      quantity: 25,
      scale: -0.5,
      tint: 0x0066ff00,
    });

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
    hintTextBox.start(
      "🤖 Welcome in MetaGymLand Matrix\n\n" +
        "choose\n" +
        "RED PILL or BLUE PILL?\n" +
        "You can fly in this room",
      50,
    );

    // pills
    const redPill = this.physics.add
      .sprite(width * 0.16, height * 0.32, PILL_RED)
      .setName(PILL_RED);
    const bluePill = this.physics.add
      .sprite(width * 0.82, height * 0.32, PILL_BLUE)
      .setName(PILL_BLUE);
    const pillis = [redPill, bluePill];

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
    const onCollide = (avatar, item) => {
      if (item.name === PILL_RED) {
        this.cameras.main.setBackgroundColor("#23BD32");
        hintTextBox.start("🤖", 50);
        const info = createTextBox(
          this,
          width / 2,
          height / 2,
          { wrapWidth: 280 },
          0x010000,
          0x3b6a59,
          "center",
          "#63E778",
        )
          .setOrigin(0.5)
          .setDepth(1)
          .setScrollFactor(0, 0)
          .start(
            "🤖 You have chosen the RED PILL\n" +
              "Good choice!\n\n" +
              "NOW, join our social channels\n" +
              "if you would like to see\n" +
              "how deep the rabbit hole goes [CLICK THIS MESSAGE]",
            50,
          );
        info.setInteractive({ useHandCursor: true });
        info.on("pointerdown", openExternalLink, this);
      } else {
        hintTextBox.start("🤖", 50);
        createTextBox(
          this,
          width / 2,
          height / 2,
          { wrapWidth: 280 },
          0xfffefe,
          highlightTextColorNum,
          "center",
          "#212125",
        )
          .setOrigin(0.5)
          .setDepth(1)
          .setScrollFactor(0, 0)
          .start(
            "🤖 You have chosen\n" + "the BLUE PILL\n\n" + "taking you back...",
            10,
          );
        setTimeout(() => {
          if (this.exit && this.scene.key === MATRIX) {
            this.exit();
          }
        }, 3500);
      }
      pillis.forEach((i) => i.destroy());
    };
    this.physics.add.collider(this.player, pillis, onCollide, null, this);
  }

  update(time, delta) {
    this.player?.update();
  }
}

function openExternalLink() {
  const url = "https://app.metagymland.com/#/socials";
  const s = window.open(url, "_blank");
  if (s && s.focus) {
    s.focus();
  } else if (!s) {
    window.location.href = url;
  }
}

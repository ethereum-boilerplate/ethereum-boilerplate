import Phaser from "phaser";
import {
  TextBox,
  BBCodeText,
  RoundRectangle,
} from "phaser3-rex-plugins/templates/ui/ui-components";

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;

const GetValue = Phaser.Utils.Objects.GetValue;

export const createTextBox = function (
  scene,
  x,
  y,
  config,
  bg = COLOR_PRIMARY,
  stroke = COLOR_LIGHT,
  align = "center",
  txtColor = "white",
) {
  var wrapWidth = GetValue(config, "wrapWidth", 0);
  var fixedWidth = GetValue(config, "fixedWidth", 0);
  var fixedHeight = GetValue(config, "fixedHeight", 0);

  const tBoxCfg = {
    x: x,
    y: y,
    background: getRoundRectangle(scene, bg, stroke),
    text: getBBcodeText(
      scene,
      wrapWidth,
      fixedWidth,
      fixedHeight,
      align,
      txtColor,
    ),
    // draggable: true,
    space: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
      icon: 0,
      text: 10,
    },
  };
  const textBox = new TextBox(scene, tBoxCfg);
  scene.add.existing(textBox);
  textBox.setOrigin(0).layout();
  return textBox;
};

const getRoundRectangle = function (scene, bg, stroke) {
  const rect = new RoundRectangle(scene, 0, 0, 2, 2, 20, bg);
  rect.setStrokeStyle(4, stroke);
  scene.add.existing(rect);
  return rect;
};

const getBBcodeText = function (
  scene,
  wrapWidth,
  fixedWidth,
  fixedHeight,
  align,
  txtColor,
) {
  const bbTextCfg = {
    fixedWidth: fixedWidth,
    fixedHeight: fixedHeight,
    align: align,
    fontSize: "18px",
    lineSpacing: 5,
    wrap: {
      mode: "word",
      width: wrapWidth,
    },
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
    color: txtColor,
    maxLines: 10,
  };
  const txt = new BBCodeText(scene, 0, 0, "", bbTextCfg);
  scene.add.existing(txt);
  return txt;
};

import { EarnableScene } from "./EarnableScene";
import Phaser from "phaser";
import { GYM_ROOM_SCENE } from "../../shared";

type handleExitParams = {
  thisSceneKey: string;
  callbackOnExit?: () => void;
};

export class SceneInMetaGymRoom extends EarnableScene {
  selectedAvatar: any;

  init = (data: any) => {
    this.selectedAvatar = data.selectedAvatar;
  };

  exit() {
    this.game.registry.values?.setMinigame(GYM_ROOM_SCENE);
    this.scene.start(GYM_ROOM_SCENE);
  }

  handleExit({ thisSceneKey, callbackOnExit }: handleExitParams) {
    // constrols
    this.input.keyboard.on(
      "keydown",
      async (event: any) => {
        const code = event.keyCode;
        if (
          code === Phaser.Input.Keyboard.KeyCodes.ESC ||
          code === Phaser.Input.Keyboard.KeyCodes.X
        ) {
          if (callbackOnExit) {
            callbackOnExit();
          }
          await this.updateXP();
        }
        if (code === Phaser.Input.Keyboard.KeyCodes.X) {
          this.scene.start(thisSceneKey);
        }
        if (code === Phaser.Input.Keyboard.KeyCodes.ESC) {
          this.exit();
        }
      },
      this,
    );
  }
}

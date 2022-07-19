import Phaser from "phaser";
import { highlightTextColorNum, mainBgColorNum } from "../../../GlobalStyles";
import { getGameWidth, getGameHeight } from "./helpers";
import { createTextBox } from "./utils/text";

const columnName = "mbmtBalance";

export class EarnableScene extends Phaser.Scene {
  gameUser() {
    // add refresh data logic
    // same in rewards page
    const avatarUserProp = this.game.registry.values?.avatar?.user;
    const avatarHasUser = Boolean(avatarUserProp);
    const moralisUserPassedToRegistry = this.game.registry.values?.user;
    // if avatar.user is null
    // it means we are using Demo GymBuddy
    return avatarHasUser ? moralisUserPassedToRegistry : null;
  }

  currentXPBalance() {
    return this.gameUser()?.get(columnName);
  }

  async updateXP() {
    if (!this.score || this.score === 0) return;
    const inMiniGameScore = this.score;
    const usr = this.gameUser();
    if (usr && usr.set && usr.get) {
      const xpSoFar = usr.get(columnName) || 0;
      const inMiniGameXP = inMiniGameScore * 0.1;
      const newXP = xpSoFar + inMiniGameXP;
      usr.set(columnName, newXP);
      const width = getGameWidth(this);
      const height = getGameHeight(this);
      const gettingTokensText = createTextBox(
        this,
        width / 2,
        height / 2,
        { wrapWidth: 280 },
        mainBgColorNum,
        highlightTextColorNum,
      );
      gettingTokensText.setOrigin(0.5).setDepth(1);
      gettingTokensText.start("🤖 Getting $MBMT...");
      await usr.save();
    }
  }
}

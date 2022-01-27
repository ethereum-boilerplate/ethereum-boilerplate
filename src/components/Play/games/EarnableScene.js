import Phaser from "phaser";
import {
    highlightTextColorNum,
    mainBgColorNum,
} from "../../../GlobalStyles";
import { getGameWidth, getGameHeight } from "./helpers";
import { createTextBox } from "./utils/text";

const columnName = 'mglXP';

export class EarnableScene extends Phaser.Scene {
    gameUser() {
        return this.game.registry.values?.avatar?.user;
    }

    currentXPBalance() {
        return this.gameUser()?.get(columnName);
    }

    async updateXP() {
        if (this.score === 0) return;
        const inMiniGameScore = this.score;
        const usr = this.gameUser();
        if (usr && usr.set && usr.get) {
            const xpSoFar = usr.get(columnName);
            const inMiniGameXP = inMiniGameScore * 0.1;
            const newXP = xpSoFar + inMiniGameXP;
            usr.set(columnName, newXP);
            const width = getGameWidth(this);
            const height = getGameHeight(this);
            const gettingTokensText = createTextBox(this,
                width / 2,
                height / 2,
                { wrapWidth: 280 },
                mainBgColorNum,
                highlightTextColorNum
            )
            gettingTokensText.setOrigin(0.5).setDepth(1);
            gettingTokensText.start("🤖 Getting $MBMT...");
            const saveMglXPResult = await usr.save();
            console.log('saveMglXPResult', saveMglXPResult);
        }
    }
}

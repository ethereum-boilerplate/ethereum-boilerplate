import Phaser from "phaser";
import { getGameWidth, getGameHeight } from "./helpers";
import { Player } from "./objects";
import { PLAYER_KEY, PLAYER_SCALE, GYM_ROOM_SCENE, CHART_SQUATS } from "./shared";
import {
    PUMP_OPEN,
    PUMP_CLOSED,
    BTC,
    RED_WOJAK,
    GREEN_WOJAK,
} from "./assets";
import { createTextBox } from "./utils/text";
import party from "party-js";
import {
    highlightTextColorNum,
    mainBgColorNum,
} from "../../../GlobalStyles";
import * as gstate from "../../gpose/state";
import * as gpose from "../../gpose/pose";
import { EarnableScene } from './EarnableScene';

const SceneConfig = {
    active: false,
    visible: false,
    key: CHART_SQUATS,
};

// game state
const nonState = 0;
const wonState = 1;
const loseState = 2;

const chartTimeInterval = 1;
const playerScale = PLAYER_SCALE * 1.5;
const chartLineWidth = 3;

const changeFactor = 0.3;
const longColor = 0x00ff00;
const shortColor = 0xaa0000;

let intervals = [];

export class ChartSquats extends EarnableScene {
    constructor() {
        super(SceneConfig);
    }

    init = (data) => {
        this.selectedAvatar = data.selectedAvatar;
        console.log('selectedAvatar', this.selectedAvatar);
    };

    drawGround(width, height) {
        const groundHeight = height * 0.02;
        const rect = new Phaser.Geom.Rectangle(0, height - groundHeight, width, groundHeight);
        this.graphics
            .fillStyle(0xB8ABB2, 1)
            .fillRectShape(rect);
        return rect;
    }

    drawBG(color = 0xEEF2F4) {
        const width = getGameWidth(this);
        const height = getGameHeight(this);
        const rect = new Phaser.Geom.Rectangle(0, 0, width, height);
        this.graphics
            .fillStyle(color)
            .fillRectShape(rect);
        return rect;
    }

    create(data) {
        const webCamContainer = document.getElementById("pose-det-webcam-container");
        if (webCamContainer) {
            webCamContainer.style.marginLeft = '40rem';
        }
        // basic props        
        const width = getGameWidth(this);
        const height = getGameHeight(this);

        this.cameras.main.setBackgroundColor("#202020");

        this.createTime = Date.now();
        this.frameTime = Date.now();
        this.wonState = nonState;
        this.score = data.score || 0;

        // exit or restart
        this.input.keyboard.on('keydown', async (event) => {
            const code = event.keyCode;
            if (code == Phaser.Input.Keyboard.KeyCodes.ESC ||
                code == Phaser.Input.Keyboard.KeyCodes.X) {
                if (webCamContainer) {
                    webCamContainer.style.marginLeft = '';
                }
                intervals.forEach(i => {
                    clearInterval(i);
                });
                await this.updateXP();
            }
            if (code == Phaser.Input.Keyboard.KeyCodes.ESC) {
                this.scene.start(GYM_ROOM_SCENE);
            }
            if (code == Phaser.Input.Keyboard.KeyCodes.X) {
                this.scene.start(CHART_SQUATS, {
                    score: this.score
                });
            }
        }, this);

        this.graphics = this.add.graphics();
        const graphics = this.graphics;
        // background
        // this.drawBG();
        const ground = this.drawGround(width, height);

        // Add the scoreboard
        this.scoreBoard = this.add.text(
            width * 0.05, height * 0.015,
            `SCORE: ${this.score}`, {
            fill: '#FFF',
            font: '900 20px Orbitron',
        });
        this.add.text(
            width * 0.05, height * 0.04,
            "press ESC to go back", {
            fill: '#FFF',
            font: '900 17px Orbitron',
        });

        // generate stock data
        this.generateFakeStocksData();
        // draw stock data
        graphics.lineStyle(chartLineWidth, 0x00ff00);
        graphics.beginPath();
        this.drawChart();
        graphics.strokePath();
        const startingPath = graphics.closePath();

        // all time law in chart line
        const atlline = new Phaser.Geom.Line(0, this.atl, width, this.atl);
        graphics.lineStyle(1, 0x848484, 0.8);
        graphics.strokeLineShape(atlline);

        // BTC
        this.btc = this.add.image(width * .1, height * .9, BTC).setScale(0.4);

        const playerPumpX = width - (width * .2);
        // pump
        this.pump = this.add.sprite(0, 0, PUMP_OPEN)
            .setOrigin(0.5, 0)
            .setScale(playerScale);
        this.pump.x = playerPumpX;
        this.pump.y = ground.y - this.pump.height * playerScale;

        // player
        this.player = new Player({ scene: this, x: 0, y: 0, key: PLAYER_KEY, })
            .setDepth(2).setOrigin(0.5, 1).setScale(playerScale);
        this.player.x = playerPumpX;
        this.player.y = this.pump.y;
        this.playerInitialY = this.player.y;

        // hint text
        this.hintTextBox = createTextBox(this,
            width / 2, height / 2,
            { wrapWidth: 280 },
            mainBgColorNum,
            highlightTextColorNum
        ).setOrigin(0.5)
        const hintTextBox = this.hintTextBox;
        hintTextBox.setDepth(1);
        hintTextBox.setScrollFactor(0, 0);
        hintTextBox.start(
            "🤖 BTC price will start go down!\n\n" +
            "But, you can PUMP IT UP\n\n" +
            "By doing SQUATS!"
            , 10);
        // active chart start positions
        this.x1Pos = this.chartStopX;
        this.x2Pos = this.x1Pos + chartLineWidth;
    }

    youWonOrLosenMsg(msg, bgcolor = mainBgColorNum) {
        const width = getGameWidth(this);
        const height = getGameHeight(this);

        const youWonText = createTextBox(this,
            width / 2,
            height / 2,
            { wrapWidth: 280 },
            bgcolor,
            highlightTextColorNum
        )
        youWonText.setOrigin(0.5).setDepth(1).setScrollFactor(0, 0);
        youWonText.start(msg, 10);
    }

    generateFakeStocksData() {
        const width = getGameWidth(this);
        const height = getGameHeight(this);
        // specify price range
        const minPossible = height / 1.05
        const maxPossible = height * .3
        const chartStartX = width * .03
        this.chartStopX = width * .4
        const chartStopX = this.chartStopX
        this.priceData = [
            { x: chartStartX, y: height / 1.7 }
        ];
        const priceData = this.priceData;
        const volatility = 0.02;
        for (let i = 0, x = chartStartX; x <= chartStopX; x += chartTimeInterval, i++) {
            const rnd = Math.random();
            let changePercent = 2 * volatility * rnd;
            if (changePercent > volatility)
                changePercent -= (2 * volatility);
            let oldPrice = priceData[i].y;
            let changeAmount = oldPrice * changePercent;
            let newPrice = oldPrice + changeAmount;

            // if price range is to far set it to middle
            if (newPrice >= minPossible || newPrice <= maxPossible) {
                newPrice = height / 1.5;
            }
            priceData.push({
                x: x,
                y: newPrice,
            });
        }
        const prices = priceData.map(p => p.y);
        this.atl = Math.max.apply(Math, prices);
        this.curPrice = priceData[priceData.length - 1].y
        this.startingPrice = this.curPrice;
    }

    drawChart() {
        for (const p of this.priceData) {
            this.graphics.lineTo(p.x, p.y);
        }
    }

    update(time, delta) {
        const initilaHintDealy = 4000;
        const timeFromCreation = Date.now() - this.createTime;
        // counter
        if (timeFromCreation > initilaHintDealy && timeFromCreation < initilaHintDealy + 1000) {
            this.hintTextBox.setText("...3")
        } else if (timeFromCreation > initilaHintDealy + 1000 && timeFromCreation < initilaHintDealy + 2000) {
            this.hintTextBox.setText("...2")
        } else if (timeFromCreation > initilaHintDealy + 2000 && timeFromCreation < initilaHintDealy + 3000) {
            this.hintTextBox.setText("...1")
        } else if (timeFromCreation > initilaHintDealy + 2000 && timeFromCreation < initilaHintDealy + 4000) {
            this.hintTextBox.setText("🤖 GO!")
        } else if (timeFromCreation > initilaHintDealy + 4000) {
            if (this.hintTextBox) this.hintTextBox.destroy();
            const width = getGameWidth(this);
            const height = getGameHeight(this);

            if (this.wonState == wonState || this.wonState == loseState) {
                this.player.y = this.playerInitialY;
                this.pump.setTexture(PUMP_OPEN);
                return;
            }

            // it may be counter intuitive but:
            // 0 is top, height (positive value) is bottom
            if (this.curPrice >= height) {
                this.wonState = loseState;
                this.add.image(width * .8, height * .5, RED_WOJAK);
                this.cameras.main.setBackgroundColor("#4a0909");
                this.btc.setTint(0x3d3d3d);
                const msg = "🤖 You have been liquidated 😢\n\n" +
                    "BTC price had a MASSIVE dip" +
                    "\n\n" +
                    "Press X to 🎮 restart\n" +
                    "Press ESC to exit";
                this.youWonOrLosenMsg(msg, 0x1c0707);
                return;
            }

            if (this.curPrice <= 0) {
                this.wonState = wonState;
                const canvasParent = document.querySelector('#phaser-app canvas');
                this.cameras.main.backgroundColor.setTo(32, 191, 150);
                this.score += 1;
                this.scoreBoard.setText(`SCORE: ${this.score}`);
                this.add.image(width * .8, height * .5, GREEN_WOJAK);
                if (canvasParent) party.confetti(canvasParent);
                intervals.push(setInterval(() => {
                    if (canvasParent) party.confetti(canvasParent);
                }, 1000));
                const msg = "🤖 You saved the BTC price 🎉\n\n" +
                    "It went to the MOOOON" +
                    "\n\n" +
                    "Press X to 🎮 restart\n" +
                    "Press ESC to exit";
                this.youWonOrLosenMsg(msg, 0x0048ff);
                return;
            }

            const curPose = gstate.getPose();
            const player = this.player;

            if (player.cursorKeys?.down.isDown || curPose === gpose.NDWN
                || curPose === gpose.BA_UP) {
                this.player.y = this.playerInitialY;
                player.y += 40;
                this.pump.setTexture(PUMP_CLOSED);
                // price up
                this.curPrice -= 4 * changeFactor
            } else {
                this.player.y = this.playerInitialY;
                this.pump.setTexture(PUMP_OPEN);
                // price down
                this.curPrice += changeFactor * 0.7;
            }
            // draw chart
            if (Date.now() - this.frameTime > 1500) {
                this.x1Pos = this.x1Pos + chartLineWidth + 2;
                this.x2Pos = this.x1Pos + chartLineWidth;
                this.frameTime = Date.now();
            }

            const x1Pos = this.x1Pos;
            const x2Pos = this.x2Pos;
            if (this.curPrice > this.atl) {
                this.graphics.lineStyle(chartLineWidth, shortColor);
            } else {
                this.graphics.lineStyle(chartLineWidth, longColor);
            }
            this.graphics.lineBetween(
                x1Pos,
                this.curPrice,
                x2Pos,
                this.curPrice);
            // for final chart
            this.priceData.push(
                { x: x1Pos, y: this.curPrice }
            )
        }
    }
}

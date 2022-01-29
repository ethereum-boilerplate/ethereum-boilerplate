import React, { useContext, useEffect } from "react";
import { MiniGameCtx } from "index";
import { MGLSmallLogo } from "Logos";
import { SettingFilled, InfoCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { mainBgColor } from "../../../GlobalStyles";
import { Popover } from 'antd';
import {
    GYM_ROOM_SCENE,
    SPACE_STRETCH_SCENE,
    FLY_FIT_SCENE,
    CHART_SQUATS,
    MATRIX
} from "./shared";
import moveDownPng from "./assets/images/move_down.png";
import moveUpPng from "./assets/images/move_up.png";
import moveUp2Png from "./assets/images/move_up2.png";
import moveLeftPng from "./assets/images/move_left.png";
import moveRightPng from "./assets/images/move_right.png";
import pumpThePricePng from "./assets/images/pump_the_price.png";
import moveForwPng from "./assets/images/move_forward.png";
import turnLeftPng from "./assets/images/turn_left.png";
import turnRightPng from "./assets/images/turn_right.png";
import gravityPng from "./assets/images/gravity.png";

const imgInDiv = (png) => {
    return (
        <div style={{ padding: "0.3rem" }}>
            <img src={png} alt="" />
        </div>);
}

const gravityImg = imgInDiv(gravityPng);
const moveUpImg = imgInDiv(moveUpPng);
const moveUp2Img = imgInDiv(moveUp2Png);
const moveDownImg = imgInDiv(moveDownPng);
const moveLeftImg = imgInDiv(moveLeftPng);
const moveRightImg = imgInDiv(moveRightPng);
const pumpThePriceImg = imgInDiv(pumpThePricePng);

const moveForwImg = imgInDiv(moveForwPng);
const turnLeftImg = imgInDiv(turnLeftPng);
const turnRightImg = imgInDiv(turnRightPng);

const beCreative = <div style={{ padding: "0.3rem" }}>
    <hr />
    <div><b>Be creative!</b></div>
    <div>Other simmilar moves</div>
    <div>will workl as well</div>
</div>;


const MiniGameInstructions = new Map([
    [GYM_ROOM_SCENE, {
        title: (
            <>
                <p>How to play</p>
                <p><b>MetaGym room</b></p>
            </>), content: (
                <>
                    {moveUp2Img}
                    {moveDownImg}
                    {moveLeftImg}
                    {moveRightImg}
                    {beCreative}
                </>
            )
    }],
    [SPACE_STRETCH_SCENE, {
        title: (
            <>
                <p>How to play</p>
                <p><b>Space stretch</b></p>
            </>)
        , content: (
            <>
                {moveUpImg}
                {gravityImg}
                {moveLeftImg}
                {moveRightImg}
                {beCreative}
            </>
        )
    }],
    [FLY_FIT_SCENE, {
        title: (
            <>
                <p>How to play</p>
                <p><b>Fly fit</b></p>
            </>), content: (
                <>
                    {moveForwImg}
                    {turnLeftImg}
                    {turnRightImg}
                    {beCreative}
                </>
            )
    }],
    [CHART_SQUATS, {
        title: (
            <>
                <p>How to play</p>
                <p><b>Chart squats</b></p>
            </>), content: (
                <>
                    {pumpThePriceImg}
                    Do squats Or Both arms up 
                    {beCreative}
                </>
            )
    }],
]);

MiniGameInstructions.set(MATRIX, MiniGameInstructions.get(GYM_ROOM_SCENE));

const SideMenu = () => {
    const { minigame } = useContext(MiniGameCtx);

    useEffect(
        () => {
            const howToIco = document.getElementById("howto-menu-ico");
            if (howToIco && howToIco.click) {
                howToIco.click();
            }
        },
        []
    );

    const miniGameInstructions = () => {
        const i = MiniGameInstructions.get(minigame);
        return (<>
            <Popover
                style={{
                    textAlign: "center",
                }}
                placement="topRight"
                title={i?.title}
                content={i?.content}
                trigger="click">
                <div
                    id={"howto-menu-ico"}
                    style={{
                        textAlign: "center",
                        cursor: "pointer",
                    }}>
                    <InfoCircleFilled style={{
                        fontSize: "20px",
                        color: "#FFF",
                    }} />
                    how to
                </div>
            </Popover>
        </>);
    }

    return (<div
        style={{
            width: "60px",
            padding: "1rem",
            height: "100%",
            position: "fixed",
            left: "0",
            top: "0",
            backgroundColor: mainBgColor,
        }}
    >
        <div style={{
            width: "inherit",
            marginLeft: "-3px",
            marginBottom: "1rem",
        }}>
            <Link to="/">
                <MGLSmallLogo
                    width={"35"}
                    height={"35"}
                    viewBox={"0 0 16 16"}
                />
            </Link>
        </div>
        <div style={{
            textAlign: "center",
        }}>
            <Link to="/play-setup">
                <SettingFilled style={{
                    fontSize: "22px",
                    color: "#FFF",
                }} />
            </Link>
        </div>
        <div style={{
            marginTop: "2rem",
        }}>
            {miniGameInstructions()}
        </div>
    </div>);
}

export default SideMenu;

import React, { useContext } from "react";
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

const MiniGameInstructions = new Map([
    [GYM_ROOM_SCENE, {
        title: "Gym room", content: (
            <>
                <div style={{ padding: "0.3rem" }}>
                    <span style={{ backgroundColor: "aqua", padding: "0.2rem", borderRadius: "3px" }}>
                        right arm up</span>
                    &nbsp;|&nbsp;
                    <span style={{ backgroundColor: "antiquewhite", padding: "0.2rem", borderRadius: "3px" }}>
                        both arms up</span>&nbsp;
                    <span style={{ color: "crimson" }}>MOVE UP</span>
                </div>
                <div style={{ padding: "0.3rem" }}>
                    <span style={{ backgroundColor: "antiquewhite", padding: "0.2rem", borderRadius: "3px" }}>
                        left arm up</span>
                    &nbsp;
                    <span style={{ color: "blue" }}>MOVE DOWN</span>
                </div>
                <div style={{ padding: "0.3rem" }}>
                    <span style={{ backgroundColor: "aqua", padding: "0.2rem", borderRadius: "3px" }}>
                        tilt your head to left</span>
                    &nbsp;
                    <span style={{ color: "crimson" }}>MOVE LEFT</span>
                </div>
                <div style={{ padding: "0.3rem" }}>
                    <span style={{ backgroundColor: "antiquewhite", padding: "0.2rem", borderRadius: "3px" }}>
                        tilt your head to right</span>
                    &nbsp;
                    <span style={{ color: "blue" }}>MOVE RIGHT</span>
                </div>
                <div style={{ padding: "0.3rem" }}>
                    Be creative!<br />
                    Other simmilar moves will workl as well
                </div>
            </>
        )
    }],
    [SPACE_STRETCH_SCENE, {
        title: "Space stretch", content: (
            <>
                <div style={{ padding: "0.3rem" }}>
                    <span style={{ backgroundColor: "antiquewhite", padding: "0.2rem", borderRadius: "3px" }}>
                        both arms up</span>&nbsp;
                    <span style={{ color: "crimson" }}>MOVE UP</span>
                </div>
                <div style={{ padding: "0.3rem" }}>
                    <span style={{ backgroundColor: "antiquewhite", padding: "0.2rem", borderRadius: "3px" }}>
                        gravity</span>
                    &nbsp;
                    <span style={{ color: "blue" }}>MOVE DOWN</span>
                </div>
                <div style={{ padding: "0.3rem" }}>
                    <span style={{ backgroundColor: "aqua", padding: "0.2rem", borderRadius: "3px" }}>
                        tilt your head to left</span>
                    &nbsp;
                    <span style={{ color: "crimson" }}>MOVE LEFT</span>
                </div>
                <div style={{ padding: "0.3rem" }}>
                    <span style={{ backgroundColor: "antiquewhite", padding: "0.2rem", borderRadius: "3px" }}>
                        tilt your head to right</span>
                    &nbsp;
                    <span style={{ color: "blue" }}>MOVE RIGHT</span>
                </div>
                <div style={{ padding: "0.3rem" }}>
                    Be creative!<br />
                    Other simmilar moves will workl as well
                </div>
            </>
        )
    }],
    [FLY_FIT_SCENE, {
        title: "Fly fit", content: (
            <>
                <div style={{ padding: "0.3rem" }}>
                    <span style={{ backgroundColor: "antiquewhite", padding: "0.2rem", borderRadius: "3px" }}>
                        both arms up</span>&nbsp;
                    <span style={{ color: "crimson" }}>MOVE FORWOARD</span>
                </div>
                <div style={{ padding: "0.3rem" }}>
                    <span style={{ backgroundColor: "aqua", padding: "0.2rem", borderRadius: "3px" }}>
                        tilt your body and head to left</span>
                    &nbsp;
                    <span style={{ color: "crimson" }}>TURN LEFT</span>
                </div>
                <div style={{ padding: "0.3rem" }}>
                    <span style={{ backgroundColor: "antiquewhite", padding: "0.2rem", borderRadius: "3px" }}>
                        tilt your body and head to right</span>
                    &nbsp;
                    <span style={{ color: "blue" }}>TURN RIGHT</span>
                </div>
                <div style={{ padding: "0.3rem" }}>
                    Be creative!<br />
                    Other simmilar moves will workl as well
                </div>
            </>
        )
    }],
    [CHART_SQUATS, {
        title: "Chart squats", content: (
            <>
                <div style={{ padding: "0.3rem" }}>
                    <span style={{ backgroundColor: "antiquewhite", padding: "0.2rem", borderRadius: "3px" }}>
                        do squat</span>&nbsp;
                    <span style={{ color: "crimson" }}>PUMP THE PRICE UP</span>
                    <div style={{ padding: "0.3rem" }}>
                        <span style={{ backgroundColor: "aqua", padding: "0.2rem", borderRadius: "3px" }}>
                            do nothing</span>
                        &nbsp;
                        <span style={{ color: "crimson" }}>PRICE WIL GO DOWN</span>
                    </div>
                </div>
            </>
        )
    }],
]);

MiniGameInstructions.set(MATRIX, MiniGameInstructions.get(GYM_ROOM_SCENE));

const SideMenu = () => {
    const { minigame } = useContext(MiniGameCtx);

    const miniGameInstroctions = () => {
        const i = MiniGameInstructions.get(minigame);
        return (<>
            <Popover placement="right"
                title={i?.title}
                content={i?.content}
                trigger="click">
                <InfoCircleFilled style={{
                    fontSize: "20px",
                    color: "#FFF",
                }} />
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
            marginLeft: "-5px",
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
        <div>
            <Link to="/play-setup">
                <SettingFilled style={{
                    fontSize: "22px",
                    color: "#FFF",
                }} />
            </Link>
        </div>
        <div style={{
            marginTop: "7rem",
        }}>
            {miniGameInstroctions()}
        </div>
    </div>);
}

export default SideMenu;

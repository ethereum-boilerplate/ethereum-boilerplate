import React, { useState, useEffect, useContext } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import { GymRoomScene } from "./GymRoomScene";
import { SpaceStretchScene } from "./SpaceStretchScene";
import { FlyFitScene } from "./FlyFitScene";
import { CosmicCardioScene } from "./CosmicCardioScene";
import { BootScene } from "./BootScene";
import { WebcamCtx } from "index";
import PoseDetWebcam from "components/Webcam/PoseDetWebcam";
import { MGLSmallLogo } from "Logos";
import { SettingFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const menuHeight = 60;

const setWidthAndHeight = () => {
    let width = window.innerWidth;
    // let height = width / 1.778;
    let height = window.innerHeight;

    if (height > window.innerHeight) {
        height = window.innerHeight;
        // keeping for reference
        // width = height * 1.778;
    }
    return [width, height - menuHeight];
}

const getConfig = (mainScene) => {
    const [width, height] = setWidthAndHeight();
    const Scenes = [BootScene, mainScene,
        SpaceStretchScene, FlyFitScene, CosmicCardioScene];

    return {
        type: Phaser.AUTO,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                // debug: "debug"
            },
        },
        scale: {
            mode: Phaser.Scale.NONE,
            width,
            height,
        },
        scene: Scenes,
        // audio: {
        //     noAudio: true
        // },
        render: {
            pixelArt: true
        },
        fps: {
            target: 60,
        },
    }
}

const GymRoom = ({ avatar, useWebcam = true }) => {
    console.log('GymRoom avatar', avatar);
    // run game
    const [initialised, setInitialised] = useState(true);
    const [config, setConfig] = useState();
    const { webcamId, webcamRef } = useContext(WebcamCtx);

    console.log('GymRoom webcamRef', webcamRef);
    console.log('GymRoom webcamId', webcamId);

    const startGame = () => {
        setConfig({
            ...getConfig(GymRoomScene),
            callbacks: {
                preBoot: (game) => {
                    // Makes sure the game doesnt create another game on rerender
                    setInitialised(false);
                    console.log('Updating game registry', avatar);
                    game.registry.merge({
                        avatar,
                    });
                },
            },
        });
    };

    useEffect(() => {
        startGame();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (<IonPhaser
        initialize={initialised}
        game={config}
        id="phaser-app"
        style={{
            position: "absolute",
            top: "0px",
            bottom: "0px",
            width: "100%",
            height: "100%",
            zIndex: "1",
        }}
    >
        {/* side menu */}
        <div
            style={{
                width: "60px",
                padding: "1rem",
                height: "100%",
                position: "fixed",
                left: "0",
                top: "0",
                backgroundColor: "#003962",
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
        </div>
        {useWebcam && (<div style={{
            position: "fixed",
            top: "1%",
            left: "45%",
            width: "220px",
            height: "auto",
        }} >
            <PoseDetWebcam
                sizeProps={{
                    width: "100%",
                    height: "auto",
                }}
                styleProps={{
                    boxShadow: "0 0 10px 2px #202020",
                }}
            />
        </div>)}
    </IonPhaser>);
};

export default GymRoom;

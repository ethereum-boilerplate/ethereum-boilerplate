import React, { useContext } from "react";
import { AvatarCtx } from "index";
import { Redirect } from "react-router";
import GymRoom from "./games/GymRoom";

const PlayPage = () => {
    const [avatar, setAvatar] = useContext(AvatarCtx);
    if (!avatar) {
        return <Redirect to="/avatars" />;
    }
    return (<GymRoom avatar={avatar} />);
}

export default PlayPage;

import React, { useContext } from "react";
import Text from "antd/lib/typography/Text";
import { AvatarCtx } from "index";
import { Redirect } from "react-router";
import GymRoom from "./games/GymRoom";

const PlayPage = () => {
    const [avatar, setAvatar] = useContext(AvatarCtx);
    if (!avatar) {
        return <Redirect to="/avatars" />;
    }

    console.log('Play With Avatar', avatar);
    return (<>
        <div style={{
            fontFamily: "Source Serif Pro",
        }}>
            <Text>
                <h1>Welcome in Meta Gym Land</h1>
            </Text>
        </div>
        <div style={{
            flexBasis: "100%",
            height: "0px",
        }}>
            {/* break duv in flex box */}
        </div>
        <GymRoom avatar={avatar} />
    </>);
}

export default PlayPage;

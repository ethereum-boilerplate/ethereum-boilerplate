import React, { useContext } from "react";
import { useParams } from "react-router";
import { AvatarCtx } from "index";
import { Redirect } from "react-router";
import GymRoom from "./GymRoom";

const PlayPage = () => {
  const [avatar] = useContext(AvatarCtx);
  const { miniGameId } = useParams();
  if (!avatar) {
    return <Redirect to="/avatars" />;
  }
  return (
    <>
      <GymRoom avatar={avatar} miniGameId={miniGameId} />
    </>
  );
};

export default PlayPage;

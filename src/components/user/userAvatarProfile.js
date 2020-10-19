import React from "react";
import { useMediaQuery } from "@material-ui/core";
import atoms from "../instapaper/components/atoms";
import theme from "../instapaper/theme/instapaper/theme";

const { Avatar } = atoms;

export default function UserAvatarProfile({ user }) {
  // console.log("UserAvatarProfile", user);
  const upSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });
  return (
    <Avatar
      ultraLarge={upSm}
      medium={!upSm}
      style={{ margin: "auto" }}
      alt="My profile"
      src={user ? user.photoURL : ""}
    >
      Photo
    </Avatar>
  );
}

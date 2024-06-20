//client/src/components/UserCard/UserAvatar.jsx
import React, { useContext } from "react";
import { Avatar } from "@mui/material";
import { AuthContext } from "../../context/auth.context";
import PersonIcon from "@mui/icons-material/Person";

const UserAvatar = () => {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <Avatar
      src={isLoggedIn && user ? user.imgUrl : ""}
      alt={isLoggedIn && user ? user.name : ""}
      sx={{
        width: "80px !important",
        height: "80px !important",
        border: "1px solid black",
        borderRadius: "0 !important",
        marginRight: "1rem",
        backgroundColor: isLoggedIn ? "transparent" : "gray", // Default background color for logged out state
      }}
    >
      {!isLoggedIn && <PersonIcon />}{" "}
      {/* Display default icon when logged out */}
    </Avatar>
  );
};
export default UserAvatar;

//client/src/components/Header/AvatarMenu.jsx
import React, { useState, useContext, useEffect } from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import SquareIcon from "@mui/icons-material/Square";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Settings from "@mui/icons-material/Settings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import { AuthContext } from "../../context/auth.context";
import "./Header.css";

const AvatarMenu = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logOutUser();
    handleClose();
  };

  useEffect(() => {
    if (!user) {
      console.log("user doesn't exist");
    } else {
      console.log("USERDATA", user);
    }
  }, [user]);

  return (
    <div>
      <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
        <Avatar
          className="avatarButton"
          src={user ? user.imgUrl : "/NoUser.jpg"}
          alt={user ? user.name : "Default User"}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            // filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            border: "1px solid #222222",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {isLoggedIn ? (
          <div>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
              {user.email}
            </Typography>
            <Divider />
            <MenuItem component={Link} to="/">
              <ListItemIcon>
                <SquareIcon fontSize="small" />
              </ListItemIcon>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/profile">
              <ListItemIcon>
                <AccountCircle fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem component={Link} to="/signup">
              <ListItemIcon>
                <LockOpenIcon fontSize="small" />
              </ListItemIcon>
              Sign Up
            </MenuItem>
            <MenuItem component={Link} to="/login">
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              Login
            </MenuItem>
          </div>
        )}
        <MenuItem component={Link} to="/settings">
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AvatarMenu;

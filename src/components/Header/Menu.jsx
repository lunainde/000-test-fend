//client/src/components/Menu/Menu.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import SquareIcon from "@mui/icons-material/Square";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  useTheme,
} from "@mui/material";

const menuItems = [
  { text: "Home", icon: <SquareIcon />, link: "/" },
  { text: "StartUps", icon: <StorefrontOutlinedIcon />, link: "/startups" },
  { text: "Insights", icon: <ClassOutlinedIcon />, link: "/posts" },
  {
    text: "Bookmarks",
    icon: <BookmarkBorderOutlinedIcon />,
    link: "/bookmarks",
  },
  { text: "Post", icon: <EditNoteOutlinedIcon />, link: "/new-post" },
  { text: "Feedback", icon: <FeedbackOutlinedIcon />, link: "/feedback" },
  {
    text: "Invest",
    icon: <WorkOutlineOutlinedIcon />,
    link: "https://www.gr33nbase.io",
    external: true,
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-main",
      theme.palette.primary.main
    );
    document.documentElement.style.setProperty(
      "--primary-dark",
      theme.palette.primary.dark
    );
  }, [theme]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding className="listItem">
            {item.external ? (
              <ListItemButton
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ) : (
              <ListItemButton component={Link} to={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button className="styledButton" onClick={toggleDrawer(true)}>
        <Typography variant="h6" component="div">
          ME
          <br />
          NU
        </Typography>
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Menu;
















// // client/src/components/Header/AvatarMenu.jsx

// import React, { useState, useContext, useEffect } from "react";
// import {
//   Avatar,
//   IconButton,
//   Menu,
//   MenuItem,
//   Typography,
//   Divider,
//   ListItemIcon,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import SquareIcon from "@mui/icons-material/Square";
// import LockOpenIcon from "@mui/icons-material/LockOpen";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import Settings from "@mui/icons-material/Settings";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import Logout from "@mui/icons-material/Logout";
// import { AuthContext } from "../../context/auth.context";
// import "./Header.css";

// const AvatarMenu = () => {
//   const { isLoggedIn, logOutUser } = useContext(AuthContext);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     logOutUser();
//     handleClose();
//   };

//   return (
//     <div>
//       <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
//         <Avatar
//           className="avatarButton"
//           src={user ? user.imgUrl : "/NoUser.jpg"}
//           alt={user ? user.name : "Default User"}
//         />
//       </IconButton>
//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: "visible",
//             border: "1px solid #222222",
//             mt: 1.5,
//             "& .MuiAvatar-root": {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             "&:before": {
//               content: '""',
//               display: "block",
//               position: "absolute",
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: "background.paper",
//               transform: "translateY(-50%) rotate(45deg)",
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: "right", vertical: "top" }}
//         anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//       >
//         {isLoggedIn ? (
//           <div>
//             <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
//               {user?.name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
//               {user?.email}
//             </Typography>
//             <Divider />
//             <MenuItem component={Link} to="/">
//               <ListItemIcon>
//                 <SquareIcon fontSize="small" />
//               </ListItemIcon>
//               Home
//             </MenuItem>
//             <MenuItem component={Link} to="/profile">
//               <ListItemIcon>
//                 <AccountCircle fontSize="small" />
//               </ListItemIcon>
//               Profile
//             </MenuItem>
//             <MenuItem onClick={handleLogout}>
//               <ListItemIcon>
//                 <Logout fontSize="small" />
//               </ListItemIcon>
//               Logout
//             </MenuItem>
//           </div>
//         ) : (
//           <div>
//             <MenuItem component={Link} to="/signup">
//               <ListItemIcon>
//                 <LockOpenIcon fontSize="small" />
//               </ListItemIcon>
//               Sign Up
//             </MenuItem>
//             <MenuItem component={Link} to="/login">
//               <ListItemIcon>
//                 <ExitToAppIcon fontSize="small" />
//               </ListItemIcon>
//               Login
//             </MenuItem>
//           </div>
//         )}
//         <MenuItem component={Link} to="/settings">
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// };

// export default AvatarMenu;

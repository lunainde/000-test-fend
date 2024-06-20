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

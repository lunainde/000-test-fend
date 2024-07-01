//client/src/components/UserCard/UserCard.jsx
import React from 'react';
import { Typography, Box, Avatar, Link } from '@mui/material';
import "./CardStyle.css";

const UserCard = ({ user }) => {
  if (!user) {
    return null;
  }
  
  return (
    <Box className="user-card">
      <Avatar
          src={user ? user.imgUrl : " "}
          alt={user ? user.name : " "}
          sx={{
        width: "80px !important",
        height: "80px !important",
        border: "1px solid black",
        borderRadius: "0 !important",
        marginRight: "1rem",
        }}
      />

      <Box className="user-info">
        {/* <Typography variant="h6">{user.name}</Typography> */}
        <Link href={user.siteUrl} target="_blank" rel="noopener noreferrer" underline="none">
            <Typography variant="h6">{user.name}</Typography>
        </Link>
        <Typography variant="body2" color="textSecondary">{user.headline}</Typography>
      </Box>
    </Box>
  );
};

export default UserCard;

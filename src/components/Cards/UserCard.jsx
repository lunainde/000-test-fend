//client/src/components/UserCard/UserCard.jsx
import React from 'react';
import { Typography, Box, Avatar, Link } from '@mui/material';
import './UserCard.css';

const UserCard = ({ user }) => {
  if (!user) {
    return null; // Or render a fallback UI
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

// const UserCard = ({ user }) => {
//   return (
//     <Box className="user-card">
//       <Avatar src={user.imgUrl} alt={user.name} className="user-avatar" />
//       <Box className="user-info">
//         <Typography variant="h6">{user.name}</Typography>
//         <Typography variant="body2" color="textSecondary">{user.headline}</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default UserCard;
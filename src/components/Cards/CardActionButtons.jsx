// client/src/components/Cards/CardActionButtons.jsx

import React from 'react';
import { IconButton, CardActions, Badge  } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import axios from 'axios';

const CardActionButtons = ({ postId, likeCount, liked, bookmarked, shared, handleLikeClick, handleBookmarkClick, handleShareClick }) => {
  const handleBookmarkToggle = async () => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      // Handle missing token (e.g., redirect to login)
      console.error("Missing auth token for bookmarking post.");
      return; // Exit the function if no token
    }
    try {
      if (bookmarked) {
        // Unbookmark the post
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}/unbookmark`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        });
      } else {
        // Bookmark the post
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}/bookmark`, {}, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        });
      }
      handleBookmarkClick(); // Update the bookmarked state in the parent component
    } catch (error) {
      console.error("Error bookmarking post:", error);
    }
  };
  
  return (
    <CardActions
      className="bottom-fix"
      sx={{ justifyContent: "space-around", marginTop: "auto" }}
    >
      <IconButton
        onClick={handleLikeClick}
        sx={{
          color: liked ? "primary.main" : "default",
          backgroundColor: liked ? "rgba(25, 118, 210, 0.1)" : "transparent",
        }} >
        <Badge badgeContent={likeCount} color="primary">
          <ThumbUpOutlinedIcon />
        </Badge>
      </IconButton>

      <IconButton
        onClick={handleBookmarkToggle}
        sx={{
          color: bookmarked ? "primary.main" : "default",
          backgroundColor: bookmarked ? "rgba(25, 118, 210, 0.1)" : "transparent",
        }}>
        <BookmarkBorderOutlinedIcon />
      </IconButton>

      <IconButton
        onClick={handleShareClick}
        sx={{
          color: shared ? "primary.main" : "default",
          backgroundColor: shared ? "rgba(25, 118, 210, 0.1)" : "transparent",
        }}
      >
        <ShareOutlinedIcon />
      </IconButton>

    </CardActions>
  );
};

export default CardActionButtons;
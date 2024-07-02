// client/src/components/Cards/CardActionButtons.jsx

import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, CardActions, Badge } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";
import ShareIconMenu from "../Cards/ShareIconMenu";

const CardActionButtons = ({ post }) => {
  const { title, url = window.location.href, _id: postId } = post;
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // initialize like count
  const [bookmarked, setBookmarked] = useState(false);
  const [shared, setShared] = useState(false);

  const { user: loggedInUser, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // USE EFFECT TO FETCH INITIAL LIKE COUNT
  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/like/${post._id}/post`
        );
        setLikeCount(response.data.likeCount);
      } catch (error) {
        console.error("Error fetching like count:", error);
      }
    };

    fetchLikeCount();
  }, [post._id]);

  useEffect(() => {
    const fetchLikeStatus = async () => {
      if (isLoggedIn) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/like/${loggedInUser._id}/${post._id}/check`
          );
          setLiked(response.data.liked);
        } catch (error) {
          console.error("Error checking like status:", error);
        }
      }
    };

    fetchLikeStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, post._id]); //like => [added arguments]

  // USE EFFECT TO FETCH INITIAL BOOKMARK STATE
  useEffect(() => {
    const fetchBookmarkState = async () => {
      if (isLoggedIn) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/user/bookmarks`,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("authToken"),
              },
            }
          );
          const bookmarks = response.data;
          setBookmarked(
            bookmarks.some((bookmark) => bookmark._id === post._id)
          );
        } catch (error) {
          console.error("Error fetching bookmarks:", error);
        }
      }
    };

    fetchBookmarkState();
  }, [isLoggedIn, post._id]);

  //LIKE----------------
  const handleLikeClick = async () => {
    if (isLoggedIn) {
      if (liked) {
        await axios.delete(
          `${process.env.REACT_APP_SERVER_URL}/api/like/post/${post._id}/user/${loggedInUser._id}`
        );
        setLiked(!liked);
        setLikeCount(likeCount - 1); // decrement like count
      } else {
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/like`, {
          userId: loggedInUser._id, //Replaced User._id by loggedInUser._id
          itemId: post._id,
          itemType: "post",
        });
        setLiked(!liked);
        setLikeCount(likeCount + 1); // increment like count
      }
    } else {
      navigate("/login");
    }
  };

  // BOOKMARK------------
  const handleBookmarkClick = () => {
    if (isLoggedIn) {
      setBookmarked(!bookmarked);
    } else {
      navigate("/login");
    }
  };

  // SHARE---------------
  const handleShareClick = () => {
    if (isLoggedIn) {
      setShared(!shared);
    } else {
      navigate("/login");
    }
  };

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
        await axios.delete(
          `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}/unbookmark`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("authToken"),
            },
          }
        );
      } else {
        // Bookmark the post
        await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}/bookmark`,
          {},
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("authToken"),
            },
          }
        );
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
        }}
      >
        <Badge badgeContent={likeCount} color="primary">
          <ThumbUpOutlinedIcon />
        </Badge>
      </IconButton>

      <IconButton
        onClick={handleBookmarkToggle}
        sx={{
          color: bookmarked ? "primary.main" : "default",
          backgroundColor: bookmarked
            ? "rgba(25, 118, 210, 0.1)"
            : "transparent",
        }}
      >
        <BookmarkBorderOutlinedIcon />
      </IconButton>

        <ShareIconMenu url={url} title={title} />
    </CardActions>
  );
};

export default CardActionButtons;

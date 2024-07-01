//client/src/components/PostCard/PostCard.jsx

import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Chip, Divider } from "@mui/material";
import { AuthContext } from "../../context/auth.context";
import CardActionButtons from "../Cards/CardActionButtons";
import axios from "axios";
import "./CardStyle.css";

const PostCard = ({ post }) => {
  const { user } = post;
  const { user: loggedInUser, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // initialize like count
  const [bookmarked, setBookmarked] = useState(false);
  const [shared, setShared] = useState(false);

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
  }, []);

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

  // Ensure user is not null before rendering
  if (!user) {
    return <div>Loading...</div>;
  }

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
          userId: user._id,
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
      // Add logic here to handle the share action (e.g., API call)
    } else {
      navigate("/login");
    }
  };

  return (
    <Card sx={{ minWidth: 345, maxWidth: 345 }}>
      <Link className="card-link" to={`/posts/${post._id}`}>
        <CardMedia
          component="img"
          alt={post.title}
          height="200"
          image={post.imgUrl}
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography>{post.user.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(post.createdAt).toLocaleDateString()}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" textAlign="left">
            {post.user.category}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            align="left"
            className="title-height"
            sx={{ minHeight: "160px" }}
          >
            {post.title}
          </Typography>

          <Box mt={2}>
            {post.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                sx={{ backgroundColor: "#f5f5f5", marginRight: 1 }}
              />
            ))}
          </Box>

        </CardContent>
      </Link>

      <Divider />
      <CardActionButtons
        postId={post._id}
        likeCount={likeCount} 
        liked={liked}
        bookmarked={bookmarked}
        shared={shared}
        handleLikeClick={handleLikeClick}
        handleBookmarkClick={handleBookmarkClick}
        handleShareClick={handleShareClick}
      />
    </Card>
  );
};

export default PostCard;

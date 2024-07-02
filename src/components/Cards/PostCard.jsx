//client/src/components/PostCard/PostCard.jsx

// import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Chip, Divider } from "@mui/material";
// import { AuthContext } from "../../context/auth.context";
import CardActionButtons from "../Cards/CardActionButtons";
// import axios from "axios";
import "./CardStyle.css";

const PostCard = ({ post }) => {
  const { user } = post;

  // const { user: loggedInUser, isLoggedIn } = useContext(AuthContext);
  // const navigate = useNavigate();

  // Ensure user is not null before rendering
  if (!user) {
    return <div>Loading...</div>;
  }

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
      <CardActionButtons post={post} />
    </Card>
  );
};

export default PostCard;

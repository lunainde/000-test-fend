//client/src/components/PostCard/PostCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Box, Chip, Divider, IconButton } from "@mui/material";
import "./PostCard.css";

function PostCard({ post }) {
  //console.log(post.user.name);

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
            <Typography variant="body2" color="text.secondary">
              {post.user.name}
            </Typography>
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
      <CardActions
        className="bottom-fix"
        sx={{ justifyContent: "space-around", marginTop: "auto" }}
      >
        <IconButton>
          <ThumbUpOutlinedIcon />
        </IconButton>
        <IconButton>
          <BookmarkBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <ShareOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;

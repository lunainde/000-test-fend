// client/src/pages/ArticlePage/ArticlePage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ArticlePage.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Box, Chip, Divider, IconButton, Avatar, Link } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const ArticlePage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("authToken"),
            },
          }
        );
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  // ------EDIT/DELETE-----------
  const handleEdit = () => {
    navigate(`/posts/edit/${post._id}`);
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/posts/${post._id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("authToken") },
      });
      navigate("/posts");
    } catch (error) {
      console.error("Failed to delete the post:", error.message);
    }
  };
  // -------------------------

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
  <div>
  
    <Card className="center" sx={{ 
      maxWidth: 1200,
      }}>
      <CardMedia
        component="img"
        alt={post.title}
        height="600"
        image={post.imgUrl} />
    
      <CardContent>
        <Box display="flex">
          <Avatar
            src={post.user.imgUrl}
            alt={post.user.name}
            sx={{
          width: "80px !important",
          height: "80px !important",
          border: "1px solid black",
          borderRadius: "0 !important",
          marginRight: "1rem",
          }}
          />
          <Box>
            <Typography variant="body2" color="text.secondary" textAlign="left">
              {new Date(post.createdAt).toLocaleDateString()}
            </Typography>
            <Link href={post.user.siteUrl} target="_blank" rel="noopener noreferrer" underline="none">
                <Typography textAlign="left">{post.user.name}</Typography>
            </Link>
            <Typography textAlign="left" >{post.user.category}</Typography>
            <Typography textAlign="left" >{post.user.headline}</Typography>
          </Box>
        </Box>
        
        <Divider sx={{ my: 2}} />

        <Typography
          my="24px"
          gutterBottom
          variant="h3"
          component="div"
          align="left"
          className="title-height" >
          {post.title}
        </Typography>

        <Typography
          my="24px"
          gutterBottom
          variant="h6"
          component="div"
          align="left"
          className="title-height">
          {post.content}
        </Typography>

      </CardContent>
      
      <Box mt={2}>
          {post.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{ backgroundColor: "#f5f5f5", marginRight: 1 }} />
          ))}
      </Box>
      <Divider sx={{ mt: 3 }}/>
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

    <CardActions className="crud-card center" sx={{ maxWidth: 1200, }}>
    <IconButton onClick={handleEdit}>
      <EditIcon className="crud-btn" />
    </IconButton>
    <IconButton onClick={handleDelete}>
      <DeleteIcon className="crud-btn" />
    </IconButton>
    </CardActions>

  </div>
  );
};

export default ArticlePage;



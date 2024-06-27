//client/src/components/PostCard/PostCard.jsx

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Box, Chip, Divider, IconButton } from "@mui/material";
import { AuthContext } from "../../context/auth.context";
import "./PostCard.css";

const PostCard = ({ post }) => {
  const { user } = post;
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [shared, setShared] = useState(false);

  // Ensure user is not null before rendering
  if (!user) {
    return <div>Loading...</div>;
  }

  const handleLikeClick = () => {
    if (isLoggedIn) {
      setLiked(!liked);
      // Add logic here to handle the like action (e.g., API call)
    } else {
      navigate("/login");
    }
  };

  const handleBookmarkClick = () => {
    if (isLoggedIn) {
      setBookmarked(!bookmarked);
      // Add logic here to handle the bookmark action (e.g., API call)
    } else {
      navigate("/login");
    }
  };

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
        <CardMedia component="img" alt={post.title} height="200" image={post.imgUrl} />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
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
          <ThumbUpOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={handleBookmarkClick}
          sx={{
            color: bookmarked ? "primary.main" : "default",
            backgroundColor: bookmarked ? "rgba(25, 118, 210, 0.1)" : "transparent",
          }}
        >
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
    </Card>
  );
};

export default PostCard;




// ------------------
// import React from "react";
// import { Link } from "react-router-dom";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
// import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import { Box, Chip, Divider, IconButton } from "@mui/material";
// import "./PostCard.css";
//   const PostCard = ({ post }) => {
//     const { user } = post;
//     // Ensure user is not null before rendering
//     if (!user) {
//       return <div>Loading...</div>;
//     }

//   return (
//     <Card sx={{ minWidth: 345, maxWidth: 345 }}>
//       <Link className="card-link" to={`/posts/${post._id}`}>
//         <CardMedia
//           component="img"
//           alt={post.title}
//           height="200"
//           image={post.imgUrl}
//         />
//         <CardContent>
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             mb={1}
//           >
//             <Typography>{post.user.name}</Typography>
//             <Typography variant="body2" color="text.secondary">{new Date(post.createdAt).toLocaleDateString()}</Typography>
//           </Box>
//           <Typography variant="body2" color="text.secondary" textAlign="left">
//             {post.user.category}
//           </Typography>
//           <Divider sx={{ my: 2 }} />
//           <Typography
//             gutterBottom
//             variant="h6"
//             component="div"
//             align="left"
//             className="title-height"
//             sx={{ minHeight: "160px" }}
//           >
//             {post.title}
//           </Typography>
//           <Box mt={2}>
//             {post.tags.map((tag, index) => (
//               <Chip
//                 key={index}
//                 label={tag}
//                 sx={{ backgroundColor: "#f5f5f5", marginRight: 1 }}
//               />
//             ))}
//           </Box>
//         </CardContent>
//       </Link>

//       <Divider />
//       <CardActions
//         className="bottom-fix"
//         sx={{ justifyContent: "space-around", marginTop: "auto" }}
//       >
//         <IconButton>
//           <ThumbUpOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <BookmarkBorderOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <ShareOutlinedIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// }

// export default PostCard;

// //client/src/components/Cards/StartupCard.jsx

import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Box, Chip, Divider, IconButton, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function StartupCard({ user }) {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [shared, setShared] = useState(false);

  if (!user) {
    return <p>No user data</p>;
  }

  const formattedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString()
    : "Date not available";
  const tags =
    user.tags && user.tags.length > 0 ? user.tags : ["No tags available"];
  const about = user.about || "No description available";

  const handleCardClick = (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      window.open(user.siteUrl, "_blank");
    }
  };

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
      <CardMedia component="img" alt={user.name} height="200" image={user.imgUrl} />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Link
            className="card-link"
            onClick={handleCardClick}
            component="button"
            underline="none"
          >
            <Typography>{user.name}</Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {formattedDate}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" textAlign="left">
          {user.category}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          align="left"
          sx={{ minHeight: "160px" }}
          className="about-height"
        >
          {about}
        </Typography>
        <Box mt={2}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{ backgroundColor: "#f5f5f5", marginRight: 1 }}
            />
          ))}
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "space-around" }}>
      <IconButton
          onClick={handleLikeClick}
          sx={{
            color: liked ? "primary.main" : "default",
            backgroundColor: liked ? "rgba(25, 118, 210, 0.1)" : "transparent"
          }}
        >
          <ThumbUpOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={handleBookmarkClick}
          sx={{
            color: bookmarked ? "primary.main" : "default",
            backgroundColor: bookmarked ? "rgba(25, 118, 210, 0.1)" : "transparent"
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
}

export default StartupCard;
























// --------------V3--------------------
// import React from "react";
// import { AuthContext } from "../../context/auth.context"; //LOGGEDIN
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
// import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import { Box, Chip, Divider, IconButton, Link } from "@mui/material";

// function StartupCard({ user }) {
//   if (!user) {
//     return <p>No user data</p>;
//   }
//   const formattedDate = user.createdAt
//     ? new Date(user.createdAt).toLocaleDateString()
//     : "Date not available";
//   const tags =
//     user.tags && user.tags.length > 0 ? user.tags : ["No tags available"];
//   const about = user.about || "No description available";

//   return (
//     <Card sx={{ minWidth: 345, maxWidth: 345 }}>
//       <Link
//         className="card-link"
//         href={user.siteUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         underline="none"
//       >
//         <CardMedia
//           component="img"
//           alt={user.name}
//           height="200"
//           image={user.imgUrl}
//         />
//         <CardContent>
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             mb={1}
//           >
//             <Typography>{user.name}</Typography>
//             <Typography variant="body2" color="text.secondary">
//               {" "}
//               {formattedDate}{" "}
//             </Typography>
//           </Box>
//           <Typography variant="body2" color="text.secondary" textAlign="left">
//             {user.category}
//           </Typography>
//           <Divider sx={{ my: 2 }} />
//           <Typography
//             gutterBottom
//             variant="h6"
//             component="div"
//             align="left"
//             sx={{ minHeight: "160px" }}
//             className="about-height"
//           >
//             {about}
//           </Typography>
//           <Box mt={2}>
//             {tags.map((tag, index) => (
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
//       <CardActions sx={{ justifyContent: "space-around" }}>
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

// export default StartupCard;

//-------------VERSION 1---------------
// import React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
// import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import { Box, Chip, Divider, IconButton } from "@mui/material";

// function StartupCard({ user }) {
//   if (!user) {
//     return <p>No user data</p>;
//   }

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt={user.name}
//         height="200"
//         image={user.imgUrl}
//       />
//       <CardContent>
//         <Box
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           mb={1}
//         >
//           <Typography variant="body2" color="text.secondary">
//             {user.name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {new Date(user.createdAt).toLocaleDateString()}
//           </Typography>
//         </Box>
//         <Typography gutterBottom variant="h6" component="div" align="left">
//           {user.about}
//         </Typography>
//         <Box mt={2}>
//           <Chip
//             label={user.tags}
//             sx={{ backgroundColor: "#f5f5f5", marginRight: 1 }}
//           />
//         </Box>
//       </CardContent>
//       <Divider />
//       <CardActions sx={{ justifyContent: "space-around" }}>
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

// export default StartupCard;
